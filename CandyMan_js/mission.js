class mission{
  constructor(){
    this.widthButton = document.querySelector("#Width_Inputted");
    this.heightButton = document.querySelector("#Height_Inputted");
    this.depthButton = document.querySelector("#Depth_Inputted");
    this.restartButton = document.querySelector("#restart");
    this.checkAnswerButton = document.querySelector("#Check_Answer");
    this.modal = document.querySelector(".modal");
    this.closeButton = document.querySelector(".close-button");

    this.closeButton.onclick = function() {
      toggleModal();
      setTimeout(function() {window.location.href="mission_goal.html";}, 200);
    }

    window.addEventListener("click", windowOnClick);

    function toggleModal() {
      document.querySelector(".modal").classList.toggle("show-modal");
      document.querySelector("#leftfixedbutton").classList.toggle("grey_out");
    }

    function windowOnClick(event) {
      if (event.target === this.modal) {
          toggleModal();
      }
    }

// Code that automatically transitions to next page if answer is correct
    this.checkAnswerButton.onclick = function(){
      const height = document.querySelector('#Height_Answer');
      const width = document.querySelector('#Width_Answer');
      const depth = document.querySelector('#Depth_Answer');
      const ans = document.querySelector("#Final_Answer");
      let correct_ans = (parseInt(width.value, 10) * parseInt(height.value, 10) * parseInt(depth.value, 10))/2;
      if (correct_ans == ans.value){
        toggleModal();
      } else {
        document.querySelector("#try_again").classList.add("inactive");
        setTimeout(function() {  document.querySelector("#try_again").classList.remove("inactive");}, 200);
      }
    }
  }



}

const mission1 = new mission();
