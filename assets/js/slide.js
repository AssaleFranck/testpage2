$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4, // Nombre d'icônes à afficher à la fois
        slidesToScroll: 1,
        autoplay: true, // Défilement automatique
        autoplaySpeed: 1500, // Délai entre chaque défilement (en millisecondes)
        infinite: true, // Défilement infini
        prevArrow: false, // Masquer la flèche précédente
        nextArrow: false // Masquer la flèche suivante
    });
});