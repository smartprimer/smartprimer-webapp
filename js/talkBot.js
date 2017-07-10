class speechBot{
  constructor(){

  }
   welcomeUser() {
     var msg = new SpeechSynthesisUtterance();
     msg.voiceURI = "native";
     let mess = "Attention" + localStorage.first_name + localStorage.last_name;
     mess += "I am Mr. Owl and I am here to give you an important message. This message may contain information that can effect the course of history. Please proceed with care. While you undertake this mission, remember, I am right here and you can ask me any questions you may have";
     msg.text = mess;
     msg.lang = "en-US";
     window.speechSynthesis.speak(msg);
    }
}
const talk = new speechBot();
talk.welcomeUser();
