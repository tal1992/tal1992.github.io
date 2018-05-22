$(document).ready(function(){
    var a= document.createElement("script");
    a.type = "text/javascript";
    a.src = "js/amcharts.js";
    $("head").append(a);

    var b = document.createElement("script");
    b.type = "text/javascript";
    b.src = "js/serial.js";
    $("head").append(b);

    var c = document.createElement("script");
    c.type = "text/javascript";
    c.src = "https://www.amcharts.com/lib/3/plugins/export/export.min.js";
    $("head").append(c);

    var d = document.createElement("script");
    d.type = "text/javascript";
    d.src = "https://www.amcharts.com/lib/3/themes/light.js";
    $("head").append(d);

    var f = document.createElement("script");
    f.type = "text/javascript";
    f.src = "js/index.js";
    $("head").append(f);

});
