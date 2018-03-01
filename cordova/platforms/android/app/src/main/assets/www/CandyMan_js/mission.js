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


    function inactivateAllErrorMessages() {
      document.querySelector("#try_again_missingDimensionsInput").classList.add("inactive");
      document.querySelector("#try_again_missingFinalInput").classList.add("inactive");
      document.querySelector("#try_again_half").classList.add("inactive");
      document.querySelector("#try_again").classList.add("inactive");
    }

    /**
     * When kid inputs an answer, update the page visually to indicate if answer
     * is correct and send both that answer and the box dimensions
     * to the parent for evaluation.
     */
    this.checkAnswerButton.onclick = function(){
      // Extract entered values
      const height = document.querySelector('#Height_Answer');
      const width = document.querySelector('#Width_Answer');
      const depth = document.querySelector('#Depth_Answer');
      const ans = document.querySelector("#Final_Answer");

      // Extract kid's proposed answer. Default to 0.
      let proposed_ans = ans.value;
      // if (proposed_ans === "") { // If user didn't submit answer, default to 0
      //   proposed_ans = 0;
      // }

      if ( width.value === "" || height.value === "" || depth.value === ""){
        inactivateAllErrorMessages();
        setTimeout(function() {  document.querySelector("#try_again_missingDimensionsInput").classList.remove("inactive");}, 200);
        return;
      }

      if ( proposed_ans === "") {
        inactivateAllErrorMessages();
        setTimeout(function() {  document.querySelector("#try_again_missingFinalInput").classList.remove("inactive");}, 200);
        return;
      }

      // Use height, width, and depth to determine correct number of candies
      let correct_ans = (parseFloat(width.value) * parseFloat(height.value) * parseFloat(depth.value))/2.0;

      // Respond visually to proposed answer
      if (correct_ans == proposed_ans){
        toggleModal();
      } else if (correct_ans * 2 == proposed_ans) {
        inactivateAllErrorMessages();
        setTimeout(function() {  document.querySelector("#try_again_half").classList.remove("inactive");}, 200);
      } else {
        inactivateAllErrorMessages();
        setTimeout(function() {  document.querySelector("#try_again").classList.remove("inactive");}, 200);
      }

      // Send information about proposed answer to parent
      sendToParent(encodeMsg("mission1Answer", correct_ans, proposed_ans));
    };

    /**
     * Listen for the parent's response to the proposed answer and respond
     * accordingly. Right now, this doesn't do anything tangible.
     */
    bindEvent(window, 'message', function (e) {
      let msg = decodeMsg(e.data);
      if (msg[0] !== "mission1") return;
      let outcome = msg[1];
      if (outcome === "correct") {
        // toggleModal(); This line causes a bug when the pane opens and closes very quickly
      } else if (outcome === "double") {
        inactivateAllErrorMessages();
        setTimeout(function() {  document.querySelector("#try_again_half").classList.remove("inactive");}, 200);
      } else if (outcome === "incorrect") {
        inactivateAllErrorMessages();
        setTimeout(function() {  document.querySelector("#try_again").classList.remove("inactive");}, 200);
      }
    });
  }

}

const mission1 = new mission();
