gsap.registerPlugin(ScrollTrigger);

const preloader = document.querySelector('.preloader');
const txtV1 = document.querySelectorAll('.txt-v1');
const txtV2 = document.querySelectorAll('.txt-v2');
const bg = document.querySelector('.bg');


const master = gsap.timeline();

const preloaderTxt = gsap.timeline()
.to(txtV1, {
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
    ease: "Expo.easeOut",
    onComplete: ()=>{     
        const html = document.querySelector('html');
        const body = document.querySelector('body');  
        html.classList.add("load");        
        body.style.backgroundColor = "black";
        preloader.style.display = "none"; 
        bg.style.display = "none"; 
    }
}, '-=.1')
.to(preloader, {
    opacity: 0,
    duration: 0    
}, '+=.5')


const headerBody = document.querySelector('.header-body');
const txtHidden = document.querySelectorAll('.txt-hidden span');
const txtShow = document.querySelectorAll('.txt-show span');
const txtDesc = document.querySelectorAll('.txt-description span');

const visualTxt = gsap.timeline()
.from(headerBody, {
    y: "-100%",
    duration: 1,
    ease: "Power3.easeOut",
})
.to(txtHidden, {
    y: "-101%",
    stagger: .025,
    duration: 0.5,
    delay: .25,
    ease: "Expo.easeOut"
})
.to(txtShow, {
    y: "0",
    stagger: .025,
    duration: 0.5,
    //delay: .15,
    ease: "Expo.easeOut"
}, '<')
.to(txtDesc, {
    y: "0",
    stagger: .025,
    duration: 1,
    ease: "Expo.easeOut"
}, "-=0.5")


function cursorAni() {
    const cursor = document.querySelector('#cursor');
    let xTo = gsap.quickTo(cursor, "x", {duration: 0.4, ease: "power3"}),
        yTo = gsap.quickTo(cursor, "y", {duration: 0.4, ease: "power3"});
    
    window.addEventListener('mousemove',({clientX:x,clientY:y})=>{
        xTo(x - (cursor.offsetWidth * 0.5))
        yTo(y - (cursor.offsetHeight * 0.5))
    })

    const links = gsap.utils.toArray(".a-link");
    links.forEach(function(target) {
        target.addEventListener("mouseenter", function(){
            gsap.to(cursor, {
                width: "30px",
                height: "30px",
                duration: 0.2, 
                ease: "power3"
            })
        });
        target.addEventListener("mouseleave", function(){
            gsap.to(cursor, {
                width: "10px",
                height: "10px",
                duration: 0.2, 
                ease: "power3"
            })
        })
    });
    
}


function arrowAniType1() {
    const arrowWrap = document.querySelector('.arrow-wrap.type1');
    const layer = gsap.utils.toArray(".arrow-wrap.type1 .layer");
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
                ease : "Power3.easeIn"
            })
        });

    });
}

function arrowAniType2() {    
    const arrowWrap = document.querySelector('.arrow-wrap.type2');
    const layer = gsap.utils.toArray(".arrow-wrap.type2 .layer");
    let isOff = false;

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

            if( !isOff ) {
                arrowWrap.classList.add('off');
                isOff = true;
            }
        });

        arrowWrap.addEventListener('mouseleave', () => {
            gsap.to(target, {
                x : 0,
                y : 0,
                duration: 0.5,
                ease : "Power3.easeIn",
                onComplete: ()=>{     
                    arrowWrap.classList.remove('off');
                    isOff = false;
                }                
            })

            
        });

    });
}

function aboutAni() {
    const imgBox = document.querySelector('.img-box');

    const aboutImg = gsap.timeline()
    .to(imgBox,{
        clipPath: "inset(0% 0%)",
        borderRadius: '50px',
        duration: .5,
		ease: 'Linear.easeNone'
    })

    ScrollTrigger.create({
        trigger: '.main-about .section-body',
        start: 'top 10%',
        end: `+=2000`,
        animation: aboutImg,
        pin: true,
        scrub: 0.1,
        //markers: true
    })
}



master
.add(preloaderTxt)
.add(visualTxt, "-=1")
.add(aboutAni)

cursorAni();
arrowAniType1();
arrowAniType2();