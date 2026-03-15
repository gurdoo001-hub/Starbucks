const mobileBtn = document.querySelector(".btn-mobile");
const navLinks = document.getElementById("nav-links");
const icon = document.querySelector('.btn-mobile i');

if (mobileBtn && navLinks && icon) {
    mobileBtn.addEventListener("click", () => {
        navLinks.classList.toggle('show');
        icon.classList.toggle('fa-times');
        icon.classList.toggle('fa-bars');
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769) {
            navLinks.classList.remove('show');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}