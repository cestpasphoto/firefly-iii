#!/bin/bash

### Edit these variables
DOCKER_CONTAINER="firefly_fireflyiii_1"
DOCKER_COMPOSE="/var/www/firefly/docker-compose.yml"


### Apply patch(es)
apply_patch () {
  # Local patch or local patches or remote patch file ?
  if [[ -f "frontend.patch" ]]; then
    cat frontend.patch resources.patch app.patch public_v1.patch > global.patch
    if [[ -f "public_v2.patch" ]]; then
      cat public_v2.patch >> global.patch
    fi
  elif [[ -f "global.patch" ]]; then
    :
  else
    wget "https://github.com/cestpasphoto/firefly-iii/raw/main/global.patch"
  fi

  sudo docker cp global.patch ${DOCKER_CONTAINER}:/var/www/html/
  sudo docker exec -it ${DOCKER_CONTAINER} /bin/bash -c '
    patch -s -p0 < global.patch
    rm global.patch
  '
}

### Clean docker from previous patches (redownload image)
clean_docker () {
  sudo docker container stop ${DOCKER_CONTAINER}
  sudo docker container rm ${DOCKER_CONTAINER}
  #sudo docker-compose pull
  sudo docker-compose -f ${DOCKER_COMPOSE} up -d
}

### Prepare environment to compile and generate patches
install_env () {
  sudo docker exec -it ${DOCKER_CONTAINER} /bin/bash -c '
    # backup stuff
    cp -a public    public.backup
    cp -a frontend  frontend.backup
    cp -a resources resources.backup
    cp -a app       app.backup

    # install nodejs and npm, and update to latest version, install laravel mix, and compile
    apt-get update ; apt-get install -y npm nano ; npm cache clean -f ; npm install -g n ; n lts ; PATH="$PATH"
    cd frontend ; npm install ; cd /var/www/html/
  '
}

# Compile and generate patches
build () {
  sudo docker exec -it ${DOCKER_CONTAINER} /bin/bash -c '
    # Compile
    cd frontend ; npm run prod ; cd /var/www/html/

    # Create patches
    diff -Naur public.backup/v1/    public/v1/    > public_v1.patch
    diff -Naur public.backup/v2/    public/v2/    > public_v2.patch
    diff -Naur frontend.backup/src/ frontend/src/ > frontend.patch
    diff -Naur resources.backup/    resources/    > resources.patch
    diff -Naur app.backup/          app/          > app.patch
    cat public_v1.patch public_v2.patch frontend.patch resources.patch app.patch > global.patch
    rm  public_v1.patch public_v2.patch frontend.patch resources.patch app.patch
  '

  # Get the patch on host
  sudo docker cp ${DOCKER_CONTAINER}:/var/www/html/global.patch .
}

###############################################################################


# If firefly version updated, follow these steps:
#   be sure that "docker-compose pull" command is uncommented in clean_docker()
#   run clean_docker, install_env, apply_patch
#   resolve merging conflicts
#   run build and get global.patch
#   comment the "docker-compose pull" command

clean_docker
install_env
apply_patch
#build

###clean_docker
###apply_patch
