const darkModeBtn = document.getElementById("darkMode");
const navbar = document.getElementById('navigator');
const navLinks = document.getElementById('viewLinks');
const menuBtn = document.getElementById("menu");
const aboutContainer = document.getElementById("aboutContainer");
const footerContainer = document.getElementById("footerContainer");
const footerLink = document.getElementById("footerLink");
const borderImg = document.getElementById("borderImg");

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  navbar.classList.toggle('navbar-dark');
  navLinks.classList.toggle('viewLinks-dark');
  aboutContainer.classList.toggle('container-about-dark');
  footerContainer.classList.toggle('footer-container-dark');
  footerLink.classList.toggle('footer-link-dark');
  borderImg.classList.toggle('border-image-dark');
  
  toggleIcon();
  
  const isDarkModeEnabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('isDarkModeEnabled', isDarkModeEnabled);
}

function toggleIcon() {
  if (darkModeBtn.classList.contains("bx-moon")) {
    darkModeBtn.classList.remove("bx-moon");
    darkModeBtn.classList.add("bx-sun");
  } else {
    darkModeBtn.classList.remove("bx-sun");
    darkModeBtn.classList.add("bx-moon");
  }
}

function toggleMenu() {
  navLinks.classList.toggle('menuView');
}

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', toggleDarkMode);
}

if (menuBtn) {
  menuBtn.addEventListener('click', toggleMenu);
}

window.addEventListener('DOMContentLoaded', () => {
  const isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled') === 'true';
  if (isDarkModeEnabled) {
    document.body.classList.add('dark-mode');
    navbar.classList.add('navbar-dark');
    navLinks.classList.add('viewLinks-dark');
    aboutContainer.classList.add('container-about-dark');
    toggleIcon();
  }
});