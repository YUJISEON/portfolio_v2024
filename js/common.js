gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);

const smoother = ScrollSmoother.create({
    smooth: 1, 
    effects: true,
    smoothTouch: 0.1, 
});

function wheelUp() {
    gsap.to(".header-body", {
        y: "0",
        duration: 1,
        ease: "Power3.easeOut"
    })
}

function wheelDown() {
    gsap.to(".header-body", {
        y: "-100%",
        duration: 1,
        ease: "Power3.easeOut"
    })
}

Observer.create({
    target: window, 
    type: "wheel, scroll", 
    onUp: () => wheelUp(),
    onDown: () => wheelDown(),
});

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

cursorAni();