document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// You can add more JavaScript functionality here as needed


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
