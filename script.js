'use strict';


let col = document.querySelectorAll('.main-layout__slide_item');
let colContent = document.querySelector('.main-layout_fon1');
console.log(col);
console.log(colContent);



for (let i = 0; i < col.length; i++){
    col[i].addEventListener('click', function(){
        showUserContent(i);
    } )
}

function showUserContent(ind){
    if (ind === 1 || ind === 3 ){
        colContent.classList.remove('main-layout_fon1')
        colContent.classList.add('main-layout_fon2')
    }else{
        colContent.classList.add('main-layout_fon1')
        colContent.classList.remove('main-layout_fon2')
        
    }
    console.log('jj;');
}







let tab = document.querySelectorAll('.services__button_item');
let tabContent = document.querySelectorAll('.services__content_prewiew');
console.log(tab);
console.log(tabContent);
tabContent[0].style.display = 'flex';

for (let i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', function(){
        showCurrentContent(i);
    } )
}

function showCurrentContent(ind){
    for (let b = 0; b< tabContent.length; b++){
        if (b === ind) {
            tabContent[b].style.display = 'flex';
        }else {
            tabContent[b].style.display = 'none';
        }
    }
   
}

let it = document.querySelectorAll('.say__content_button_item');
let itContent = document.querySelectorAll('.say__content_prewiew');
console.log(it);
console.log(itContent);
itContent[0].style.display = 'flex';

for (let i = 0; i < it.length; i++){
    it[i].addEventListener('click', function(){
        showWinContent(i);
    } )
}

function showWinContent(ind){
    for (let b = 0; b< itContent.length; b++){
        if (b === ind) {
            itContent[b].style.display = 'flex';
        }else {
            itContent[b].style.display = 'none';
        }
    }
   
}


const allButton = document.querySelector('.collection__logo_left_all');
const latestButton = document.querySelector('.collection__logo_right_item_latest');
const popularButton = document.querySelector('.collection__logo_right_item_popular');

const latestComp = document.querySelectorAll('.latest');
const popularComp = document.querySelectorAll('.popular');
const allComp = document.querySelectorAll('.collection__content_item');


allButton.addEventListener('click', function() {
    for (let i = 0; i < allComp.length; i++) {
        allComp[i].style.display = 'flex';
    }
})



latestButton.addEventListener('click', function() {
    for (let i = 0; i < allComp.length; i++) {
        allComp[i].style.display = 'none';
    }

    for (let i = 0; i < latestComp.length; i++) {
        latestComp[i].style.display = 'flex';
    }
    console.log(latestComp);
})

popularButton.addEventListener('click', function() {
    for (let i = 0; i < allComp.length; i++) {
        allComp[i].style.display = 'none';
    }

    for (let i = 0; i < popularComp.length; i++) {
        popularComp[i].style.display = 'flex';
    }
    console.log(popularComp);
})


let block = document.querySelector('.header__menu_burger');
let burger = document.querySelector('.header__full__content_adaptive');
block.addEventListener('click',toggleContainer);
function toggleContainer(){
    burger.classList.toggle("visible");
}

(function(){
    const burger = document.querySelector('.header__menu_burger');
    burger.addEventListener('click', () =>{
        burger.classList.toggle('burger_active');
    })
}());










