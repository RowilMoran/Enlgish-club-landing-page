
/* Accordion Script */

export default function accordion(botonClass, activeClass) {
    let $accordionBtn = document.getElementsByClassName(botonClass);

    for (let i = 0; i < $accordionBtn.length; i++) {
         $accordionBtn[i].addEventListener("click", function() {
            this.classList.toggle(activeClass);
        let panel = this.nextElementSibling
        if (panel.style.height) {
             panel.style.height = null;
            } else {
            panel.style.height = panel.scrollHeight + "px";
            }
        });
    }
  
}

