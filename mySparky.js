/**
 * @file Defines Admin functions for Spark
 * @author guillain guillain@gmail.com
 * @license GPL-3.0
 */

// Load config
var config = require('./config');


exports.sparky = function (bot, trigger) {
    var cmd = trigger.args['1'];
    var opt  = trigger.args['2'] || '';
    var optsec  = trigger.args['3'] || '';
    var helpMsg = 'Argument missing, try **' + trigger.args + ' help** \n';
  
    var Spark = require('node-sparky');
    var spark = new Spark({ token: config.token  });

    var tosay = '**' + cmd + '(' + opt + ')**\n';

    // Log
    console.log('>>> cmd:' + cmd + ', opt:' + opt + ', optsec:' + optsec);

    // Command doesn't have the necessary minimum number of parameter
    if (trigger.args.length < 2)  { tosay = helpMsg; }

    // Help command
    else if (cmd == 'help') { 
      tosay  = config.sparkbot + ' [ command ] [ option ] [ secondary option ]\n\n';
      tosay += '* setToken(token), return String \n';
      tosay += '* contentGet(contentId), return <File> \n';
      tosay += '* contentCreate(filePath, [timeout]), return <File> \n';
      tosay += '* licensesGet([orgId], [max]), return Array.<License> \n';
      tosay += '* licenseGet(licenseId), return <License> \n';
      tosay += '* membershipsGet([membershipSearch], [max]), return Array.<Membership> \n';
      tosay += '* membershipGet(membershipId), return <Membership> \n';
      tosay += '* membershipAdd(roomId, personEmail, [isModerator]), return <Membership> \n';
      tosay += '* membershipUpdate(membership), return <Membership> \n';
      tosay += '* membershipRemove(membershipId) \n';
      tosay += '* messagesGet(messageSearch, [max]), return Array.<Message> \n';
      tosay += '* messageGet(messageId), return <Message> \n';
      tosay += '* messageSend(message, [file]), return <Message> \n';
      tosay += '* messageRemove(messageId) \n';
      tosay += '* organizationsGet([max]), return Array.<Organization> \n';
      tosay += '* organizationGet(orgId), return <Organization> \n';
      tosay += '* peopleGet([personSearch], [max]), return Array.<Person> \n';
      tosay += '* personGet(personId), return <Person> \n';
      tosay += '* personMe(), return <Person> \n';
      tosay += '* personAdd(person), return <Person> \n';
      tosay += '* personUpdate(person), return <Person> \n';
      tosay += '* personRemove(personId) \n';
      tosay += '* rolesGet([max]), return Array.<Role> \n';
      tosay += '* roleGet(roleId), return <Role> \n';
      tosay += '* roomsGet([roomSearch], [max]), return Array.<Room> \n';
      tosay += '* roomGet(roomId), return <Room> \n';
      tosay += '* roomAdd(title, [teamId]), return <Room> \n';
      tosay += '* roomUpdate(room), return <Room> \n';
      tosay += '* roomRemove(roomId) \n';
      tosay += '* teamsGet([max]), return Array.<Team> \n';
      tosay += '* teamGet(teamId), return <Team> \n';
      tosay += '* teamAdd(name), return <Team> \n';
      tosay += '* teamUpdate(team), return <Team> \n';
      tosay += '* teamRemove(teamId) \n';
      tosay += '* teamMembershipsGet(teamId, [max]), return Array.<TeamMembership> \n';
      tosay += '* teamMembershipGet(membershipId), return <TeamMembership> \n';
      tosay += '* teamMembershipAdd(teamId, personEmail, isModerator), return <TeamMembership> \n';
      tosay += '* teamMembershipUpdate(teamMembership), return <TeamMembership> \n';
      tosay += '* teamMembershipRemove(membershipId) \n';
      tosay += '* webhooksGet([max]), return Array.<Webhook> \n';
      tosay += '* webhookGet(webhookId), return <Webhook> \n';
      tosay += '* webhookAdd(webhook), return <Webhook> \n';
      tosay += '* webhookUpdate(webhook), return <Webhook> \n';
      tosay += '* webhookRemove(webhookId) \n';
      tosay += '* webhookAuth(secret, signature, payload), return String | Object \n';
      tosay += '* webhookListen() . webhookHandler \n';
    }
    else  if (cmd == 'setToken') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.setToken(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'contentGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.contentGet(opt)
          .then(function(item) { bot.say('* ' + item.name + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'contentCreate') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.contentCreate(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'licensesGet') {
      spark.licensesGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.name + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'licenseGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.licenseGet(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'membershipsGet') {
      spark.membershipsGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.personEmail + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'membershipGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.membershipGet(opt)
          .then(function(item) { bot.say('* ' + item.personEmail + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'membershipAdd') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.membershipAdd(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'membershipUpdate') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.membershipUpdate(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'membershipRemove') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.membershipRemove(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'messagesGet') {
      spark.messagesGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.text + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'messageGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.messageGet(opt)
          .then(function(item) { bot.say('* ' + item.text + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'messageSend') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.messageSend(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'messageRemove') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.messageRemove(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'organizationsGet') {
      spark.organizationsGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.displayName + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'organizationGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.organizationGet(opt)
          .then(function(item) { bot.say('* ' + item.displayName + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'peopleGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.peopleGet(opt)
          .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.displayName + ', id:' + item.id); }); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'personGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.personGet(opt)
          .then(function(item) { bot.say('* ' + item.displayName + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'personMe') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.personMe(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'personAdd') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.personAdd(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'personUpdate') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.personUpdate(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'personRemove') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.personRemove(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'rolesGet') {
      spark.rolesGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.name + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'roleGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.roleGet(opt)
          .then(function(item) { bot.say('* ' + item.name + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'roomsGet') {
      spark.roomsGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.title + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'roomGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.roomGet(opt)
          .then(function(item) { bot.say('* ' + item.title + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'roomAdd') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.roomAdd(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'roomUpdate') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.roomUpdate(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'roomRemove') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.roomRemove(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'teamsGet') {
      spark.teamsGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.name + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'teamGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.teamGet(opt)
          .then(function(item) { bot.say('* ' + item.name + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'teamAdd') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.teamAdd(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'teamUpdate') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.teamUpdate(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'teamRemove') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.teamRemove(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'teamMembershipsGet') {
      spark.teamMembershipsGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.personEmail + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'teamMembershipGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.teamMembershipGet(opt)
          .then(function(item) { bot.say('* ' + item.personEmail + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'teamMembershipAdd') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.teamMembershipAdd(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'teamMembershipUpdate') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.teamMembershipUpdate(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'teamMembershipRemove') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.teamMembershipRemove(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'webhooksGet') {
      spark.webhooksGet()
        .then(function(items) { items.forEach(function(item) { bot.say('* ' + item.name + ', id:' + item.id); }); })
        .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
    }

    else if (cmd == 'webhookGet') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.webhookGet(opt)
          .then(function(item) { bot.say('* ' + item.name + ', id:' + item.id); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'webhookAdd') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.webhookAdd(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'webhookUpdate') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.webhookUpdate(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'webhookRemove') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.webhookRemove(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'webhookAuth') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.webhookAuth(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else if (cmd == 'webhookListen') {
      if (opt == '') { bot.say(helpMsg); }
      else {
        spark.webhookListen(opt)
          .then(function(item) { bot.say(cmd + ' done'); })
          .catch(function(err) { bot.say(cmd + ' error'); console.log(err); });
      }
    }

    else {
      tosay += 'Command not found \n';
    }

    bot.say(tosay);
}
