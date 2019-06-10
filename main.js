window.onload = function(){
    const navbar = document.getElementById("navbar");
    const navTop = navbar.offsetTop;
    console.log(navTop);

    window.addEventListener("scroll",function(){
        if (window.pageYOffset >= navTop) {
            navbar.classList.add("sticky");
            document.getElementById("about").style.marginTop = "10px";
            document.getElementById("events").style.marginTop = "10px";
            navbar.style.height = "60px";
          } else {
            navbar.classList.remove("sticky");
            document.getElementById("about").style.marginTop = "0px";
            document.getElementById("events").style.marginTop = "0px";
            navbar.style.height = "50px";
          }
    });



    /*Alumuni Image carousel effect using Swinger.js Lib */ 
    
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


    /*Tablet*/
    
   const callout = document.getElementsByClassName("callout");
   console.log(callout);

}