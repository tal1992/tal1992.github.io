$(document).ready(function(){
    var lazyBackground = $('.lazyloadit') ;
    lazyBackground.each(function(i, obj){
        var replace = this.getAttribute('data-src');
        $(this).css({'background-image':replace}) ;
    });
    
    var lazyloadimage = $('.lazyloadimage');
    lazyloadimage.each(function(i, obj){
        var rep = this.getAttribute('data-src');
        $(this).attr('src',rep);
    })
});