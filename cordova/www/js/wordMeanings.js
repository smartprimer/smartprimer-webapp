let dictionaryRet = null;
clicked = true;

function onJsonReady(json) {
  dictionaryRet = json.dictionary;
}

function onResponse(response) {
  return response.json();
}

function setBot(x, y){
  let d = document.querySelector('#wordMeaning');
  d.style.position = "absolute";
  d.style.left = x-120+'px';
  d.style.top = y-90+'px';
  setClose();
}

function setClose(){
  const closer = document.querySelector('body');
  closer.addEventListener('click', this.onBodyClick);
}

function onBodyClick(event){
  if (clicked === false){
      const close = document.querySelector('#wordMeaning');
      if (close != undefined){
        if (!close.classList.contains('inactive')){
          close.classList.add('inactive');
      }
    }
  }
  else clicked = false;
}



/* Set the input to What is __ ? and  */
function question(text) {
  clicked = true;
  const textAndBot = document.querySelector("#wordMeaning");
  const reply = document.querySelector('.word-meaning__text');
  let meaning = null;
  for (const words in dictionaryRet){
    if (dictionaryRet[words].name === text){
    meaning = dictionaryRet[words].meaning;
    break;
    }
  }
  reply.innerHTML = meaning;
  let x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; // Get the horizontal coordinate
  let y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  setBot(x,y);
  textAndBot.classList.remove('inactive');
}

fetch('https://api.myjson.com/bins/wz15d')
    .then(onResponse)
    .then(onJsonReady);
