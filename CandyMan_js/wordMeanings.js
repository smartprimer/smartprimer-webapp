clicked = true;

function setBot(x, y){
  let d = document.querySelector('#wordMeaning');
  d.style.position = "absolute";
  d.style.left = x-150+'px';
  d.style.top = y+20+'px';
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
    console.log(text);
    break;
    }
  }
  reply.innerHTML = meaning;
  let x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; // Get the horizontal coordinate
  let y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  setBot(x,y);
  textAndBot.classList.remove('inactive');
}
