// Add this JavaScript to make the carousel functional

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const nextBtn = document.querySelector('.next-btn');
    const items = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth + 10; // width + gap
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex + visibleItems >= items.length) {
            // Reset to start if we're at the end
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    });
    
    // Make carousel responsive
    window.addEventListener('resize', function() {
        const newVisibleItems = Math.floor(carousel.offsetWidth / itemWidth);
        if (currentIndex + newVisibleItems > items.length) {
            currentIndex = Math.max(0, items.length - newVisibleItems);
            carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });
});

// Add this JavaScript for the accordion functionality

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});