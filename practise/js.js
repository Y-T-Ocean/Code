document.addEventListener('DOMContentLoaded', () => {
        const scrollContainer = document.querySelector('.sub-nav-scroll');
        const leftArrow = document.querySelector('.nav-arrow-left');
        const rightArrow = document.querySelector('.nav-arrow-right');

        // Left arrow click handler
        leftArrow.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        });

        // Right arrow click handler
        rightArrow.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        });
    });