let nav_lis = document.querySelectorAll('nav ul li');
let lis_pages=document.querySelectorAll('.lis');

let prev=0;
nav_lis[0].classList.add('li-border');
lis_pages[5].style.display='flex';
for (let i = 0; i < nav_lis.length; i++) {
    nav_lis[i].addEventListener('click', () => {
        nav_lis[prev].classList.remove('li-border');
        nav_lis[i].classList.add('li-border');
        lis_pages[prev].style.display='none';
        lis_pages[i].style.display='flex';
        prev=i;
    })
}


