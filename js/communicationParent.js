'use strict';

/**
 * showChat and hideChat control the layout of the page.
 */

var showChat = function() {
  let storyFrame = document.getElementById("primer");
  let chatFrame = document.getElementById("chat");
  if (storyFrame.classList.contains("full")) {
    storyFrame.classList.remove("full");
  }
  if (chatFrame.classList.contains("hidden")) {
    chatFrame.classList.remove("hidden");
  }
};

var hideChat = function() {
  let storyFrame = document.getElementById("primer");
  let chatFrame = document.getElementById("chat");
  if (!storyFrame.classList.contains("full")) {
    storyFrame.classList.add("full");
  }
  if (!chatFrame.classList.contains("hidden")) {
    chatFrame.classList.add("hidden");
  }
};

/**
 * sendToChat passes messages to the chat window.
 */ 
var sendToChat = function(msg) {
  let chatFrame = document.getElementById("chat");
  chatFrame.contentWindow.postMessage(msg, '*');
};

/**
 * sendToStory passes messages to the story window.
 */
var sendToStory = function(msg) {
  let storyFrame = document.getElementById("primer");
  storyFrame.contentWindow.postMessage(msg, '*');
};

/** 
 * Receive messages from the story by listening to child window.
 * bindEvent is defined in communcationChild file.
 */
bindEvent(window, 'message', function (e) {
  let msg = decodeMsg(e.data);
  let tag = msg[0];
  // console.log("MESSAGE: " + tag); // For debugging

  switch(tag) {
    case "showChat":
      showChat();
      break;
    case "hideChat":
      hideChat();
      break;
    case "setName":
      sendToChat(msg);
      break;
    case "mission1Answer":
      handleMission1Answer(msg[1], msg[2]);
      break;
    default:
      break;
  }
});

/** 
 * Relating to the first Mission.
 */
let handleMission1Answer = function(area, answer) {
  // console.log("Actual area: " + area + " / Answer: " + answer); // For debugging

  if (area === answer) { // Correct answer!
    sendToStory("mission1:correct");
    sendToChat("mission1:correct");
  } else if (area === answer / 2) { // Forgot to halve answer
    sendToStory("mission1:double");   
    sendToChat("mission1:double");
  } else { // Just wrong
    sendToStory("mission1:incorrect");
    sendToChat("mission1:incorrect");
  }
};
