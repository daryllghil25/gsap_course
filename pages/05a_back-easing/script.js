import gsap from 'gsap';
const tabRow = document.querySelector('.tab-row') //parent
const tabs = document.querySelectorAll('.tab') //link
const indicator = document.querySelector('.indicator') //line


function updateIndicator(target){
    const tabBounds = target.getBoundingClientRect();
    const rowBounds = tabRow.getBoundingClientRect();

    const width = tabBounds.width;
    const offset = tabBounds.left - rowBounds.left; // first is 

    gsap.to(indicator, {
        x: offset,
        width: width,
        duration: 0.4,
        ease: 'back.out(1.7)'
    })
}

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((t)=> t.classList.remove('active'));
        tab.classList.add('active')
        updateIndicator(tab)
    })
})

updateIndicator(document.querySelector('.tab.active'))