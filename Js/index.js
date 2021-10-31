
/* Accordion Script */

let accordion = document.getElementsByClassName("accordion-btn");
let i;

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle('active')
        let panel = this.nextElementSibling
        if (panel.style.height) {
            panel.style.height = null;
          } else {
            panel.style.height = panel.scrollHeight + "px";
          }
    });
}

/* Whatsapp button script */

const whatsapp = document.getElementById("whatsapp");

addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    whatsapp.classList.add("appear")
  }, 3000);
})


/* Fade-in and slide in Effects */

const $faders = document.querySelectorAll(".fade-in");
const $slides = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0.10,
  rootMargin: "0px 0px -250px 0px" 
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return 
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

$faders.forEach(fader => {
  appearOnScroll.observe(fader)
});

$slides.forEach(slide => {
  appearOnScroll.observe(slide)
});


