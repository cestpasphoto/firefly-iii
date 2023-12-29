#!/bin/bash

### Edit these variables
DOCKER_CONTAINER="firefly_fireflyiii_1"
DOCKER_COMPOSE="/var/www/firefly/docker-compose.yml"
GITHUB_DOWNLOAD="https://github.com/cestpasphoto/firefly-iii/raw/main/"
SRC_PATCH="firefly_src.patch"
BIN_PATCH="firefly_bin.patch"

### Apply patch(es)
apply_patch () {
  # Download remote patch if locally missing
  [[ -f ${SRC_PATCH} ]] || wget ${GITHUB_DOWNLOAD}${SRC_PATCH}
  cp ${SRC_PATCH} global.patch
  
  if [[ "$1" == "src+bin" || "$1" == "" ]]; then
    [[ -f ${BIN_PATCH} ]] || wget ${GITHUB_DOWNLOAD}${BIN_PATCH}
    cat ${BIN_PATCH} >> global.patch
  fi

  sudo docker cp global.patch ${DOCKER_CONTAINER}:/var/www/html/
  sudo docker exec -it ${DOCKER_CONTAINER} /bin/bash -c '
    patch -s -p0 < global.patch
    rm global.patch
  '
  rm global.patch
}

### Clean docker from previous patches (redownload image)
clean_docker () {
  sudo docker container stop ${DOCKER_CONTAINER}
  sudo docker container rm ${DOCKER_CONTAINER}
  if [[ "$1" == "pull" ]]; then
    sudo docker-compose pull
  fi
  sudo docker-compose -f ${DOCKER_COMPOSE} up -d
}

### Prepare environment to compile and generate patches
install_env () {
  sudo docker exec -it ${DOCKER_CONTAINER} /bin/bash -c '
    # backup stuff
    cp -a public    public.backup
    cp -a resources resources.backup
    cp -a app       app.backup

    # install nodejs and npm, and update to latest version, install laravel mix, and compile
    apt-get update ; apt-get install -y npm nano ; npm cache clean -f ; npm install -g n ; n lts ; PATH="$PATH"
    npm install
  '
}

# Compile and generate patches
build () {
  sudo docker exec -it ${DOCKER_CONTAINER} /bin/bash -c '
    # Build v1 layout first
    mv package.json     package.new.json
    mv package.old.json package.json
    npm install laravel-mix
    npx mix

    # Fix some permissions and compile
    mv package.json     package.old.json
    mv package.new.json package.json
    npm install
    npm run build

    # Create patches
    find ./ -iname "*.rej" -delete ; find ./ -iname "*.orig" -delete
    diff -Naur -x reconcile.js public.backup/v1/ public/v1/ > firefly_bin.patch
  '

  # Get the patch on host
  sudo docker cp ${DOCKER_CONTAINER}:/var/www/html/firefly_bin.patch .
}

###############################################################################


if [[ "$1" == "update" ]]; then
  # Update docker based on firefly_src.patch
  clean_docker "pull"
  install_env
  apply_patch "src"

  echo -en "\n\n => check above and type 'build' if no conflict during patching: "
  read userans
  if [[ "$userans" == "build" ]]; then
    build
  else
    echo "so, solve such conflicts and then run ./patch_docker.sh build"
  fi

elif [[ "$1" == "build" ]]; then
  # Just build and export firefly_bin.patch
  build

elif [[ "$1" == "patch" ]]; then
  # Patch using src.patch + bin.patch
  clean_docker
  apply_patch "src+bin"

elif [[ "$1" == "custom" ]]; then
  clean_docker
  install_env
  apply_patch "src"

else
  echo "\
Use one of these actions as argument:
  update   (update docker, apply firefly_src.patch, then ask to build)
  build    (build and export firefly_bin.patch)
  patch    (clean and apply src+bin patches)"
fi
