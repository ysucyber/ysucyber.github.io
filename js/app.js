var scroll = new SmoothScroll('a[href*="#"]');


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Animation

gsap.registerPlugin(ScrollTrigger);

let masks = document.querySelectorAll('.mask');
let masks2 = document.querySelectorAll('.mask2');

masks.forEach( mask => {
    let image = mask.querySelector('img');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mask,
            toggleActions: "restart none none reset"
        }
    });

    tl.set(mask, {autoAlpha: 1});

    tl.from(mask, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
    });
});

// mask 2 animation
masks2.forEach( mask => {
    let image = mask.querySelector('img');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mask,
            toggleActions: "restart none none reset"
        }
    });

    tl.set(mask, {autoAlpha: 1});

    tl.from(mask, 1.5, {
        xPercent: 100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: -100,
        scale: 1.2,
        delay: -1.5,
        ease: Power2.out
    });
});

gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: 250,
    stagger: 0.4
});