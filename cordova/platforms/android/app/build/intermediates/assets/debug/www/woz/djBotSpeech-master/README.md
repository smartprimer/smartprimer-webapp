# djBotSpeech
Speak commands recieved from an web based message interface.

This app uses `say.js` to speak messages using the built in Apple Speech engine.

Currently, this will only work on Mac OSX system, but can run on Linux. You can look up the `say.js` docs here: (https://www.npmjs.com/package/say)

Data is communicated using MQTT and sends to the MQTT broker running on hri.stanford.edu

The control interface can be found at (bigmo.stanford.edu:8080)

## Instructions
1. Install NodeJS on your system (for Mac, use Homebrew to install. Follow these instrcutions: http://blog.teamtreehouse.com/install-node-js-npm-mac)
2. Clone this repo locally
3. Run `npm install` to install dependency modules 
4. Run `node server.js`

## Note on voices
The current system uses the system default voice. On Mac, you can change this in the System Preferences under `Dicatation and Speech`. The voice of Siri is the high quality "Samantha" voice.

For French, I use "Audrey" (you may need to install this voice on your Mac under the Speech settings).
