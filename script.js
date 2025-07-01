document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });
    boxes.forEach(box => observer.observe(box));

    const skills = [
        { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
        { name: "Java", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" },
        { name: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
        { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
        { name: "MySQL", icon: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
        { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/64/000000/github.png" },
        { name: "WordPress", icon: "https://img.icons8.com/color/48/000000/wordpress.png" },
        { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
        { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
        { name: "C", icon: "https://img.icons8.com/color/48/000000/c-programming.png" }
    ];

    const skillsContainer = document.getElementById("skillsContainer");

    skills.forEach(skill => {
        const skillBox = document.createElement("div");
        skillBox.classList.add("skill-box");
        skillBox.innerHTML = `
            <img src="${skill.icon}" alt="${skill.name}">
            <span>${skill.name}</span>
        `;
        skillsContainer.appendChild(skillBox);
    });
});

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.querySelector(".toggle-icon");
    icon.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function typeSequence() {
    const h1 = document.querySelector('h1.typing-container');
    const h2 = document.querySelector('h2.typing-container');
    const p = document.querySelector('p.typing-container');

    // Text content for typing
    const h1Text = 'Hi There';
    const h2Text = "I'm Zaheer";
    const pText = 'I am passionate about AI,ML & Cybersecurity';

    function typeWriter(element, text, speed, callback, appendHTML = '') {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.innerHTML += appendHTML;
                if (callback) callback();
            }
        }
        type();
    }

    // Clear all lines initially
    h1.innerHTML = '';
    h2.innerHTML = '';
    p.innerHTML = '';

    // Type lines sequentially
    typeWriter(h1, h1Text, 100, () => {
        typeWriter(h2, h2Text, 100, () => {
            typeWriter(p, pText, 100, () => {
                setTimeout(typeSequence, 1000);
            }, " <span style='color: red; font-weight: bold;'></span>");
        }, " <span style='color: orange;'>Ahmed</span>");
    });
}

window.onload = () => {
    typeSequence();
};