
    var lazyBackground = document.getElementsByClassName('lazyloadit'); 
        [].forEach.call(lazyBackground, function (key, value) {
        var replace = key.getAttribute('data-src');
        key.style.backgroundImage = replace;
    });
    
    var lazyloadimage = document.getElementsByClassName('lazyloadimage');
        [].forEach.call(lazyloadimage, function (key, value) {        
        var rep = key.getAttribute('data-src');
        key.src = rep;
    });
