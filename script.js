var crsr = document.querySelector("#cursor");
var bcrsr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px",
        crsr.style.top = dets.y + "px",
        bcrsr.style.left = dets.x - 250 + "px",
        bcrsr.style.top = dets.y - 250 + "px"
})

var allh4 = document.querySelectorAll("#nav h4");

allh4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "1px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E"
    })

})


gsap.to("#nav", {
    backgroundColor: "black",
    height: "90px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -50%",
        end: "top -20%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -75%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:100,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"bottom 55%",
        scrub:2
    }

})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"bottom 65%",
        scrub:2
    }

})

gsap.from("#braces1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#braces1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#braces2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#braces1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:3
    }
})