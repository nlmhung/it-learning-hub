$(document).ready(function(){
  let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');
  
  menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
    menu.classList.toggle('rotate360');
    menu.classList.toggle('fa-bars');   
  });
});

  