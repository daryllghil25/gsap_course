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
    animation.play(); // if animation has paused or finished, it can be activated to resume. if given a value, it will restart or play on the given value
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
reverse.addEventListener('click', ()=>{
    animation.reverse(); // it reverse but when you click the play button, it will resume to the not reverse behavior while resume can resume it to reverse behavior
})

kill.addEventListener('click', ()=>{
    animation.kill(); // kill the animation, even if you play or reverse. only resume when you refresh your browser
})
yoyo.addEventListener('click', ()=>{
    animation.yoyo(true); // when something is repeating, the defaul behavior is forward -> forward, while if yoyo is true it would be forward -> reverse
})
repeat.addEventListener('click', ()=>{
    animation.repeat(2); // like a play button, but instead you can specify how many times it will play or even specify as infinite
})