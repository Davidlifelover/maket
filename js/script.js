new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    }, 

breakpoints: {
    320: {
        enabled: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
    },
    770: {
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
    },
    
}
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
    button.innerHTML = 'Показать все';
    icon.style = 'transform: rotate(0deg)'
}

button.addEventListener('click', () => {
    if (hidden) {
        show();
    } else {
        invis();
    }
})
