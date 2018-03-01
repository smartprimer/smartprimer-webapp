class moreInf{
  constructor(){
    this.showButton = document.querySelector('#getMoreInfo');
    this.getPopUp = this.getPopUp.bind(this);
    this.showButton.addEventListener('click', this.getPopUp);
  }

  getPopUp(){
    let toShow = document.querySelector('#popUpChat');
    toShow.classList.remove('inactive');
  }
}

const infor = new moreInf();
