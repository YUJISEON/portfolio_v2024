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

