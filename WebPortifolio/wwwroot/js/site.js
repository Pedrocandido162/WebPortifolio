// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const paragraph = document.getElementById('paragrafo-descricao');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    //const offset = -currentIndex * 100;
    //document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }

        switch (currentIndex) {
            case 0:
                paragraph.innerText = 'Projeto de Game de terror desenvolvido em Unity';
                break;
            case 1:
                paragraph.innerText = 'Primeira pagina Web feita com HTML, CSS e JavaScript';
                break;
            case 2:
                paragraph.innerText = 'Programa para fazer cotação da moeda Brasileira para Dolar e Euro';
                break;
            case 3:
                paragraph.innerText = 'Programa com CRUD para meus conhecimentos com MySQL'
                break;
                
        }

    });
    }
        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
