import accordion from "./accordion.js";
import animationOnScroll from "./animationOnScroll.js";
import appearWhatsapp from "./whatsapp.js";


document.addEventListener("DOMContentLoaded", e => {
  accordion("accordion-btn", "active");
  appearWhatsapp("whatsapp", "appear");
  animationOnScroll(".slide-in", "appear");
  animationOnScroll(".fade-in", "appear");
})



