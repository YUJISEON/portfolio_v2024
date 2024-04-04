

const pItems = gsap.utils.toArray(document.querySelectorAll(".project-box li"));

pItems.forEach((item, index) => {
    
    pItems[0].classList.add("on");
    gsap.set(pItems[0], { opacity: 1});
    
    const newsContent = item.querySelector(".pdetail p");    
    const newsContentHeight = gsap.getProperty(newsContent, "height");
    
    // if (index === 0) {
    //     gsap.set(newsContent, { height: "auto" });
    // } else {
    //     gsap.set(newsContent, { height: 0 });
    // }
    
    
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            id : index,
            start: () => {
                const startPin = (window.innerHeight / 4) + (item.offsetHeight / 4);
                return "top +=" + startPin;
            },
            end: () => {
                const endPin = item.offsetHeight + newsContentHeight/1.2;
                return "+=" + endPin;
            },
            onEnter: () => { 
                item.classList.add("on");
                gsap.to(item, { duration: 0.2, opacity: 1, ease: "power2.easeOut" });
                //gsap.to(newsContent, { duration: 0.2, height: "auto", ease: "power2.easeOut" });
            },
            onLeave: () => {
                if (index !== pItems.length - 1) {
                    item.classList.remove("on");
                    gsap.to(item, { duration: 0.2, opacity: 0.2, ease: "power2.easeOut" });
                    //gsap.to(newsContent, { duration: 0.2, height: 0, ease: "power2.easeOut" });
                    
                }
            },
            onEnterBack: () => {
                item.classList.add("on");
                gsap.to(item, { duration: 0.2, opacity: 1, ease: "power2.easeOut" });
                //gsap.to(newsContent, { duration: 0.2, height: "auto", ease: "power2.easeOut" });
            },
            onLeaveBack: () => {
                if (index !== 0 ) {
                    item.classList.remove("on");
                    gsap.to(item, { duration: 0.2, opacity: 0.2, ease: "power2.easeOut" });
                    //gsap.to(newsContent, { duration: 0.2, height: 0, ease: "power2.easeOut" });
                }
            },
            //markers: true,
        },
    });
});


let direction = 1;				
const marqueeFw = roll(".marquee-text.fw", {duration: 20});
const marqueeBw = roll(".marquee-text.bw", {duration: 20}, true);
        
scroll = ScrollTrigger.create({
    onUpdate(self) {
        if (self.direction !== direction) {
            direction *= -1;
            gsap.to([marqueeFw, marqueeBw], {timeScale: direction, overwrite: true});
        }
    }
});

function roll(targets, vars, reverse) {
    const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() { 
            this.totalTime(this.rawTime() + this.duration() * 10); 
        }
    });  
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    gsap.utils.toArray(targets).forEach(el => {
        let clone = el.cloneNode(true);
        el.parentNode.appendChild(clone);
        gsap.set(clone, {position: "absolute", top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)});
        gsap.to(clone.querySelectorAll("span"), {duration: 0.7, y: 0, opacity:1, delay:0.5, ease:Power2.easeOut});
        tl.to([el, clone], {xPercent: reverse ? 100 : -100, ...vars}, 0);
    });
    return tl;
}