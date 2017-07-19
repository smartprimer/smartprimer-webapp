class mission{
  constructor(){
    this.revealButton = document.querySelector("#helpButton");

    this.heightButton = document.querySelector("#inputHeight");
    this.lengthButton = document.querySelector("#inputLength");
    this.ansButton = document.querySelector("#inputAns");

    this.popUpIntent = document.querySelector("#getPopUp");

    this.getPopUp = this.getPopUp.bind(this);

    if (this.popUpIntent != undefined) this.popUpIntent.addEventListener('click', this.getPopUp);

    this.showNextQues = this.showNextQues.bind(this);

    if (this.heightButton != undefined){
      this.heightButton.addEventListener('click', this.showNextQues);
      this.lengthButton.addEventListener('click', this.showNextQues);
      this.ansButton.addEventListener('click', this.showNextQues);
    }


    this.revealStep = this.revealStep.bind(this);
    this.numClick = 0;
    this.showStep = this.showStep.bind(this);


    this.revealButton.addEventListener('click', this.revealStep);
  }

  getPopUp(){
    const toShow = document.querySelector('#popUpChat');
    toShow.classList.remove('inactive');
  }

  showNextQues(event){
    console.log("oijoij");
    event.preventDefault();
    console.log(this.lengthButton);
    const button = event.currentTarget;
    console.log(button);
    let toHide = null;
    let toShow = null;
    if (button === this.lengthButton){
       toHide = document.querySelector("#answerBox1");
       toShow = document.querySelector("#answerBox2");

    }
    if (button === this.heightButton){
        toHide = document.querySelector("#answerBox2");
        toShow = document.querySelector("#answerBox3");
    }
    if (button === this.ansButton){
        toHide = document.querySelector("#answerBox3");
        toShow = document.querySelector("#answerBox4");
    }
    toHide.classList.add("inactive");
    toShow.classList.remove('inactive');
  }

  revealStep(event){
    this.numClick += 1;
    if (this.numClick == 4){
      this.revealButton.classList.add('inactive');
    }
    let string = '#step' + this.numClick;
    this.showStep(string);
  }

  showStep(string){
    const elem = document.querySelector(string);
    elem.classList.remove('inactive');
  }
}



const mission1 = new mission();
