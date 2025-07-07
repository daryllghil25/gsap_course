import gsap from 'gsap';

gsap.to('.box',{
    opacity:1,
    rotation: 360,
    background: '#ff6f61',
    // borderRadius: '50%',
    scale: 1.5,
    duration: 2,
    ease: 'bounce',
    yoyo: true,
    repeat: -1,
      repeatDelay: 2 // compare to 'delay' that only runs once on initial state repeatDelay always run
})