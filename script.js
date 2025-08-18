const hamburger = document.getElementById('hamburger')
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a')

hamburger.addEventListener ('click', ()=>{
    navMenu.classList.toggle('active');
})

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        navMenu.classList.remove('active')
    })
})


// Typed.js animation
var typed = new Typed("#typed", {
  strings: ["Frontend Developer", "Problem Solver", "React Developer"],
  typeSpeed: 80,    // typing speed
  backSpeed: 50,    // backspacing speed
  loop: true        // keeps looping
});
