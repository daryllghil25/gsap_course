import gsap from 'gsap'

const button = document.querySelector('.scroll-to-top');
let isFloating = false

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
        button.classList.add('show');
        
          if(!isFloating){
        gsap.to(button,{
            y: -50,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.out'
        })
       isFloating = true; 
    }
    }
  else{
        button.classList.remove('show')
    }
})

button.addEventListener('mouseenter', (e)=>{
    gsap.to(e.target,{
        scale: 1.5, duration:0.2
    })
})
button.addEventListener('mouseleave', (e)=>{
    gsap.to(e.target,{
        scale: 1, duration:0.2
    })
})

button.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})