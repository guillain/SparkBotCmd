/**
 * @file Cisco Spark Main bot
 * @author guillain guillain@gmail.com
 * @license GPL-3.0
 */

// Import module
var Flint = require('node-flint');
var webhook = require('node-flint/webhook');
var express = require('express');
var bodyParser = require('body-parser');
var Logstash = require('logstash-client');
var _ = require('lodash');
var app = express();
var net = require('net');
app.use(bodyParser.json());

// Load config
var config = require('./config');

// Init flint
var flint = new Flint(config);

// My additionnal features
var mySparky = require('./mySparky.js');

// Start flint
flint.start();

// Set default messages to use markdown globally for this flint instance...
flint.messageFormat = 'markdown';

// Debug echo
flint.on('initialized', function() {
  flint.debug('initialized %s rooms', flint.bots.length);
});

flint.on('message', function(bot, trigger, id) {
  flint.debug('"%s" said "%s" in room "%s"', trigger.personEmail, trigger.text, trigger.roomTitle);
  var sender = require('os').hostname();

  // BigData storage
  if (config.bigdata.enable == true) {
    var message = {
      'timestamp': new Date(),
      'message': trigger.text,
      'from': trigger.personEmail,
      'spaceid': trigger.roomId,
      'spacename': trigger.roomTitle,
      'level': 'info',
      'type': 'bot'
    };
   
    var logstash = new Logstash({type:config.bigdata.type,host: config.bigdata.host, port: config.bigdata.port});
    logstash.send(message);
    flint.debug('Logstash recording should be ok');
  }
});


// Define express path for incoming webhooks
app.post('/flint', webhook(flint) );

// People
flint.hears(/.*/, function(bot, trigger) {
  mySparky.sparky(bot, trigger);
});

// Start expess server
var server = app.listen(config.port, function () {
  flint.debug('Flint listening on port %s', config.port);
});

// Gracefully shutdown (ctrl-c)
process.on('SIGINT', function() {
  flint.debug('stoppping...');
  server.close();
  flint.stop().then(function() {
    process.exit();
  });
});
