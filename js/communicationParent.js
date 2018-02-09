'use strict';

var showChat = function() {
  let sourceFrame = document.getElementById("primer");
  let chatFrame = document.getElementById("chat");
  if (sourceFrame.classList.contains("full")) {
    sourceFrame.classList.remove("full");
  }
  if (chatFrame.classList.contains("hidden")) {
    chatFrame.classList.remove("hidden");
  }
};

var hideChat = function() {
  let sourceFrame = document.getElementById("primer");
  let chatFrame = document.getElementById("chat");
  if (!sourceFrame.classList.contains("full")) {
    sourceFrame.classList.add("full");
  }
  if (!chatFrame.classList.contains("hidden")) {
    chatFrame.classList.add("hidden");
  }
}

var bindEvent = function(element, eventName, eventHandler) {
  if (element.addEventListener) {
      element.addEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
      element.attachEvent('on' + eventName, eventHandler);
  }
};

// Receive messages from the story by listening to child window
bindEvent(window, 'message', function (e) {
  let msg = decodeMsg(e.data);
  let tag = msg[0];
  let data = msg[1];
  // console.log("MESSAGE: " + tag + " : " + data);

  // Showing or hiding chat
  if (tag == "showChat") {
    showChat();
  } 
  if (tag == "hideChat") {
    hideChat();
  }

  if (tag == "setName") {
      // Send name to chat
  }
});

// Send message to the chatbot
var sendToChat = function(msg) {
  // TODO is there a way to add a tag in addition to the data?
  let chatFrame = document.getElementById("chat");
  chatFrame.contentWindow.postMessage(msg, '*');
};
