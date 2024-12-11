window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            box.style.transform = 'translateY(100px)'; // Move downwards
        } else {
            box.style.transform = 'translateY(0)'; // Reset position
        }
    });
});
