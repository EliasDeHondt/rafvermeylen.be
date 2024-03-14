/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @since 14/03/2024
 */

var logo = document.getElementById('logo');
var audio = new Audio('/assets/media/audio/funny-giggling.wav');

logo.addEventListener('click', function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var newLeft = Math.floor(Math.random() * (windowWidth - logo.offsetWidth));
    var newTop = Math.floor(Math.random() * (windowHeight - logo.offsetHeight));
    
    var newSize = Math.floor(Math.random() * (500 - 100) + 100); // between 100 and 200
    
    logo.style.position = 'absolute';
    logo.style.left = newLeft + 'px';
    logo.style.top = newTop + 'px';
    logo.style.width = newSize + 'px';
    
    audio.play();
});
