$(document).ready(function(){
  let toggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main-contents');
  
  toggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
  });
  
});