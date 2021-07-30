$(document).ready(function () {

    var music = new Audio();
    music.src = 'music/bgmusic.mp3';
    music.type='audio/mpeg';

    $('html, body').hover(function () {
        music.play();
    });

    $('html, body').click(function () { 
        music.play();
    });

    $('.openbtn').hover(function () { 
        music.play();
    });

    $('.openbtn').click(function () { 
        music.play();
    });
});