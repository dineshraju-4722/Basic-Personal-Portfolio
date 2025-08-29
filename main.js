let nav_lis = document.querySelectorAll('nav ul li');
let navbar = document.querySelector('nav ul');
let lis_pages = document.querySelectorAll('.lis');
let menubar = document.querySelector('.menu-bar');
let closeicon = document.querySelector('.close-icon');

let prev = 0;
nav_lis[0].classList.add('li-border');
lis_pages[5].style.display = 'flex';
for (let i = 0; i < nav_lis.length; i++) {
    nav_lis[i].addEventListener('click', () => {
        nav_lis[prev].classList.remove('li-border');
        nav_lis[i].classList.add('li-border');
        lis_pages[prev].style.display = 'none';
        lis_pages[i].style.display = 'flex';
        navbar.style.display='';
        prev = i;
    })
}

menubar.addEventListener('click', () => {
    navbar.style.display = 'flex';
})
closeicon.addEventListener('click', () => {
    navbar.style.display = '';
})




