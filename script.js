let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const group = document.querySelector('.group');  
for(let i = 1; i< 35; i++){  
    const containerId = `iconContainer${i}`;  
    const container = document.createElement('div');  
    container.className = 'iconContainer';  
    container.id = containerId;  
    group.appendChild(container);  
    addIcons(containerId);
}  
function addIcons(containerId){  
    const iconContainer = document.getElementById  
    (containerId);  
    const codeClass = [
        "fa-solid fa-ghost", //GamePad
        "fa-solid fa-code", //Ghost
        "fa-solid fa-puzzle-piece", //Dragon
        "fa-solid fa-headset", //Dice
        "fa-solid fa-trophy", //Trophy
        "fa-solid fa-dice", //Code
        "fa-solid fa-gamepad", //Puzzle
        "fa-brands fa-steam", //Puzzle
        "fa-brands fa-windows", //Puzzle
        "fa-brands fa-android", //Puzzle*/
        "fa-brands fa-html5", //Puzzle
        "fa-brands fa-gitkraken",
        "fa-brands fa-github",
        "fa-solid fa-robot",
        "fa-solid fa-bug-slash",
    ];  
    for (let i = 0; i<200; i++){  
        const icon = document.createElement('i');  
        icon.className = randomIcon(codeClass);  
        iconContainer.appendChild(icon);  
    }  
}  
function randomIcon(values){  
    const randomIndex = Math.floor(Math. random() * values.length);  
    return values[randomIndex];  
}  
const images = [
    'about.png',
    'about1.png',
    'about2.png',
    'about3.png',
    'about4.png',
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

setInterval(changeImage, 3000);