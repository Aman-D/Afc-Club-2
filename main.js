window.onload = function(){
  






    // const navbar = document.getElementById("navbar");
    // const navTop = navbar.offsetTop;
    // console.log(navTop);



    // window.addEventListener("scroll",function(){
    //     if (window.pageYOffset >= navTop) {
    //         navbar.classList.add("sticky");
    //         document.getElementById("about").style.paddingTop = "20px";
    //         document.getElementById("events").style.paddingTop = "20px";
    //         // // navbar.style.height = "60px";
    //       } else {
    //         navbar.classList.remove("sticky");
    //         document.getElementById("about").style.marginTop = "0px";
    //         document.getElementById("events").style.marginTop = "0px";
            
    //       }
    // });


    document.querySelector('.container').scrollIntoView({ 
      behavior: 'smooth' 
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


    /*Back to top*/
    const topTop = document.getElementById("backToTop");
    window.addEventListener('scroll',()=>{ 
      let top = window.pageYOffset;
      if(top>1500)
      { topTop.style.left =0;
        topTop.style.opacity =1;
    }
      else  
      {
        topTop.style.left ="-100px";
        topTop.style.opacity =0;
      }
     
    });
    topTop.addEventListener('click',()=>{
      console.log("hello");
      document.documentElement.scrollTop = 0; 
    });

}