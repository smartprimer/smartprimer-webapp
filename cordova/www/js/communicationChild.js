'use strict';

var encodeMsg = function(tag, value1, value2) {
    return tag + ":" + value1 + ":" + value2;
};

var decodeMsg = function(msg) {
    return msg.split(':');
};

// Send a message to the parent
var sendToParent = function(msg) {
    // Make sure you are sending a string, and to stringify JSON
    console.log('SEND TO PARENT: ' + msg)
    window.parent.postMessage(msg, '*');
};

/**
 * bindEvent listens to messages from child elements -
 * in particular from the story iFrame.
 */
var bindEvent = function(element, eventName, eventHandler) {
    console.log('BIND EVENT: ' + element.location.href + " event name: " + eventName)
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
};
