

var marker = document.querySelector('#marker');
var item = document.querySelectorAll('navbar a')

function indicator(e){
    marker.style.right = e.offsetRight+"px";
    marker.style.width = e.offsetWidth+"px";
}
item.forEach(link => {
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
})

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var marker = document.querySelector('#marker');
var item = document.querySelectorAll('.header .navbar a')

function indicator(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}
item.forEach(link => {
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
})