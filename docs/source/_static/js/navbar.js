if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

function adjustNavbarPosition() {
  var navbar = document.getElementsByClassName("wy-nav-side")[0];
  var offset = 146 - window.pageYOffset;
  if (offset >= 0) {
    navbar.style.top = offset + "px";
  } else {
    navbar.style.top = 0 + "px";
  }
}

window.onscroll = adjustNavbarPosition

window.onload = function(){
  adjustNavbarPosition()
  var test = document.getElementsByClassName("wy-side-scroll")[0];
  test.scrollTop = 0;
  if (location.pathname.startsWith("/projects")) {
    var links = document.querySelectorAll("#lux-doc-navbar a[href^='https://docs.luxonis.com/projects']");
    console.log("Current pathname: ", location.pathname)
    for (var i = 0; i < links.length; i++) {
      console.log("Link href: ", links[i].href)
      console.log("Match: ", location.pathname.includes(links[i].href))
      if(location.pathname.includes(links[i].href)) {
        links[i].classList.add('lux-navbar-active')
      }
    }
  } else {
    var main = document.querySelector("#lux-doc-navbar a:not([href^='https://docs.luxonis.com/projects'])")
    console.log(main)
    main.classList.add('lux-navbar-active')
  }
}