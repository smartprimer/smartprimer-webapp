/*
* Project: Primer-Archimedes
* File: speechBot.js
* Description: JavaScript code for Chatbot feature.
* Date: 07/07/2017
*/

/* Variables */
var accessToken = "1d3ef81a217f4c6793152193a513fef7",
  baseUrl = "https://api.api.ai/v1/",
  $closeButton,
  $speechInput, //This stores your <input> element so you can access it in your JavaScript.
  $recBtn, //This stores your <record button> element
  $stopBtn, //This stores your <stop button> element
  recognition, //You store your webkitSpeechRecognition() functionality in this variable. This is for the HTML5 Speech Recognition API.
  messageRecording = "Recording...",
  messageCouldntHear = "I couldn't hear you, could you say that again?",
  messageInternalError = "Oh no, there has been an internal server error!",
  messageSorry = "I'm sorry. I don't have the answer to that yet.";
  clicked = true;

/* Events. */
$(document).ready(function() {
  $speechInput = $("#speech");
  $recBtn = $("#rec");
  $stopBtn = $("#stop_button");
  $bodyClose = $("body");

  $bodyClose.on('click', function(event){
   if (clicked === false){
      const close = document.querySelector('#wordMeaning');
      if (close != undefined){
        if (!close.classList.contains('inactive')){
          close.classList.add('inactive');
          $("#spokenResponse").find(".spoken-response__text").html(" ");
        }
      }
    }
    else clicked = false;

  });

  /*
  * look for when the user presses the Enter key in the input field.
  * When that happens, run the send() function to send off the data to Api.ai
  */
  $speechInput.keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      send();
    }
  });

  /* If click on the rec button, turn on or turn off the speech recognition. */
  $recBtn.on("click", function(event) {
    switchRecognition();
  });

  /* If click on the stop button, stop the audio that is being played. */
  $stopBtn.on("click", function(event) {
    stopAudio();
  });

  /* If click on anywhere of the interface, stop the audio that is playing. */
  $(document).click(function(event) {
    stopAudio();
  });

  $(".debug__btn").on("click", function() {
    $(this).next().toggleClass("is-active");
    return false;
  });
});


/* Functions */

/* Stop the audio message. */
function stopAudio() {
      window.speechSynthesis.cancel();
      updateRec();
}

/* Start speech recognition. */
function startRecognition() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = function(event) {
    respond(messageRecording);
  };

  recognition.onresult = function(event) {
    recognition.onend = null;

    var text = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      console.log("index"+i+": " + event.results[i][0].transcript);
      text += event.results[i][0].transcript;
    }
    setInput(text);
    stopRecognition();
    updateRec();
  };
  recognition.onend = function() {
    respond(messageCouldntHear);
    stopRecognition();
  };
  recognition.lang = "en-US";
  recognition.start();
}

/* Stop speech recognition. */
function stopRecognition() {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
}

/* Switch the speech recognition status. */
function switchRecognition() {
  const isSpeaking = window.speechSynthesis.speaking;
  if (isSpeaking) {
    stopAudio();
  } else {
    startRecognition();
  }
}

/* Set the input text in the question box. */
function setInput(text) {
  $speechInput.val(text);
  send();
}

/* Update recording status. */
function updateRec() {
  let isSpeaking = window.speechSynthesis.speaking;
  $recBtn.text(isSpeaking ? "Stop" : "Ask");
}

/* Send off your query to Api.ai. */
function send() {
  var text = $speechInput.val();
  $.ajax({
    type: "POST",
    url: baseUrl + "query",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + accessToken
    },
    data: JSON.stringify({query: text, lang: "en", sessionId: "yaydevdiner"}),

    success: function(data) {
      prepareResponse(data);
      let inputElem = {};
      inputElem [text] = "Chatbot";
      console.log(inputElem);
      //firebase.database().ref('users/' + localStorage.first_name).update(inputElem);
    },
    error: function() {
      respond(messageInternalError);
    }
  });
}

/* Prepare for response. */
function prepareResponse(val) {
  var debugJSON = JSON.stringify(val, undefined, 2),
    spokenResponse = val.result.speech; // your assistant’s text response

  respond(spokenResponse);
  debugRespond(debugJSON);
}

/* Debug response. */
function debugRespond(val) {
  $("#response").text(val);
}

/* Respond to the question. */
function respond(val) {
  if (val == "") {
    val = messageSorry;
  }

  if (val !== messageRecording) {
    var msg = new SpeechSynthesisUtterance();
    msg.voiceURI = "native";
    msg.text = val;
    msg.lang = "en-US";
    /* Stop the audio that is currently playing. */
    stopAudio();
    window.speechSynthesis.speak(msg);
    updateRec();
  }

  $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
}

/*  */
function Expand(obj) {
obj.size= parseInt(obj.value.length);
}

/*  */
function resizeIframe(iframe) {
  console.log("print-0");
  iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

/*  */
function expositionOnLoad() {
  $(".exposition").mouseenter( function (eventObject) {
    console.log("print-1");
    var target = $(eventObject.target);
    console.log(target.attr("data-link"))
    $('<iframe>', {
      src: target.attr("data-link"),
      id: target.attr("data-link"),
      width: 300,
      scrolling: 'no',
      style: "position: absolute; box-shadow: 5px 5px 15px #888888; " +
        "border: 0px solid black;",
      onload: "resizeIframe(this)"
    }).appendTo(target);
  }).mouseleave( function (eventObject) {
    $("iframe").remove();
  })
  console.log("print");
}

function setBot(x, y){
  let d = document.querySelector('#wordMeaning');
  d.style.position = "absolute";
  d.style.left = x-120+'px';
  d.style.top = y-90+'px';
}
/* Set the input to What is __ ? and  */
function question(text) {
  clicked = true;
  const textAndBot = document.querySelector("#wordMeaning");
  textAndBot.style.innerHTML = " ";
  setInput("What is "+text+"?");
  let x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; // Get the horizontal coordinate
  let y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  setBot(x,y);
  textAndBot.classList.remove('inactive');
}
