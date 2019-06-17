const tween1 = new TimelineMax();


tween1
.to(" #project .content",1,{
    opacity:1,
    x:0,
    ease:Power3.ease
})
.to(".project-card, .imp-cnt",0.7,{
    opacity:1,
    y:0,
    ease:Power4.easeIn,
    
});

const tween2 = new TimelineMax();
tween2
.to("#card1,#card2,#card3",1,{
    opacity:1,
    x:0,y:0,
    ease:Power4.easeInOut
});


const controller = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    trigger:"#project",
    offset:500,
    duration:450,
    reverse:true
})
.setTween(tween1)
.addIndicators()
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    trigger:"#project",
    offset:1165,
    duration:300,
    reverse:true
})
.setTween(tween2)
.addIndicators()
.addTo(controller);
