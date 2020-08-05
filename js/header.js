'use strict';

const ham = document.getElementById('ham');
const ham_menu_wrapper = document.getElementById('ham_menu_wrapper');
const header = document.querySelector('header');

ham.addEventListener('click', () => {
  ham.classList.toggle('clicked');
  ham_menu_wrapper.classList.toggle('clicked');
});

window.onload = () => {
  document.getElementById('home_first_heading').style.opacity = "1";
  document.getElementById('home_first_txt').style.opacity = "1";

  setTimeout( () => {
    header.style.opacity = "1";
  }, 1500);
}
