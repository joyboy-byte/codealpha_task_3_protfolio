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
  typeSpeed: 80,    
  backSpeed: 50,    
  loop: true        
});





// ===== MAKE SOCIAL SVG BUTTONS CLICKABLE =====
document.getElementById("facebook_btn").addEventListener("click", () => {
  window.open("https://facebook.com/example.user123", "_blank");
});

document.getElementById("whatsApp_btn").addEventListener("click", () => {
  window.open("https://wa.me/1234567890", "_blank"); 
});

document.getElementById("instagram_btn").addEventListener("click", () => {
  window.open("https://instagram.com/example_profile", "_blank");
});

document.getElementById("linkedin_btn").addEventListener("click", () => {
  window.open("https://linkedin.com/in/example-user-123", "_blank");
});





// ================== Modal Logic ==================
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

// Function to open modal with custom content
function openModal(title, text) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modal.style.display = "flex";
}

// Close modal on X click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicking outside the box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ================== More About Me Buttons ==================
document.querySelectorAll(".home_section .about_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal(
      "More About Me",
      "Hi, I am Yash Verma, I'm a passionate Frontend Developer with strong knowledge of HTML, CSS, JavaScript, and I'm learning React. I love creating responsive, user-friendly web applications and aim to become a Full Stack Developer."
    );
  });
});
document.querySelectorAll(".about_section .about_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal(
      "More About Me",
      "Hi, I’m Yash Verma, a passionate Frontend Developer with strong knowledge of HTML, CSS, and JavaScript, and currently learning React. I love creating responsive, interactive, and user-friendly web applications that deliver smooth experiences. 🚀 My goal is to grow into a Full Stack Developer, mastering both frontend and backend technologies to build complete, scalable solutions. ✨ I believe in continuous learning, exploring modern tools, and staying updated with the latest trends in web development."
    );
  });
});

// ================== Learn More Buttons in Services ==================
const serviceDetails = [
  {
    title: "UI/UX Design",
    text: "I create clean, user-friendly, and visually appealing designs that focus on improving user experience. I use modern design principles to make interfaces both functional and beautiful."
  },
  {
    title: "Web Developer",
    text: "I develop responsive and interactive websites using HTML, CSS, and JavaScript. I ensure cross-browser compatibility, performance, and a seamless experience across devices."
  },
  {
    title: "Java DSA Problem Solver",
    text: "I solve coding challenges using Java and have a strong grasp of data structures and algorithms. This helps me write efficient and optimized code for real-world applications."
  }
];

document.querySelectorAll(".services_section .about_btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const { title, text } = serviceDetails[index];
    openModal(title, text);
  });
});

// ================== Social Media & Contact Buttons ==================
const socialLinks = {
  whatsapp: "https://wa.me/919548837949", 
  instagram: "https://www.instagram.com/username/", 
  telegram: "https://web.telegram.org/a/", 
  linkedin: "https://www.linkedin.com/in/chanchal-soni-450a0b263", 
};


document.querySelectorAll(".icon-btn, .social_icons").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    if (!img) return;

    const alt = img.alt.toLowerCase();
    if (socialLinks[alt]) {
      window.open(socialLinks[alt], "_blank");
    }
  });
});