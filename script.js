// Responsive menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Fake form submit handler
function showToast() {
  const toast = document.getElementById("toast");
  toast.style.visibility = "visible";
  toast.style.opacity = 1;

  setTimeout(() => {
    toast.style.visibility = "hidden";
    toast.style.opacity = 0;
  }, 3000);
}
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks for your message!");
  e.target.reset();
});

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Web Developer", "Cybersecurity Enthusiast", "UI Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const displayed = currentWord.substring(0, charIndex);
  typedText.textContent = displayed;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active states
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((tab) => tab.classList.remove("active"));

    // Add active to clicked button and its tab
    button.classList.add("active");
    const target = document.getElementById(button.dataset.tab);
    target.classList.add("active");
  });
});

const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // Toggle icon
  const icon = themeToggleBtn.querySelector("i");
  if (document.body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100; // offset for header height
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.add("active");
    } else {
      document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.remove("active");
    }
  });
});

const skillFills = document.querySelectorAll(".skill .fill");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("data-width");
    } else {
      entry.target.style.width = "0";
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(fill => {
  fill.style.width = "0";
  observer.observe(fill);
});

