let sliderContainer = document.querySelectorAll('.sliderContainer');
let nextBtn = document.querySelectorAll('.next');
let prevtBtn = document.querySelectorAll('.prev');

sliderContainer.forEach((slider,i) =>{
    nextBtn[i].addEventListener('click',()=>{
        slider.scrollLeft += slider.getBoundingClientRect().width 
    })
    prevtBtn[i].addEventListener('click',()=>{
        slider.scrollLeft -= slider.getBoundingClientRect().width 
    })
})

