/* this function add effects to sections when scrolling...*/


export default function animationOnScroll(animationType, appearClass) {
    const $animation = document.querySelectorAll(animationType);
    const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px" 
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
        return 
        } else {
        entry.target.classList.add(appearClass);
        appearOnScroll.unobserve(entry.target);
        }
    });
    }, appearOptions);

    $animation.forEach(fader => {
    appearOnScroll.observe(fader)
    });  
}

