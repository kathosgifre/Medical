    document.querySelector(".menu-btn").addEventListener("click", () => {
        document.querySelector(".nav-menu").classList.toggle("show");
    });
    ScrollReveal().reveal('.show');
    ScrollReveal().reveal('.news-cards', { delay:500});
    ScrollReveal().reveal('.card-banner-one', { delay:600});
    ScrollReveal().reveal('.card-banner-two', { delay:700});
   
    