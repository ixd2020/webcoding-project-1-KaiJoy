const tl = gsap.timeline({defaults: {ease:"power1.out"} });


tl.to('.slider' , {y: "-100%", duration: 1.5 });
tl.to('.intro',{y: "-100%", duration: 1}, "-=1.5");
tl.to('.landing-about',{y:"-100%", duration: 0.5},"-=1.5");
tl.fromTo('nav',{opacity:0}, {opacity:1, duration:1});
tl.fromTo('.big-text',{opacity:0}, {opacity:1, duration:1},"-=1");
tl.fromTo('.landing-about',{opacity:0}, {opacity:1, duration:1},"-=2");