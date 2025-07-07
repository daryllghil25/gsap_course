import gsap from 'gsap'
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const resume = document.querySelector('.resume')
const restart = document.querySelector('.restart')
const reverse = document.querySelector('.reverse')
const repeat = document.querySelector('.repeat')
const kill = document.querySelector('.kill')
const yoyo = document.querySelector('.yoyo')

const animation = gsap.to('.box', {
    opacity: 1,
    rotation: 360,
    borderRadius: '50%',
    scale: 1.25,
    duration: 4
})

play.addEventListener('click', ()=>{
    animation.play(0); // if animation has paused or finished, it can be activated to resume. if given a value, it will restart or play on the given value
})

pause.addEventListener('click', ()=>{
    animation.pause(); // pause the animation
})

resume.addEventListener('click', ()=>{
    animation.resume(); // unlike play, resume can just resume from where it pause or stop
})

restart.addEventListener('click', ()=>{
    animation.restart(); // even play can also do it by giving play(0), just for clarity just like resume you can restart the element animation from the start
})