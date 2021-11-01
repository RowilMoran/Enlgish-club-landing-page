
/* this function makes appear the whatsapp button after 3 seconds after the page load. */

export default function appearWhatsapp(whatsappBtn, appearClass) {
    const $whatsappBtn = document.getElementById(whatsappBtn);

    
    addEventListener("DOMContentLoaded", (e) => {
        setTimeout(() => {
        $whatsappBtn.classList.add(appearClass)
        }, 3000);
    })
    
}



