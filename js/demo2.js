$(document).ready(function() {

    var speed = 3000;

    var timeOut = setInterval(function() {
        let current = $('.active');
        let next = $('.active').next();
        if (next.length == 0)
            next = $('.main-carousel__item:first');
        sangTrai(current, next);
    }, speed);

    function sangTrai(current, next) {
        current.addClass('bienmat').one('webkitAnimationEnd', function() {
            $('.bienmat').removeClass('bienmat');
        });
        next.addClass('divao').one('webkitAnimationEnd', function() {
            $('.active').removeClass('active');
            $('.divao').removeClass('divao');
            next.addClass('active');
        });
    }
});