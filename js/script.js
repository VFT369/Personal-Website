document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior:'smooth'
          });
     });
});

const bioContainer = document.querySelector('.bio-container');

let scrollAmount = 0;
const scrollStep = .5;

function scrollBio() {
     if (scrollAmount<bioContainer.scrollWidth-bioContainer.clientWidth) {
          scrollAmount += scrollStep;
          bioContainer.scrollLeft = scrollAmount;
     } else {
          scrollAmount = .5; // Reset when reaching the end
     }
}

setInterval(scrollBio,30);

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
     e.preventDefault(); // Prevent default form submission

     const formData = new FormData(contactForm);

     fetch(contactForm.action,{
          method:'POST',
          body :formData,
          headers:{
               'Accept':'application/json'
          }
     })
     .then(response => response.ok ? alert('Thanks! Your message has been received! ◕‿↼ We\'ll be in touch soon.') : alert('Problem with submission ◔̯◔ Please try again...'))
     .catch(error => alert('Problem with submission ◔̯◔ Please try again...'));
});
