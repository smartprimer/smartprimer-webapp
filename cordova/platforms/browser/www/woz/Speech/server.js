var say = require('say');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://commuter.stanford.edu', {
    port: 8000,
    protocolId: 'MQIsdp',
    protocolVersion: 3
});
var child_process = require('child_process');
var exec = child_process.exec;

// Setup the mqtt connection and listen for messages
client.on('connect', function() {
    //client.subscribe('say');
    client.subscribe('english');
    client.subscribe('french');
    client.subscribe('japanese');
    client.subscribe('test');
    client.subscribe('play');
    client.subscribe('say');
    console.log("Waiting for messages...");

    testingMsgs();
});

// Print out the messages and say messages that are topic: "say"
client.on('message', function(topic, message) {
    // message is Buffer
    console.log(topic, message.toString());

    switch (topic) {
        case 'say':
            // use default voice in System Preferences
            console.log('');
            say.speak(message.toString());
            break;

        case 'english':
            //use the english voice to say messages. Note: I am using the Samantha voice
            //Also not that you must send english messages for this to work well
            console.log('english');
            say.speak(message.toString());
            //say.speak(message.toString(), 'Samantha');
            break;

        case 'french':
            //use the French voice to say messages. Note: I am using the Audrey voice
            //Also not that you must send french messages for this to work well
            console.log('french');
            say.speak(message.toString(), 'Audrey');
            break;

        case 'japanese':
            //use the Japanese voice to say messages. Note: I am using the Kyoko voice
            //Also not that you must send japanese messages for this to work well
            console.log('japanese');
            say.speak(message.toString(), 'Kyoko');
            break;

        case 'play':
            console.log('play', "sounds/sound-" + message + ".wav");


            //play a sound from the sound clips libary using ALSA aplay
            exec('afplay sounds/sound-' + message + '.wav', function(err, stdout, stderr) {
                if (err) {
                    console.log('Child process exited with error code', err.code);
                    return
                }
                console.log(stdout);
            });
            break;
    }

    //client.end();
});

function testingMsgs() {
    // messages for testing
    client.publish('test', 'MQTT Connected');
    client.publish('say', 'Hello, I am a need finding machine');
}
