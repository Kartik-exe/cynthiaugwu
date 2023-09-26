const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnime(){
    var tl = gsap.timeline();

    tl.from('.nav',{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to('.boundingelem',{
       y: 0,
       ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2,
    }) 
    .from('.herofotter',{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function flatminicircle(){
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        console.log(dets.clientX, dets.clientY)

        circleMouseFollower(xscale, yscale);
    });
}

flatminicircle();

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
    document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale} ${yscale})`;
    })
}

circleMouseFollower();
firstPageAnime();

// 2:04:00
// Ye code saala chal nahi raha koi solve kardo bc