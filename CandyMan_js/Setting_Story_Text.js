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

    document.body.innerHTML=document.body.innerHTML.replace(/John/g,localStorage.first_name);
  }
}

const storyApp = new App();
