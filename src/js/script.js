// BURGERMENU NAV

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  
}))

// FORDELE

document.addEventListener('DOMContentLoaded', function () {
  const benefitLinks = document.querySelectorAll('#benefit-link');

  benefitLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Toggle the active class on the clicked link
      this.classList.toggle('active');
    });
  });
});

// FORDELE OPEN

  document.addEventListener('DOMContentLoaded', () => {
    const benefitLinks = document.querySelectorAll('section#membership li a');
    const benefitContents = document.querySelectorAll('section#membership li p');

    benefitLinks.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const content = benefitContents[index];
        content.classList.toggle('show');
      });
    });
  });


