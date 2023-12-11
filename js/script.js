    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
      
        pagination: {
            el: '.swiper-pagination',
        },
      
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      
        scrollbar: {
            el: '.swiper-scrollbar',
        },
      
        spaceBetween: 16,
        mousewheel: true,
        keyboard: true,
      });


const button = document.querySelector('.show-more__text');
const elements = document.querySelector('.brand__list');
const icon = document.querySelector('.show-more__img');
let hidden = true;

let show = () => {
    console.log(elements);
    elements.classList.add('visible');
    hidden = false;
    button.innerHTML = 'Скрыть';
    icon.style = 'transform: rotate(180deg)'
}

let invis = () => {
    elements.classList.remove('visible');
    hidden = true;
    button.innerHTML = 'Читать далее';
    icon.style = 'transform: rotate(0deg)'
}

button.addEventListener('click', () => {
    if (hidden) {
        show();
    } else {
        invis();
    }
})
