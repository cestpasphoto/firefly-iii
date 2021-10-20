# Patched Firefly III

Based on the great repo https://github.com/firefly-iii/firefly-iii with the following additions:

### Added Features

* [x] Updated UI
  * [x] Dashboard top bar: added shortcut to new expense and new transfer, merge settings and user menu
  * [x] Simplified dashboard: removed several boxes that I didn't used and that couldn't be disabled in settings
  * [x] Time period of 1 week and 1 month are now sliding periods, not fixed ones. And this period is updated every time.
* [x] Account reconciliation
  * [ ] Automatic: just input your latest balance and it'll find which operations to select
  * [x] Added shortcut on dashboard to reconcilate any account
  * [x] Forced to be over last month instead of current settings
  * [x] Start without any button press
* [x] Transactions
  * [x] Creation form: reorganised and simplified
  * [x] Recurring: create them earlier (1 week before) and run the uncreated past ones (if you forget to run cron in the last 3 days)

### What if I want such features in my docker

Download `patch_docker.sh`, edit config in first lines, then run it.
No need to clone this repo. Also this script runs the toolchain if any updates on .js files.