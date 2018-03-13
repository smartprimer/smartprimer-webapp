// JavaScript Document
var socket = io();

// send out sound message over socket
function play(id) {
    socket.emit('play', id);
}

function sendOnEnter() {
    // send on enter key
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    // get and send the messge to the remote interface
    var msg = document.getElementById("message").value;
    console.log(msg);
    socket.emit('msg', msg); //send the message to ther server
    const display = document.querySelector('.spoken-response__text');
    display.innerHTML = msg;
    // add the question to the list
    addQuestion(msg);

    // reset the message window
    resetMsg();
}

function resetMsg() {
    document.getElementById("message").value = '';
}

function addQuestion(msg) {
    // create a new line with the questions at the top of the list
    var para = document.createElement("p");
    var node = document.createTextNode(msg);
    para.appendChild(node);

    var btn = document.createElement("BUTTON");
    var btnReplay = document.createTextNode("Replay"); // Create a text node
    btn.onclick = function() {
        replayMsg(msg)
    };
    btn.appendChild(btnReplay);

    para.appendChild(btn);
    var element = document.getElementById("questions");
    element.appendChild(para);
}

function replayMsg(msg) {
    console.log(msg);
    socket.emit('msg', msg); //send the message to ther server
}

function playMsg(msgID) {
    var msg = document.getElementById(msgID).innerHTML;
    console.log(msg);
    socket.emit('msg', msg); //send the message to ther server
}

function readEnglish() {
    lang = 'english';
    socket.emit('lang', lang);
}

function readFrench() {
    lang = 'french';
    socket.emit('lang', lang);
}

function readJapanese() {
    lang = 'japanese'
    socket.emit('lang', lang);
}
