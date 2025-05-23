document.addEventListener('DOMContentLoaded', function() {
    // Header transparente que aparece ao rolar
    const header = document.querySelector('header'); 

     // Função para verificar a posição de rolagem
    function checkScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Verificar a posição de rolagem ao carregar a página
    checkScroll();

    // Verificar a posição de rolagem ao rolar a página
    window.addEventListener('scroll', checkScroll);


  })

