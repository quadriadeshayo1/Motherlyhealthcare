// show menu
const  showmenu =document.querySelector('.nav__menu');
document.querySelector('#menu-btn').addEventListener('click',function(){
    showmenu.classList.toggle('show')
});

const navLink =document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu =document.getElementById('nav-menu');
    navMenu.classList.remove('show');  //when we click on each nav__link remove the show class
}
navLink.forEach((n) => n.addEventListener('click', linkAction));