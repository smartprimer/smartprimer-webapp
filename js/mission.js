class mission{
  constructor(){
    this.revealButton = document.querySelector("#helpButton");
    this.revealStep = this.revealStep.bind(this);
    this.numClick = 0;
    this.showStep = this.showStep.bind(this);


    this.revealButton.addEventListener('click', this.revealStep);
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
