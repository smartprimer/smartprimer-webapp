class mission{
  constructor(){
    this.widthButton = document.querySelector("#Width_Inputted");
    this.heightButton = document.querySelector("#Height_Inputted");
    this.depthButton = document.querySelector("#Depth_Inputted");
    this.restartButton = document.querySelector("#restart");
    this.checkAnswerButton = document.querySelector("#Check_Answer");

    this.widthButton.onclick = function() {
      var toHide = document.querySelector("#Width");
      var toShow = document.querySelector("#Height");
      const widthAns = document.querySelector('#widthEnter');
      const width = document.querySelector('#Width_Answer');
      widthAns.innerHTML = "Width: " + width.value;
      widthAns.classList.remove('inactive');
      toHide.classList.add("inactive");
      toShow.classList.remove('inactive');
    };

    this.heightButton.onclick = function() {
      var toHide = document.querySelector("#Height");
      var toShow = document.querySelector("#Depth");
      const heightAns = document.querySelector('#heightEnter');
      const height = document.querySelector('#Height_Answer');
      heightAns.innerHTML = "Height: " + height.value;
      heightAns.classList.remove('inactive');
      toHide.classList.add("inactive");
      toShow.classList.remove('inactive');
    };

    this.depthButton.onclick = function() {
      var toHide = document.querySelector("#Depth");
      var toShow = document.querySelector("#Overall_Answer");
      const depthAns = document.querySelector('#depthEnter');
      const depth = document.querySelector('#Depth_Answer');
      depthAns.innerHTML = "Depth: " + depth.value;
      depthAns.classList.remove('inactive');
      toHide.classList.add("inactive");
      toShow.classList.remove('inactive');
    };

    this.restartButton.onclick = function() {
      var width = document.querySelector("#Width");
      var height = document.querySelector("#Height");
      var depth = document.querySelector("#Depth");
      var final = document.querySelector("#Overall_Answer");
      width.classList.remove("inactive");
      height.classList.add("inactive");
      depth.classList.add("inactive");
      final.classList.add("inactive");
      const widthAns = document.querySelector('#widthEnter');
      const heightAns = document.querySelector('#heightEnter');
      const depthAns = document.querySelector('#depthEnter');
      widthAns.innerHTML = "";
      heightAns.innerHTML = "";
      depthAns.innerHTML = "";
    };

    /** 
     * When kid inputs an answer, send both that answer and the box dimensions
     * to the parent for evaluation. 
     */
    this.checkAnswerButton.onclick = function() {
      const height = document.querySelector('#Height_Answer').value;
      const width = document.querySelector('#Width_Answer').value;
      const depth = document.querySelector('#Depth_Answer').value;
      let area = (width * height * depth) / 2;
      let ans = document.querySelector("#Final_Answer").value;
      if (ans === "") { // If user didn't submit answer, default to 0
        ans = 0;
      }
      sendToParent(encodeMsg("mission1Answer", area, ans));
    };

    /**
     * Listen for the parent's response to the proposed answer and respond
     * accordingly.
     */
    bindEvent(window, 'message', function (e) {
      let msg = decodeMsg(e.data);
      if (msg[0] !== "mission1") return;
      let outcome = msg[1];
      if (outcome === "correct") {
        // TODO: Add gif. When kid closes gif, invoke the following redirect.
        window.location.href = "4_after_count_candies.html";
      } else if (outcome === "double" || outcome === "incorrect") {
        // TODO: Visual indication for incorrect answer
      }
    });

  }

  CheckAnswer(){
    const height = document.querySelector('#Height_Answer');
    const width = document.querySelector('#Width_Answer');
    const depth = document.querySelector('#Depth_Answer');
    const ans = document.querySelector("#Final_Answer");
    let correct_ans = width.value * height.value * length.value/2;
    if (correct_ans == ans.value){
      // correct answer
    } else {
      // wrong answer
    }
  }

}

const mission1 = new mission();
