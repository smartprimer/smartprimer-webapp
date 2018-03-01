tokenStr = "4eda5c05a1da47759e3bcbd6a838b1d4";
testingStr = "Play Eminem";

layfun = (function() {
  "use strict";

  var ENTER_KEY_CODE = 13;
  var queryInput, resultDiv;
  var JSONResponseStr;

  window.onload = init;

  function init() {
    // alert("Hi there");
    queryInput = document.getElementById("q");
    resultDiv = document.getElementById("result");
    if (queryInput != null && queryInput != undefined) {
      queryInput.addEventListener("keydown", queryInputKeyDown);
    }

    // Directly add the token here.
    let mainWrapper = document.getElementById("main-wrapper");
    if (mainWrapper != null) {
      mainWrapper.style.display = "block";
    }
    window.init(tokenStr);
  }


  function queryInputKeyDown(event) {
    console.log("KEYDOWN");
    if (event.which !== ENTER_KEY_CODE) {
      return;
    }

    var value = queryInput.value;
    queryInput.value = "";

    createQueryNode(value);
    var responseNode = createResponseNode();

    sendText(value)
      .then(function(response) {
        var result;
        try {
          result = response.result.fulfillment.speech
        } catch(error) {
          result = "";
        }
        setResponseJSON(response);
        setResponseOnNode(result, responseNode);
      })
      .catch(function(err) {
        setResponseJSON(err);
        setResponseOnNode("Something goes wrong", responseNode);
      });
  }

  // Append a user's message box on the left side
  function createQueryNode(query) {
    var node = document.createElement('div');
    var linebreak = document.createElement("br");

    node.classList.add('userAsk');
    node.innerHTML = query;
    resultDiv.appendChild(node);
    resultDiv.appendChild(linebreak);
  }

  // Append a agent's message box on the right side
  function createResponseNode() {
    var node = document.createElement('div');
    var linebreak = document.createElement("br");
    node.classList.add('botResponse');
    node.innerHTML = "...";
    node.style.alignText = "right";
    resultDiv.appendChild(node);
    resultDiv.appendChild(linebreak);
    return node;
  }

  function setResponseOnNode(response, node) {
    node.innerHTML = response ? response : "[empty response]";
    node.setAttribute('data-actual-response', response);
    var speaking = false;

    function speakNode() {
      if (!response || speaking) {
        return;
      }
      speaking = true;
      tts(response)
        .then(function () {speaking = false})
        .catch(function (err) {
          speaking = false;
          Materialize.toast(err, 2000, 'red lighten-1');
        });
    }

    node.addEventListener("click", speakNode);
  }

  function setResponseJSON(response) {
    JSONResponseStr = JSON.stringify(response, null, 2);
    console.log(JSONResponseStr);
  }

  function getResponseJSON() {
    return JSONResponseStr;
  }

  function sendRequest() {

  }

});

layfun();
