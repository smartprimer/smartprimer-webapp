class App {
  constructor(containerElement) {

    const NUM_PARAGRAPHS = 3;

    var dic = {
      1 : RESULTS_MAP[localStorage.gender].Paragraph1,
      2 : RESULTS_MAP[localStorage.gender].Paragraph2,
      3 : RESULTS_MAP[localStorage.gender].Paragraph3
    };

    var i = 1;
    for (i = 1 ; i <= NUM_PARAGRAPHS ; i++) {
      var query = "p.story_paragraph_" + i.toString();
      var part = document.querySelector(query);
      if (part != undefined) {
        part.innerHTML = dic[i];
      }
    }


    // const part1 = document.querySelector("p.story_paragraph_1");
    // const part2 = document.querySelector("p.story_paragraph_2");
    // const part3 = document.querySelector("p.story_paragraph_3");
    //
    // // if (part1 != undefined){
    //   part1.innerHTML = RESULTS_MAP[localStorage.gender].Paragraph1;
    //   part2.innerHTML = RESULTS_MAP[localStorage.gender].Paragrpah2;
    //   part3.innerHTML = RESULTS_MAP[localStorage.gender].Paragrpah3;

    // }
    document.body.innerHTML=document.body.innerHTML.replace(/John/g,localStorage.first_name);
  }
}

const storyApp = new App();
