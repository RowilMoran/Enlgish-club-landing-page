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

