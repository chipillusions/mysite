document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
  document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

 document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("getStartedModal");
  const openBtn = document.querySelector(".hero-btn");
  const closeBtn = modal.querySelector(".close");

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
