// Smooth section reveal & progress bars
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-skill');
    bar.style.width = value;
  });
}

const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      showProgress();
      observer.unobserve(skillsSection);
    }
  });
}, { threshold: 0.35 });
observer.observe(skillsSection);

// for close menu on click link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    let menu = document.querySelector(".navbar-collapse");
    if (menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).toggle();
    }
  });
});


document.getElementById('year').innerText = new Date().getFullYear();
