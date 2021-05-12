const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('.header__main-nav');
const radioBtnTabs = document.getElementsByName("tabs");
const menuItem = document.getElementById('btn');
const menuItem2 = document.getElementById('btn2');
const greeceBtn = document.querySelector('.places__button--greece');
const albaniaBtn = document.querySelector('.places__button--albania');
const macedoniaBtn = document.querySelector('.places__button--macedonia');
const montenegroBtn = document.querySelector('.places__button--montenegro');
const croatiaBtn = document.querySelector('.places__button--croatia');
const greece = document.getElementById('greece');
const albania = document.getElementById('albania');
const macedonia = document.getElementById('macedonia');
const montenegro = document.getElementById('montenegro');
const croatia = document.getElementById('croatia');


let openMenu = false;

// Открытие-закрытие меню кнопкой
menuButton.addEventListener ('click', function() {
  if (openMenu === false) {
    menu.classList.remove('visually-hidden-menu');
    menuButton.classList.add('header__main-nav-toggle--close');
    openMenu = true;
    return;
  } if (openMenu === true) {
    menu.classList.add('visually-hidden-menu');
    menuButton.classList.remove('header__main-nav-toggle--close');
    openMenu = false;
    return;
  }
});
// Закрытие меню при переходе по ссылке
menuItem.addEventListener ('click', function() {
  menu.classList.add('visually-hidden-menu');
  menuButton.classList.remove('header__main-nav-toggle--close');
  openMenu = false;
  return;
});
menuItem2.addEventListener ('click', function() {
  menu.classList.add('visually-hidden-menu');
  menuButton.classList.remove('header__main-nav-toggle--close');
  openMenu = false;
  return;
});
// Переключение табов
function checkTab(name){
  for (var i = 0;i < name.length; i++) {
    if(name[0].checked){
      console.log(0);
      document.querySelector('.tabs__tab--active').classList.remove('tabs__tab--active')
      document.querySelector('.tabs__tab--greece').classList.add('tabs__tab--active')
      // return;
    } if(name[1].checked){
      console.log(1);
      document.querySelector('.tabs__tab--active').classList.remove('tabs__tab--active')
      document.querySelector('.tabs__tab--albania').classList.add('tabs__tab--active')
      // return;
    } if(name[2].checked){
      console.log(2);
      document.querySelector('.tabs__tab--active').classList.remove('tabs__tab--active')
      document.querySelector('.tabs__tab--macedonia').classList.add('tabs__tab--active')
      // return;
    } if(name[3].checked){
      console.log(3);
      document.querySelector('.tabs__tab--active').classList.remove('tabs__tab--active')
      document.querySelector('.tabs__tab--montenegro').classList.add('tabs__tab--active')
      // return;
    } if(name[4].checked){
      console.log(4);
      document.querySelector('.tabs__tab--active').classList.remove('tabs__tab--active')
      document.querySelector('.tabs__tab--croatia').classList.add('tabs__tab--active')
      // return;
    }
    return
  }
}

checkTab(radioBtnTabs);
// Переключение табов нажатием
var currentValue = 0;
function handleClick() {
  checkTab(radioBtnTabs);
}
// Плавный скролл при переходе по якорю
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
// Переключение табов при переходе по ссылке
greeceBtn.addEventListener ('click', () => setTimeout(function(){
  greece.checked = true;
  handleClick()
}));
albaniaBtn.addEventListener ('click', () => setTimeout(function(){
  albania.checked = true;
  handleClick()
}));
macedoniaBtn.addEventListener ('click', () => setTimeout(function(){
  macedonia.checked = true;
  handleClick()
}));
montenegroBtn.addEventListener ('click', () => setTimeout(function(){
  montenegro.checked = true;
  handleClick()
}));
croatiaBtn.addEventListener ('click', () => setTimeout(function(){
  croatia.checked = true;
  handleClick()
}));

const tryBtn = document.querySelectorAll('.paopup-button')
const paopup = document.querySelector('.paopup');
const paopupClose = document.querySelector('.paopup__close-btn');
let openPaopup = false;

paopupClose.addEventListener ('click', function() {
  paopup.classList.add('visually-hidden');
  openPaopup = false;
  return;
});

const closePaopup = function () {
  paopup.classList.add('visually-hidden');
  openPaopup = false;
  return;
};

for(let i = 0 ; i < tryBtn.length ; i++) {
  const btn = tryBtn[i];
  btn.addEventListener('click' , function() {
    paopup.classList.remove('visually-hidden');
    openPaopup = true;
    return;
  });
}

window.onkeydown = function( event ) {
  if ( event.keyCode === 27 ) {
    if (openPaopup === true) {
      closePaopup();
    }
  }
};
