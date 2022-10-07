// Getting reference
const hero = document.querySelector('.hero');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const image = document.querySelector('.hero img')
const h1 = document.querySelector('.h1');
const bg = document.querySelector('.bg');
// Getting timelineMax
const tl = new TimelineMax();
// Adding animation to all refered elements
    tl.fromTo(image, 1.5, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
    .fromTo(hero, 1.5, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(bg, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1")
    .fromTo(h1, 1, { opacity: "0", left: "100px" }, { opacity: "1", left: "190px", ease: Power2.easeInOut }, "-=1")
    .fromTo(logo, 0.5, { x: "-10%", opacity: "0" }, { x: "0%", opacity: "1", ease: Power2.easeInOut })
    .fromTo(hamburger, 0.5, { x: "-10%", opacity: "0" }, { x: "0%", opacity: "1", ease: Power2.easeInOut }, "-=0.5")
// Second Animation
const bg2 = document.querySelector('.bg2');
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')

// Background 2 animation
gsap.to(".bg2", {
    scrollTrigger:{ 
    trigger:".bg2",
    start: "top bottom",
    end: "+=500",
    // markers: true,
    scrub: 0.5,
    },
    left: "0%",
    duration: 1,
}
)
// Card 1 animation
gsap.to(card1, {
    scrollTrigger:{ 
    trigger:".bg2",
    start: "top bottom",
    end: "+=500",
    // markers: true,
    scrub: 1,
    },
    left: "0%",
    top: "10%",
    opacity: 1,
    duration: 2,
}
)
// Card 2 Animation
gsap.to(card2, {
    scrollTrigger:{ 
    trigger: bg2,
    start: "top center",
    end: "+=500",
    // markers: true,
    scrub: 1,
    },
    left: "0%",
    top: "-10%",
    opacity: 1,
    duration: 1,
}
)