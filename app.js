function heroAnimation(){
    gsap.set(".slides",{
        scale: 3,
    })
    
    let lt = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero_area",
            start: "top top",
            end: "bottom bottom",
            scrub: 3,
        }
    })
    
    lt.to(".video_div", {
        '--clip': "0%",
        ease: Power2,
        duration: 2,
    }, 'a')
    
    .to(".slides",{
        scale: 1,
        ease: Power2,
        duration: 2
    }, 'a')
    
    .to(".marqleft",{
        xPercent: -10,
        ease: Power4,
        duration: 2,
        stagger: .03,
    }, 'b')
    .to(".marqright",{
        xPercent: 10,
        ease: Power4,
        duration: 2,
        stagger: .03,
    }, 'b')
}

heroAnimation()

gsap.to(".slider_item",{
    scrollTrigger: {
        trigger: ".scrol_slider_area",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
})