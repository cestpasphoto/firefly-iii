# Patched Firefly III

Based on the great repo https://github.com/firefly-iii/firefly-iii with the following additions:

### Added Features

* [x] Updated UI
  * [x] Dashboard top bar: added shortcut to new expense and new transfer, merge settings and user menu
* [x] Account reconciliation
  * [x] Forced to be over last month instead of current settings
  * [x] Start without any button press
* [x] Recurring transactions
  * [x] Create them earlier (1 week before) and run the uncreated past ones (if you forget to run cron in the last 3 days)

### What if I want such features in my docker

Edit configuration in `./patch_docker.sh`, then run it where your .yml is