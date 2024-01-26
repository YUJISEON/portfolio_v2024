

const preloader = document.querySelector('.preloader');
const txtV1 = document.querySelectorAll('.txt-v1');
const txtV2 = document.querySelectorAll('.txt-v2');
const bg = document.querySelector('.bg');

const preloaderTxt = gsap.timeline();
preloaderTxt.to(txtV1, {
    y: "-100%",
    stagger: .025,
    duration: 1,
    delay: .25,
    ease: "Expo.easeOut"
})
.to(txtV2, {
    y: "0",
    stagger: .025,
    duration: 1,
    delay: .15,
    ease: "Expo.easeOut"
}, '<')
.to(".preloader p span", {
    y: "-100%",
    delay: .3,
    duration: 1,
    ease: "Expo.easeOut"
}, '<')
.to(".txt-j", {
    x: "37.5rem",
    duration: .67,
    ease: "Expo.easeIn"
})
.to(".txt-r", {
    x: "-10.5rem",
    duration: .67,
    ease: "Expo.easeIn"
}, '<')
.to(".txt-last", {
    x: "-26.5rem",
    duration: .67,
    ease: "Expo.easeIn"
}, '<')
.to(bg, {
    height: '100%',
    delay: .5,
    duration: 1,
    ease: "Expo.easeOut"
})
.to(preloader, {
    opacity: 0,
    duration: 0,
    onComplete: ()=>{ 
        const body = document.querySelector('body');
        body.style.backgroundColor = "black";
    }
}, '+=.5')