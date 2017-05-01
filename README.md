# SparkBotCmd
Spark API cmd in chat room with the support of the bot.

# Why
The idea is simple: Why I can't used my chat space to drive my spark?
This can be useful for:
* Manage Cisco Spark environment (rooms, teams...)
* Manage production bot by setting the bot token to this app, you ca have the list of webhook, rooms... where the bot is and use
* Last chance of mirroring (room vs room chat replication)

# Credit
* [node-sparky](https://www.npmjs.com/package/node-sparky)
* [node-flint](https://www.npmjs.com/package/node-flint)

# Features
[Features list](FEATURES.md)

# ToDo
* Second parameter of some commands
* Set token valid on environment (can be session)
* Detail of items (by detail option in arg list?)

# Install
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
* * For the **dev**, node is used
```bash
./app manual
```
* * For the **prod**, pm2 is used (install also this dependency)
```bash
./app [start|stop|restart|show|staus|log]
```
* Add the bot in Cisco Spark space and chat with him
* * In **1:1**
```bash
@ roomsGet
```
* * In **team chat**
```bash
@SparkBotCmd roomsGet
```

