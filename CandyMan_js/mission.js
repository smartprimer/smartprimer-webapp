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

      // Use height, width, and depth to determine correct number of candies
      let correct_ans = (parseInt(width.value, 10) * parseInt(height.value, 10) * parseInt(depth.value, 10))/2;
      
      // Extract kid's proposed answer. Default to 0.
      let proposed_ans = ans.value;
      if (proposed_ans === "") { // If user didn't submit answer, default to 0
        proposed_ans = 0;
      }
      
      // Respond visually to proposed answer
      if (correct_ans == proposed_ans){
        toggleModal();
      } else {
        document.querySelector("#try_again").classList.add("inactive");
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
        // TODO: Add gif. When kid closes gif, invoke the following redirect.
        // window.location.href = "4_after_count_candies.html";
      } else if (outcome === "double" || outcome === "incorrect") {
        // TODO: Visual indication for incorrect answer
      }
    });
  }

}

const mission1 = new mission();
