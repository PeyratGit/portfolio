const text = document.querySelector(".banner-title");
const navBar = document.getElementById("navbar");
const skillsTitles = document.querySelectorAll(".skill-title");
const skillsLists = document.querySelectorAll(".skills-list");
const skillsBlock = document.querySelector(".skills-block")

let height = window.innerHeight - window.scrollY;

function startAnimations() {
  text.innerHTML = "Clément Peyrat";
  text.onanimationend = () => {
    text.classList.add("underlined");
  }
  document.getElementById("navbar").style.top = "0";
  if (height > 60) {
    navBar.style.backgroundColor = "transparent"
  } else {
    navBar.style.backgroundColor = "rgba(0,0,0,0.8)"
  }
}

window.onload = startAnimations();

particlesJS("particles-js", { "particles": { "number": { "value": 85, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#f27200" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 4, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#f27200", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 179.82017982017982, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, update; count_particles = document.querySelector('.js-count-particles');;

var lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let height = window.innerHeight - window.scrollY;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && height <= 60) {
    navBar.style.top = "0";
    navBar.style.backgroundColor = "rgba(0,0,0,0.8)"
    navBar.style.backdropFilter = "blur(8px)"
  } else if (scrollTop > lastScrollTop && height > 60 && lastScrollTop != 0) {
    navBar.style.top = "0";
    navBar.style.backgroundColor = "transparent"
    navBar.style.backdropFilter = "none"
  } else {
    navBar.style.top = "-75px";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
})

window.addEventListener("scroll", () => {
  let height = window.innerHeight - window.scrollY;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(height <= 600) {
    document.getElementById("photo").style.clipPath = "circle(50%)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
})

skillsTitles.forEach(function callback(title, index) {
  title.addEventListener("click", () => {
    if(index === 0) {
      skillsBlock.style.borderTopRightRadius = "15px"
      skillsBlock.style.borderTopLeftRadius = "0"
    } else if(index === 3) {
      skillsBlock.style.borderTopLeftRadius = "15px"
      skillsBlock.style.borderTopRightRadius = "0"
    } else {
      skillsBlock.style.borderRadius = "15px"
    }
    skillsTitles.forEach(title => {
      title.classList.remove("active")
    })
    title.classList.add("active")
    skillsLists.forEach(skillList => {
      skillList.classList.remove("active")
    })
    skillsLists[index].classList.add("active")
  })
})
