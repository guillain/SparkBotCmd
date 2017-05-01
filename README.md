# SparkBotCmd
Spark cmd in chat room with the support of the bot

## Credit
* [node-sparky](https://www.npmjs.com/package/node-sparky)
* [node-flint](https://www.npmjs.com/package/node-flint)

## Features
[Features list](FEATURES.md)

## Install
* Clone localy
```bash
git clone https://github.com/guillain/SparkBotCmd.git
```
* Go into the folder
```bash
cd ServiceDeskBot
```
* Install dependencies
```bash
npm install
```
* Put your CSV file (named km.csv) in the conf folder (key->txt structure)
```bash
cp [your CSV file] conf/km.csv
```
* Config your app with your [spark bot](https://developer.ciscospark.com/apps.html)
```bash
cp config.js.default config.js
vi config.js
```
* Run the application, two configuration availables
* 1/ For the dev, node is used
```bash
./app manual
```
* 2/ For the prod, pm2 is used (install also this dependency)
```bash
./app [start|stop|restart|show|staus|log]
```
* Add the bot in Cisco Spark space and chat with him
```bash
@SparkBotCmd roomsGet
```
