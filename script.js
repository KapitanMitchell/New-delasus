
/* function  parallax() {
    window.addEventListener("mousemove" , function(event){
        let mouseX = event.clientX
        let mouseY = event.clientY 
        let newTransformX = mouseX
        let newTransformY = mouseY
        window.style.transform = `translateX(-${[checkIndex] / 40}%)`
        window.style.transform = `translateY(-${[checkIndex] / 40}%)`
    })
} */



/*     let newMouse = document.querySelector(".img__f14")
    document.addEventListener("mousemove" , function(event){
        let rect = newMouse.getBoundingClientRect() /* Встановлює центр */
/*         let rectWidth = rect.width
        let rectHeigth = rect.height 
        let mouseX = event.clientX
        let mouseY = event.clientY
        let newX = mouseX - rectWidth / 2
        let newY = mouseY - rectHeigth / 2
        newMouse.style.transform = `translateX(-${newX}px) translateY(-${newY}px)`
    }) */

    const slideImage = document.querySelectorAll('.paralaks');
    let paralaksTwo = document.querySelectorAll('.paralaks-2')
    let paralaxTry = document.querySelectorAll('.paralaks-3')
window.addEventListener("mousemove",(e)=>{
    x = e.offsetX;
    y = e.offsetY;
    for(let i = 0; i < slideImage.length; i++){
        let newParalaks = slideImage[i]
        newParalaks.style.transform = `translate(${-x/200}px, ${-y/200}px)`;
    }
    for(let j = 0; j < paralaksTwo.length; j++){
        let paralax = paralaksTwo[j]
        paralax.style.transform = `translate(${x/220}px, ${y/220}px)`;
    }
    for(let k = 0; k < paralaxTry.length; k++){
        let paralaksTry = paralaxTry[k]
        paralaksTry.style.transform = `translate(${x/520}px, ${y/420}px)`;
    }
})


/* i J K */