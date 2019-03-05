const buttonSliderOne = document.querySelector('.header__slider__menu__inner--btn-one');
const buttonSliderTwo = document.querySelector('.header__slider__menu__inner--btn-two');
const buttonSliderThree = document.querySelector('.header__slider__menu__inner--btn-three');
const buttonSliderFour = document.querySelector('.header__slider__menu__inner--btn-four');
const buttonSliderFive = document.querySelector('.header__slider__menu__inner--btn-five');

const cardSliderOne = document.querySelector('.header__slider__wrap--one');
const cardSliderTwo = document.querySelector('.header__slider__wrap--two');
const cardSliderThree = document.querySelector('.header__slider__wrap--three');
const cardSliderFour = document.querySelector('.header__slider__wrap--four');
const cardSliderFive = document.querySelector('.header__slider__wrap--five');

function sliderClick() {
    buttonSliderOne.addEventListener('click', function(e) {
        e.preventDefault();
        buttonSliderOne.classList.add('activ');
        buttonSliderTwo.classList.remove('activ');
        buttonSliderThree.classList.remove('activ');
        buttonSliderFour.classList.remove('activ');
        buttonSliderFive.classList.remove('activ');

        cardSliderOne.style.display = 'block';
        cardSliderTwo.style.display = 'none';
        cardSliderThree.style.display = 'none';
        cardSliderFour.style.display = 'none';
        cardSliderFive.style.display = 'none';
    });
    buttonSliderTwo.addEventListener('click', function(e) {
        e.preventDefault();
        buttonSliderOne.classList.remove('activ');
        buttonSliderTwo.classList.add('activ');
        buttonSliderThree.classList.remove('activ');
        buttonSliderFour.classList.remove('activ');
        buttonSliderFive.classList.remove('activ');

        cardSliderOne.style.display = 'none';
        cardSliderTwo.style.display = 'block';
        cardSliderThree.style.display = 'none';
        cardSliderFour.style.display = 'none';
        cardSliderFive.style.display = 'none';
    });
    buttonSliderThree.addEventListener('click', function(e) {
        e.preventDefault();
        buttonSliderOne.classList.remove('activ');
        buttonSliderTwo.classList.remove('activ');
        buttonSliderThree.classList.add('activ');
        buttonSliderFour.classList.remove('activ');
        buttonSliderFive.classList.remove('activ');

        cardSliderOne.style.display = 'none';
        cardSliderTwo.style.display = 'none';
        cardSliderThree.style.display = 'block';
        cardSliderFour.style.display = 'none';
        cardSliderFive.style.display = 'none';
    });
    buttonSliderFour.addEventListener('click', function(e) {
        e.preventDefault();
        buttonSliderOne.classList.remove('activ');
        buttonSliderTwo.classList.remove('activ');
        buttonSliderThree.classList.remove('activ');
        buttonSliderFour.classList.add('activ');
        buttonSliderFive.classList.remove('activ');

        cardSliderOne.style.display = 'none';
        cardSliderTwo.style.display = 'none';
        cardSliderThree.style.display = 'none';
        cardSliderFour.style.display = 'block';
        cardSliderFive.style.display = 'none';
    });
    buttonSliderFive.addEventListener('click', function(e) {
        e.preventDefault();
        buttonSliderOne.classList.remove('activ');
        buttonSliderTwo.classList.remove('activ');
        buttonSliderThree.classList.remove('activ');
        buttonSliderFour.classList.remove('activ');
        buttonSliderFive.classList.add('activ');

        cardSliderOne.style.display = 'none';
        cardSliderTwo.style.display = 'none';
        cardSliderThree.style.display = 'none';
        cardSliderFour.style.display = 'none';
        cardSliderFive.style.display = 'block';
    });
}

function buttonSlider() {
    let index = 0;
    const elemSlide = document.querySelectorAll('.header__slider__wrap');
    const top = document.querySelector('.header__slider__menu__btn-top');
    const bottom = document.querySelector('.header__slider__menu__btn-bottom');
    const btnSlider = document.querySelectorAll('.header__slider__menu__inner--btn');
    const headerSlidetMenu = document.querySelector('.header__slider__menu');
    btnSlider[index].classList.add('activ');
    bottom.addEventListener('click', function(e) {
        if(btnSlider[index].classList.contains('activ')) {
            btnSlider[index].classList.remove('activ');
        } else {
            btnSlider[++index].classList.add('activ');
        }
        top.style.display = 'block';
        elemSlide[index].style.display = 'none';
        elemSlide[++index].style.display = 'block';
        btnSlider[index].classList.add('activ');
        

        if(index === (elemSlide.length - 1)) {
            bottom.style.display = 'none';
            headerSlidetMenu.style.paddingBottom = '87px';
        }       
    });
    top.addEventListener('click', function(e) {
        if(btnSlider[index].classList.contains('activ')) {
            btnSlider[--index].classList.add('activ');
            btnSlider[++index].classList.remove('activ');
        }
        bottom.style.display = 'block';
        elemSlide[index].style.display = 'none';
        elemSlide[--index].style.display = 'block';
        headerSlidetMenu.style.paddingBottom = '0';
        if(index === 0) {
            top.style.display = 'none';
            headerSlidetMenu.style.paddingTop = '87px';
        }
    });
}

function buttonInnerSlider() {
    let index = 0;
    const buttonPrev = document.querySelector('.header__slider__btn-prev');
    const buttonNext = document.querySelector('.header__slider__btn-next');
    const elemSlide = document.querySelectorAll('.header__slider__wrap');
    const btnSlider = document.querySelectorAll('.header__slider__menu__inner--btn'); 

    buttonNext.addEventListener('click', function(e) {
        if(btnSlider[index].classList.contains('activ')) {
            btnSlider[index].classList.remove('activ');
        } else {
            btnSlider[++index].classList.add('activ');
        }
        buttonPrev.style.display = 'block';
        elemSlide[index].style.display = 'none';
        elemSlide[++index].style.display = 'block';
        btnSlider[index].classList.add('activ');        

        if(index === (elemSlide.length - 1)) {
            buttonNext.style.display = 'none';
        }       
    });

    buttonPrev.addEventListener('click', function(e) {
        if(btnSlider[index].classList.contains('activ')) {
            btnSlider[--index].classList.add('activ');
            btnSlider[++index].classList.remove('activ');
        }
        buttonNext.style.display = 'block';
        elemSlide[index].style.display = 'none';
        elemSlide[--index].style.display = 'block';
        if(index === 0) {
            buttonPrev.style.display = 'none';
        }
    });
}
buttonInnerSlider();
buttonSlider();
sliderClick();