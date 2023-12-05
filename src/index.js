const slider = document.querySelector('#slider');

let sliderSection = document.querySelectorAll('.pro-slider');

let sliderSectionLast = sliderSection[sliderSection.length - 1];

const mes = document.querySelector('.pro-mes');

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');


slider.insertAdjacentElement("afterbegin", sliderSectionLast)

mes.innerHTML=document.querySelectorAll('.pro-slider')[1].id.toUpperCase()


const Next=()=> {
    let sliderSectionFirst = document.querySelectorAll('.pro-slider')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';

    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = '-100%';
    }, 500)

    let id = document.querySelectorAll('.pro-slider')[2].id.toUpperCase();
    mes.innerHTML = id
    console.log(id)

    
}

btnRight.addEventListener('click', ()=>{
    Next()
})


const Prev=()=> {
    let sliderSectionFirst = document.querySelectorAll('.pro-slider')[0];
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';

    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = '-100%';

    }, 500)

    let id = document.querySelectorAll('.pro-slider')[0].id.toUpperCase();
    mes.innerHTML = id
    console.log(id)
}

btnLeft.addEventListener('click', ()=>{
    Prev()
})


//seleccionar meses





