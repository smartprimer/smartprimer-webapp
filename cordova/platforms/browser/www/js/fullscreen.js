
const nextPage = document.querySelector("#submited");
this.next_page = this.next_page.bind(this);
if (nextPage != undefined){
  nextPage.addEventListener('click', this.next_page);
}
this.full_screen = this.full_screen.bind(this);
const element = document.querySelector("html");
element.addEventListener('mouseup', this.full_screen);

function next_page(event){
  event.preventDefault();
  const params = window.location.pathname.split( '/' );
  const itemNum = params.length;
  console.log(params[itemNum-1]);
  const pageLocation = pageLinks[params[itemNum-1]];
  console.log(pageLocation);
  window.location.href = pageLocation;
  this.full_screen();
}

function full_screen(){

    // check if user allows full screen of elements. This can be enabled or disabled in browser config. By default its enabled.
    //its also used to check if browser supports full screen api.
    if("fullscreenEnabled" in document || "webkitFullscreenEnabled" in document || "mozFullScreenEnabled" in document || "msFullscreenEnabled" in document)
    {
        if(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
        {
            console.log("User allows fullscreen");
            //requestFullscreen is used to display an element in full screen mode.
            if("requestFullscreen" in element)
            {
                element.requestFullscreen();
            }
            else if ("webkitRequestFullscreen" in element)
            {
                element.webkitRequestFullscreen();
            }
            else if ("mozRequestFullScreen" in element)
            {
                element.mozRequestFullScreen();
            }
            else if ("msRequestFullscreen" in element)
            {
                element.msRequestFullscreen();
            }
        }
    }
    else
    {
        console.log("User doesn't allow full screen");
    }
}
