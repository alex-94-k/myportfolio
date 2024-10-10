/* Burger */

const menu = document.querySelector('.navbar__menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function(){
burger.classList.toggle('burger__active');
menu.classList.toggle('navbar__menu__active');
});

/* Links */

const projectsVisual = document.querySelectorAll('.projects__visual');

projectsVisual.forEach(visual => {
  visual.addEventListener('mouseover', () => {
    const buttons = visual.querySelector('.projects__buttons');
    buttons.classList.add('hover');
  });

  visual.addEventListener('mouseout', () => {
    const buttons = visual.querySelector('.projects__buttons');
    buttons.classList.remove('hover');
  });
});

/* Back to top */

const back = document.querySelector('.back');

function scroll () {
  if (document.documentElement.scrollTop > 200) {
    back.classList.add('visible');
    return;
  }
  
  back.classList.remove('visible');
}

window.addEventListener('scroll', scroll);