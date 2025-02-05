document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const bioContainer = document.querySelector('.bio-container');

let scrollAmount = 0;
const scrollStep = 1; // Adjust this value for speed

function scrollBio() {
    if (scrollAmount < bioContainer.scrollWidth - bioContainer.clientWidth) {
        scrollAmount += scrollStep;
        bioContainer.scrollLeft = scrollAmount;
    } else {
        scrollAmount = 0; // Reset when reaching the end
    }
}

setInterval(scrollBio, 30); // Adjust the interval for speed


// Handle form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);
    
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thanksm, Your message has been recived! ◕‿↼ We\'ll be in touch soon.');
            contactForm.reset(); // Reset the form fields
        } else {
            alert('Problem with submission ◔̯◔ Please try again, Srry...');
        }
    })
    .catch(error => {
        alert('Problem with submission ◔̯◔ Please try again, Srry...');
        console.error('Error:', error);
    });
});