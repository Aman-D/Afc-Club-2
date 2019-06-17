let toggle = true;
                            const callouts = document.querySelectorAll('.message');
                            callouts.forEach(callout => callout.addEventListener('click',()=>{
                                const detail = callout.querySelector('.details');
                                const focus = callout.querySelector('.callout');
                                if(toggle){
                                toggle=false    
                                detail.style.display = 'block';
                                focus.style.backgroundColor = 'rgba(196, 231, 252,0.705)';
                                
                            }   else{
                                toggle=true    
                                detail.style.display = 'none';
                                focus.style.backgroundColor = 'rgba(60, 184, 255, 0.705)';
                            }
                            TweenMax.to('.details',0.01,{opacity:1,ease: Power1.easeOut});
                                
                            }));
               