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
  window.parent.postMessage(msg, '*');
};
