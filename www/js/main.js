
const hm = document.querySelector('html');
const preloader = document.querySelector('.preloader');
const bg = document.querySelector('.bg');
let loaderText, txtV1, txtV2, preloaderTxt;
const master = gsap.timeline();

const headerBody = document.querySelector('.header-body');
const txtHidden = document.querySelectorAll('.txt-hidden span');
const txtShow = document.querySelectorAll('.txt-show span');
const txtDesc = document.querySelectorAll('.txt-description span');
const circleBox1 = document.querySelectorAll('.arrow-wrap.type1 .circle-box circle');

const visualTxt = gsap.timeline()
// .from(heaedrBody, {
//     y: "-100%",
//     duration: 1.3,
//     ease: "Power3.easeOut",
// })
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
.to(circleBox1, {
    strokeDashoffset : 0,
    ease: "Power3.easeOut",
}, '<')

visualTxt.eventCallback('onComplete',()=>{
    gsap.set('.no-scroll', {display:'none'})
})

visualTxt.eventCallback('onStart',()=>{
    hm.classList.remove('loading');
})

function arrowAniType1() {
    const arrowWrap = document.querySelector('.arrow-wrap.type1');
    const layer = gsap.utils.toArray(".arrow-wrap.type1 .layer");
    const arrow = arrowWrap.querySelector(".arrow-box");

    layer.forEach(function(target){
        let speed = target.getAttribute("data-arrow") * 0.1;
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

    arrow.addEventListener("click", ()=>{
        smoother.scrollTo("#mainAbot", true, "bottom bottom")
    })
}

function arrowAniType2() {    
    const arrowWrap = document.querySelector('.main-about .arrow-wrap.type2');
    const layer = gsap.utils.toArray(".main-about .arrow-wrap.type2 .layer");
    let isOff = false;

    layer.forEach(function(target){
        let speed = target.getAttribute("data-arrow") * 0.1;
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

function arrowAniType3() {    
    const arrowWrap = document.querySelector('.main-project .arrow-wrap.type2');
    const layer = gsap.utils.toArray(".main-project .arrow-wrap.type2 .layer");
    let isOff = false;

    layer.forEach(function(target){
        let speed = target.getAttribute("data-arrow") * 0.1;
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


function arrowAniType4() {    
    const arrowWrap = document.querySelector('.main-connect .arrow-wrap.type2');
    const layer = gsap.utils.toArray(".main-connect .arrow-wrap.type2 .layer");
    let isOff = false;

    layer.forEach(function(target){
        let speed = target.getAttribute("data-arrow") * 0.1;
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
    const descBox = document.querySelector('.about-description p');
    const circleBox2 = document.querySelectorAll('.main-about .circle-box circle');

    const aboutImg = gsap.to(imgBox,{
        clipPath: "inset(0% 0%)",
        scale: 1,
        borderRadius: '50px',
        duration: .5,
		ease: 'Linear.easeNone'
    })

    ScrollTrigger.create({
        trigger: '.main-about .section-body',
        start: 'top 10%',
        end: `+=50%`,
        animation: aboutImg,
        pin: true,
        scrub: 0.5,
        // markers: true,
    })

    const aboutDesc = gsap.timeline()
    aboutDesc.to(descBox, {
        y : 0,
        autoAlpha : 1,
		ease : "Power3.easeIn"
    })
    .to(circleBox2, {
        strokeDashoffset : 0,
        ease: "Power3.easeOut",
    }, '<')

    ScrollTrigger.create({
        trigger: '.main-about .section-body',
        start: 'top 30%',
        end: `+=30%`,
        animation: aboutDesc,
        scrub: 0.5,
        //markers: true,
    })

}


function projectAni() {

    // const descBox = document.querySelector('.project-description p');
    // const circleBox3 = document.querySelectorAll('.main-project .circle-box circle');

    // const projectDesc = gsap.timeline()
    // projectDesc.to(descBox, {
    //     y : 0,
    //     autoAlpha : 1,
	// 	ease : "Power3.easeIn"
    // })
    // .to(circleBox3, {
    //     strokeDashoffset : 0,
    //     ease: "Power3.easeOut",
    // }, '<')

    // ScrollTrigger.create({
    //     trigger: '.main-project .section-body',
    //     start: 'top 70%',
    //     end: `+=30%`,
    //     animation: projectDesc,
    //     scrub: 0.5,
    //     //markers: true,
    // })

    const projectWrap = document.querySelector(".project-wrap");
    const lightBox = projectWrap.querySelector(".light-box");	
    const listRotatorPin = projectWrap.querySelector(".list-wrap");
    const listRotator = projectWrap.querySelector(".list-box");			
    const listItems = projectWrap.querySelectorAll('li');
    const totalItems = listItems.length - 1;
    const angleIncrement = 180 / totalItems;

    listItems.forEach(function(item, index) {
        const rotationAngle = index * angleIncrement;
        const fontSize = gsap.getProperty(item, "fontSize");
        const lineHeight = gsap.getProperty(item, "lineHeight");
        const translateZ = (parseFloat(fontSize) + parseFloat(lineHeight)) * 4;
        
        gsap.set(item, {
            rotationX: -rotationAngle,
            transformOrigin: `center center 0`,
            transform: `rotateX(${-rotationAngle}deg) translateZ(${translateZ}px)`,
            zIndex: totalItems - index, 
        });
    });		
    
    function setlistRotatorProperties() {		
        gsap.set(projectWrap, { height: window.innerHeight*2.5});
        gsap.set(lightBox, { height: window.innerHeight*3.5});
    }
    
    gsap.set(listRotator, { rotationX:-90});
    
    setlistRotatorProperties();
    
    gsap.to(listRotatorPin, {
        scrollTrigger: {
            trigger: listRotatorPin,
            id: "111",
            start: function() {
                const startPin = 0;
				return "top +=" + startPin;
            },
            end: function() {
                const endPin = window.innerHeight * 6;
                return "+=" + endPin;
            },
            pin:true,
            scrub: true,
            pinSpacing: false,
            //markers: true,
        }
    });
    
    gsap.to(listRotator, {
        scrollTrigger: {
            trigger: projectWrap,
            id: "222",
            start: function() {
                const startPin = (window.innerHeight) * 0.8;
                return "top +=" + startPin;
            },
            end: function() {
                const endPin = window.innerHeight * 3.5;
                return "+=" + endPin;
            },
            scrub: true,
            //markers: true,
        },
        rotationX:285
    });


    var clipPath = gsap.to('.light-body', {
        clipPath: 'inset(0% 0%)',
        duration: 1,
        ease: 'Linear.easeNone'
    });
    
    var clipPathScene = ScrollTrigger.create({
        trigger: '.main-project .con-area',
        start: 'top 100%',
        end: `+=${window.innerHeight / 3}`,
        animation: clipPath,
        scrub: 1,
        //markers: true,
    });
    

}

function connectAni() {
    const circleBox4 = document.querySelectorAll('.main-connect .circle-box circle');

    const connectBox = gsap.timeline()
    connectBox
    .to(circleBox4, {
        strokeDashoffset : 0,
        ease: "Power3.easeOut",
    }, '<')

    ScrollTrigger.create({
        trigger: '.main-connect .section-body',
        start: '30% 70%',
        end: `+=30%`,
        animation: connectBox,
        scrub: 0.5,
        //markers: true,
    })

    ScrollTrigger.create({
        trigger: '.main-connect .section-body',
        start: '-10% top',
        toggleClass : {targets: ".line", className: "on"},
        scrub: 1,
        //markers: true,
    })

}

function preloaderInit() {
    
    hm.classList.add('loading');

    let tag = '';

    tag  = `<div class="preloader-bg"></div>
    <div class="preloader-txt-wrap le">
        <span class="txt-v1">J</span>
        <span class="txt-v1">I</span>
        <span class="txt-v1">S</span>
        <span class="txt-v1">E</span>
        <span class="txt-v1">O</span>
        <span class="txt-v1">N</span>
    </div>
    <div class="preloader-txt-wrap ri">
        <span class="txt-v1">R</span>
        <span class="txt-v1">Y</span>
        <span class="txt-v1">U</span>
        <span class="txt-v1">.</span>
    </div>
    <div class="preloader-txt-wrap le">
        <span class="txt-v2 txt-j">J</span>
        <span class="hidden-txt">I</span>
        <span class="hidden-txt">S</span>
        <span class="hidden-txt">E</span>
        <span class="hidden-txt">O</span>
        <span class="hidden-txt">N</span>
    </div>
    <div class="preloader-txt-wrap ri">
        <span class="txt-v2 txt-r">R</span>
        <span class="hidden-txt">Y</span>
        <span class="hidden-txt">U</span>
        <span class="txt-v2 txt-last">.</span>
    </div>
    <p><span class="loader-text">100%</span></p>`
    
    preloader.innerHTML = tag;

    loaderText = document.querySelector('.loader-text');
    txtV1 = document.querySelectorAll('.txt-v1');
    txtV2 = document.querySelectorAll('.txt-v2');
    
    preloaderTxt = gsap.timeline()
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
    })
    .to(preloader, {
        opacity: 0,
        duration: 0    
    }, '+=.5')

    function init () {
        loaderText.textContent = `${Math.round(preloaderTxt.progress() * 100)}%`
    }

    function end () {
        gsap.to(".preloader p span", {
            y: "-100%",
            delay: .3,
            duration: 1,
            ease: "Expo.easeOut"
        }, '<')
    }

    preloaderTxt.eventCallback("onUpdate",  init);
    preloaderTxt.eventCallback("onComplete",  end);
}

function setCookie(name, value) {
    document.cookie = name + '=' + value + '; path=/';
}

function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
}

let loadingBar = getCookie('loadingBar');
let isHardRefresh = performance.navigation.type === performance.navigation.TYPE_RELOAD;
let delay = "+=.2";

if ( !loadingBar || isHardRefresh ) {
    setCookie('loadingBar', true);
    delay = "+=4";

    master
    .add(preloaderInit)
    .add(preloaderTxt)
    .add(visualTxt, delay);
} else {    
    const html = document.querySelector('html');
    const body = document.querySelector('body');  
    html.classList.add("load");        
    body.style.backgroundColor = "black";
    preloader.style.display = "none"; 
    bg.style.display = "none"; 

    preloader.innerHTML = '';
    master.add(visualTxt, delay);
}

arrowAniType1();
arrowAniType2();
arrowAniType3();
arrowAniType4();

aboutAni();
projectAni();
connectAni();
