class App {
  constructor(containerElement) {
    const storyLocation = document.querySelector("p.storyPlot");
    const story2 = document.querySelector("p.storyPlot2");
    const story3 = document.querySelector("p.storyPlot3");
    const story11 = document.querySelector("p.storyPlot11");

    if (storyLocation != undefined){
      storyLocation.innerHTML = RESULTS_MAP[localStorage.gender].Page1;
      story2.innerHTML = RESULTS_MAP[localStorage.gender].Page2;
      story3.innerHTML = RESULTS_MAP[localStorage.gender].Page3;
      story11.innerHTML = RESULTS_MAP[localStorage.gender].Page11;
    }
    document.body.innerHTML=document.body.innerHTML.replace(/John/g,localStorage.first_name);
}
}
