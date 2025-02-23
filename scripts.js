document.addEventListener('mousemove', (e) => {
    const lavenderPattern = document.createElement('div');
    lavenderPattern.className = 'lavender-pattern';
    lavenderPattern.style.left = `${e.pageX}px`;
    lavenderPattern.style.top = `${e.pageY}px`;
    document.body.appendChild(lavenderPattern);

    setTimeout(() => {
        lavenderPattern.remove();
    }, 50);
});

// Additional JavaScript for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Additional JavaScript to enhance hover effects
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
        skill.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});

document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});