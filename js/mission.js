class mission{
  constructor(){
    this.revealButton = document.querySelector("#helpButton");
    this.heightButton = document.querySelector("#inputHeight");
    this.lengthButton = document.querySelector("#inputLength");
    this.ansButton = document.querySelector("#inputAns");
    this.popUpIntent = document.querySelector("#getPopUp");
    this.backToWidth = document.querySelector("#lengthBack");
    this.backToLength = document.querySelector("#heightBack");
    this.backToHeight = document.querySelector("#finalBack");


    this.getPopUp = this.getPopUp.bind(this);
    this.showNextQues = this.showNextQues.bind(this);
    this.revealStep = this.revealStep.bind(this);
    this.showStep = this.showStep.bind(this);
    this.goBack = this.goBack.bind(this);

    if (this.popUpIntent != undefined) this.popUpIntent.addEventListener('click', this.getPopUp);
    if (this.heightButton != undefined){
      this.heightButton.addEventListener('click', this.showNextQues);
      this.lengthButton.addEventListener('click', this.showNextQues);
      this.ansButton.addEventListener('click', this.showNextQues);
      this.backToWidth.addEventListener('click', this.goBack);
      this.backToLength.addEventListener('click', this.goBack);
      this.backToHeight.addEventListener('click', this.goBack);
    }
    this.revealButton.addEventListener('click', this.revealStep);

    this.numClick = 0;
  }

goBack(){
  const button = event.currentTarget;
  let toHide = null;
  let toShow = null;
  if (button === this.backToWidth){
    toHide = document.querySelector("#answerBox2");
    toShow = document.querySelector("#answerBox1");
  }
  if (button === this.backToLength){
    toHide = document.querySelector("#answerBox3");
    toShow = document.querySelector("#answerBox2");
  }
  if (button === this.backToHeight){
    toHide = document.querySelector("#answerBox4");
    toShow = document.querySelector("#answerBox3");
  }
  toHide.classList.add("inactive");
  toShow.classList.remove('inactive');
}

  getPopUp(){
    const toShow = document.querySelector('#popUpChat');
    toShow.classList.remove('inactive');
  }

  showNextQues(event){
    event.preventDefault();
    const button = event.currentTarget;
    let toHide = null;
    let toShow = null;
    if (button === this.lengthButton){
       toHide = document.querySelector("#answerBox1");
       toShow = document.querySelector("#answerBox2");
       const widthAns = document.querySelector('#widthEnter');
       const width = document.querySelector('#widthAnswer');
       widthAns.innerHTML = "Width: " + width.value;
       widthAns.classList.remove('inactive');

    }
    if (button === this.heightButton){
        toHide = document.querySelector("#answerBox2");
        toShow = document.querySelector("#answerBox3");
        const lengthAns = document.querySelector('#lengthEnter');
        const length = document.querySelector('#lengthAnswer');
        lengthAns.innerHTML = "Length: " + length.value;
        lengthAns.classList.remove('inactive');
    }
    if (button === this.ansButton){
        toHide = document.querySelector("#answerBox3");
        toShow = document.querySelector("#answerBox4");
        const heightAns = document.querySelector('#heightEnter');
        const height = document.querySelector('#heightAnswer');
        heightAns.innerHTML = "Height: " + height.value;
        heightAns.classList.remove('inactive');
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
