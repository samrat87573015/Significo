function heroAnimation() {
  gsap.set(".slides", {
    scale: 3,
  });

  let lt = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_area",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
    },
  });

  lt.to(
    ".video_div",
    {
      "--clip": "0%",
      ease: Power2,
      duration: 2,
    },
    "a"
  )

    .to(
      ".slides",
      {
        scale: 1,
        ease: Power2,
        duration: 2,
      },
      "a"
    )

    .to(
      ".marqleft",
      {
        xPercent: -10,
        ease: Power4,
        duration: 2,
        stagger: 0.03,
      },
      "b"
    )
    .to(
      ".marqright",
      {
        xPercent: 10,
        ease: Power4,
        duration: 2,
        stagger: 0.03,
      },
      "b"
    );
}
heroAnimation();

function scollSliderAnimation() {
  gsap.to(".slider_item", {
    scrollTrigger: {
      trigger: ".scrol_slider_area",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
  });
}
scollSliderAnimation();

function teamAnimation() {
  let teamItem = document.querySelectorAll(".team_item");

  teamItem.forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      let teamImg = this.querySelector(".team_img");
      gsap.to(teamImg, {
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        scale: 1,
        ease: Power4,
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      let teamImg = this.querySelector(".team_img");
      gsap.to(teamImg, {
        scale: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
teamAnimation();

function testimonialAnimation() {
  const testimonialItem = document.querySelectorAll(".testimonial_item");

  testimonialItem.forEach(function (el) {
    let cutter = "";
    const testiPara = el.querySelector(".testiPara");
    const textsplit = testiPara.textContent.split("");

    textsplit.forEach(function (e) {
      if (e === " ") cutter += `<span>&nbsp</span>`;
      cutter += `<span>${e}</span>`;
    });
    testiPara.innerHTML = cutter;

    gsap.set(".testiPara span", {
      opacity: 0.1,
    });

    gsap.to(".testiPara span", {
      scrollTrigger: {
        trigger: ".testimonial_area",
        start: "top 30%",
        end: "bottom bottom",
        scrub: 2,
      },
      opacity: 1,
      ease: Power4,
      stagger: 0.3,
    });
  });
}
testimonialAnimation();


function bodyColorChangeAnimation(){

    const section = document.querySelectorAll(".section");

    section.forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 20%",
            end: "bottom 80%",
            onEnter: function(){
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    });

}
bodyColorChangeAnimation();
