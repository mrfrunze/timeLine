window.onload = function(){
   let curcl = document.querySelector('.circul-bg');
   gsap.registerPlugin(ScrollTrigger);


   gsap.to(curcl, {
      ScrollTrigger: {
         end: "+=100",
         markers: true,
         scrub: true,
         start:"top center",
      },
      y: 500,
      duration: 8
   });
};
