$(document).ready(function(){
    $(window).scroll(function(){
        // barra de navegação fixa no script de rolagem
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botão de rolagem para cima mostrar / ocultar script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removendo a rolagem suave no botão deslizante
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // aplicando novamente a rolagem suave nos itens do menu
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/script da navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // animação de texto escrevendo
    var typed = new Typed(".typing", {
        strings: ["Arduíno", "Programação", "Automação", "Criação", "Desenvolver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["fascinante.", "desafiador.", "interessante.", "divertido.", "demais."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // script do carrossel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});