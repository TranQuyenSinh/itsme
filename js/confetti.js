$(document).ready(function() {
  
    var $container = $('.confetti__container');
    var confettiCount = 70;
    var [minSize, maxSize] = [3, 9];
    var [minX, maxX] = [0, $container.outerWidth()];
    var [minDelay, maxDelay] = [0, 3];
    var speeds = ['slow', 'medium', 'fast'];
    
    for (var i = 0; i < confettiCount; i++) {
      var $newConfetti,
          size = generateSize(),
          x = generateX(),
          delay = generateDelay(),
          [red, green, blue] = generateRGB(),
          speed = generateSpeed();
          console.log(x);

      $newConfetti = $('<div class="confetti confetti--' + speeds[speed] + '"></div>');
      $newConfetti.css({
        'background-color': 'rgb(' + red + ', ' + green + ', ' + blue + ')',
        'width': size,
        'height': size,
        'left': x,
        'animationDelay': delay + 's', 
      });
      $container.append($newConfetti);
    }
    
    function generateSize() {
      return parseInt(Math.random() * (maxSize - minSize) + minSize);
    }
    
    function generateX() {
      return parseInt(Math.random() * (maxX - minX) + minX);
    }
    
    function generateDelay() {
      return Math.random() * (maxDelay - minDelay) + minDelay;
    }
    
    function generateRGB() {
      return [parseInt(Math.random() * (255 - 0) + 0),
             parseInt(Math.random() * (255 - 0) + 0),
             parseInt(Math.random() * (255 - 0) + 0)];
    }
    
    function generateSpeed() {
      return parseInt(Math.random() * speeds.length);
    }
  });
  
  /*
      animation-delay: 0.325s;
      background-color: rgb(254, 238, 154);
      */