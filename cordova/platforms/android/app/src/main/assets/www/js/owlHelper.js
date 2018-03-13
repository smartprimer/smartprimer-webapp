function showAskArea(event){
    askArea = document.querySelector("#main-wrapper");
    if (askArea.classList.contains('inactive')){
      askArea.classList.remove("inactive");

    }
    else askArea.classList.add("inactive");
}

const owl = document.querySelector('#tutor');


owl.addEventListener('touchmove', function(e){
    let touchobj = e.changedTouches[0]; // reference first touch point for this event

    owl.style.left = touchobj.pageX + 'px';
    owl.style.top = touchobj.pageY + 'px';
    e.preventDefault();
}, false);


const clickOwl = document.querySelector('#owlHelper')
clickOwl.addEventListener('click', showAskArea);
