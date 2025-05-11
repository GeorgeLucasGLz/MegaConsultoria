const myObserver = new IntersectionObserver((entries) => {


    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            if (entry.target.classList.contains('leftSlide')) {
                entry.target.classList.add('showLeft')
            } else if (entry.target.classList.contains('topSlide')) {
                entry.target.classList.add('showTop')
            } else if (entry.target.classList.contains('rightSlide')) {
                entry.target.classList.add('showRight')
            } else if (entry.target.classList.contains('topSlideRetard')) {
                entry.target.classList.add('showTopRetard')
            } else if (entry.target.classList.contains('bottomSlide')) {
                entry.target.classList.add('showBottom')
            }

        } else {

            entry.target.classList.remove('showLeft', 'showTop', 'showRight', 'showTopRetard, showBottom');

        }
    })
})

const elementsVisibility = document.querySelectorAll('.hidden-box')
elementsVisibility.forEach((element) => myObserver.observe(element))


// Adicione este código ao arquivo scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Código de scroll (o que já adicionamos acima)
    
    // Menu hambúrguer
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
});

 // Script para atualizar o ano automaticamente
 document.getElementById('currentYear').textContent = new Date().getFullYear();
    
 // Script para mostrar/ocultar o botão "Back to Top"
 window.addEventListener('scroll', function() {
     const backToTop = document.querySelector('.back-to-top');
     if (window.pageYOffset > 300) {
         backToTop.classList.add('show');
     } else {
         backToTop.classList.remove('show');
     }
 });


 document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você adicionaria o código para processar o formulário via AJAX
    
    // Exemplo simplificado de simulação de envio
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
    
    // Resetar o formulário após 5 segundos
    setTimeout(function() {
        document.getElementById('contactForm').reset();
        document.getElementById('contactForm').style.display = 'block';
        document.getElementById('form-success').style.display = 'none';
    }, 5000);
});

/* Script para mostrar/esconder botão Back to Top */
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Atualizar o ano atual no copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
