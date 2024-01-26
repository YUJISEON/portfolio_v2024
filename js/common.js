


/*
const preloader = document.querySelector('.preloader');
const txtV1 = document.querySelectorAll('.txt-v1');
const txtV2 = document.querySelectorAll('.txt-v2');
const bg = document.querySelector('.bg');
const headerBody = document.querySelector('.header-body');

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
    duration: 1.5,
    ease: "Expo.easeOut"
}, '-=.1')
.to(preloader, {
    opacity: 0,
    duration: 0,
    onComplete: ()=>{     
        const body = document.querySelector('body');          
        body.style.backgroundColor = "black";
        preloader.style.display = "none"; 
        bg.style.display = "none"; 
    }
}, '+=.5')
.from(headerBody, {
    y: "-100%",
    duration: 1,
    ease: "Power3.easeOut",
}, '<')
*/


const cursor = document.querySelector('#cursor');
let xTo = gsap.quickTo(cursor, "x", {duration: 0.4, ease: "power3"}),
    yTo = gsap.quickTo(cursor, "y", {duration: 0.4, ease: "power3"});

document.addEventListener('mousemove',({pageX:x,pageY:y})=>{
    xTo(x - (cursor.offsetWidth * 0.5))
    yTo(y - (cursor.offsetHeight * 0.5))
})


const links = gsap.utils.toArray(".a-link");
links.forEach(function(target) {
    //console.log(target);
    target.addEventListener("mouseenter", function(){
        //console.log("target mouseenter");
        gsap.to(cursor, {
            width: "30px",
            height: "30px",
            duration: 0.2, 
            ease: "power3"
        })
    });
    target.addEventListener("mouseleave", function(){
        //console.log("target mouseleave");
        gsap.to(cursor, {
            width: "10px",
            height: "10px",
            duration: 0.2, 
            ease: "power3"
        })
    })
});




const arrowWrap = document.querySelector('.arrow-wrap');
const layer = gsap.utils.toArray(".arrow-wrap .layer");
layer.forEach(function(target){
    let speed = target.getAttribute("data-speed") * 0.1;
    let xTo2Move = gsap.quickTo(target, "x", { duration: speed, ease: "power3" }),
        yTo2Move = gsap.quickTo(target, "y", { duration: speed, ease: "power3" });

    arrowWrap.addEventListener('mousemove', ({ pageX: x, pageY: y }) => {
        const xOffset = x - arrowWrap.getBoundingClientRect().left - window.pageXOffset;
        const yOffset = y - arrowWrap.getBoundingClientRect().top - window.pageYOffset;

        const xRatio = (xOffset - (arrowWrap.offsetWidth * 0.5)) / (speed * 5);
        const yRatio = (yOffset - (arrowWrap.offsetHeight * 0.5)) / (speed * 5);

        xTo2Move(xRatio);
        yTo2Move(yRatio);
    });


    arrowWrap.addEventListener('mouseleave', () => {
        gsap.to(target, {
            x : 0,
            y : 0,
            duration: 0.5,
            ease : "Power2.easeIn"
        })
    });

});