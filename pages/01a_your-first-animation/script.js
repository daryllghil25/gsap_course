gsap.to('.card', { // gsap.to to start the animation
    opacity:1,
    scale:1,
    duration: 3,
    onComplete: ()=>{ //oncomplete -  when the animation is finished you can decide what will happened next, you can chain any element besides the element you are currently targeting
        gsap.to('.card', {
            y: -20,
            repeat: -1, // repeat - tells how many times the animation will happened, while a '-1' value will consider as infinite
            yoyo: true, // yoyo -  yoyo set to true means the animation will back and forth while false value will make the animation start from the start
            duration: 0.5
       
            
        })
    }
}) 





// ---sample chaining for different property on onComplete------
// gsap.to('.card', {
//     opacity:1,
//     scale:1,
//     duration: 3,
//     onComplete: ()=>{
//         gsap.to('.card-2', {
//             opacity: 1,
//             onComplete: ()=>{
//                 gsap.to('.card-3', {
//                     opacity: 1,
//                     scale: 1.4,
//                     duration: 4,
//                     y: 100
//                 })
//             }
            
//         })
//     }
// }) 