class speechBot{
  constructor(){
    this.textContent = document.querySelector("#missionMessage").textContent;
    console.log(this.textContent);
    this.stop_button = document.querySelector("#stopButton");
    this.stopAu = this.stopAu.bind(this);
    this.stop_button.addEventListener('click', this.stopAu);
  }
   welcomeUser() {
     var msg = new SpeechSynthesisUtterance();
     msg.voiceURI = "native";
     let mess = "Attention" + localStorage.first_name + localStorage.last_name ;
     mess += this.textContent;
     msg.text = mess;
     msg.lang = "en-US";
     window.speechSynthesis.speak(msg);
    }

    stopAu(){
      window.speechSynthesis.cancel();
    }
}

const talk = new speechBot();
talk.welcomeUser();
