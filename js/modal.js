
                        const modalbtns = document.querySelectorAll('.modal-open');
                        modalbtns.forEach(function(btn){
                        btn.addEventListener('click',function(){
                        const m = btn.getAttribute("data-modal");
                            const modalEle = document.getElementById(m);
                            modalEle.style.display = "block";
                            TweenMax.to(".modal",1,{scaleX:1,ease:Power3.easeOut});
                            TweenMax.to('.modal-content',1,{opacity:1,ease:Power1.easeOut,delay:1});
                            TweenMax.to('.close',1,{opacity:1,delay:1.2});
                        });
                    });

                    const closebtns = document.querySelectorAll('.close');
					closebtns.forEach(function(close){
						close.addEventListener('click',function(){
							TweenMax.to('.close',1,{opacity:0});
							TweenMax.to('.modal-content',1,{opacity:0,ease: Power1.easeOut,delay:0.3});
							TweenMax.to('.modal',1,{scaleX:0,ease: Power3.easeOut,delay:1});	
							
						});
                    });
                            