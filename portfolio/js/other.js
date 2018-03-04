$(document).ready(function(e){
    //$('.pg-loading').hide();
    $('.cntl').cntl({
        revealbefore: 300,
        anim_class: 'cntl-animate',
        onreveal: function(e){
        }
    });


//utility plugin
    (function(e){function m(){var b=window.innerHeight;if(b)return b;var f=document.compatMode;if(f||!e.support.boxModel)b="CSS1Compat"===f?document.documentElement.clientHeight:document.body.clientHeight;return b}var n=function(b,f){function e(){null!==a?c=!0:(c=!1,b(),a=setTimeout(function(){a=null;c&&e()},f))}var c=!1,a=null;return e}(function(){var b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f=b+m(),g=[];e.each(e.cache,function(){this.events&&this.events.inview&&
    g.push(this.handle.elem)});e(g).each(function(){var c=e(this),a;a=0;for(var d=this;d;d=d.offsetParent)a+=d.offsetTop;var d=c.height(),k=a+d,d=c.data("inview")||!1,h=c.data("offset")||0,g=a>b&&k<f,l=k+h>b&&a<b,h=a-h<f&&k>f;g||l||h||a<b&&k>f?(a=h?"top":l?"bottom":"both",d&&d===a||(c.data("inview",a),c.trigger("inview",[!0,a]))):!g&&d&&(c.data("inview",!1),c.trigger("inview",[!1]))})},100);e(window).on("checkInView.inview click.inview ready.inview scroll.inview resize.inview",n)})(jQuery);


    $(document).on('click','.skillCatch',function(e){
        $('.fixedNav li').removeClass('activeFixed');
        $('.fixedNav li:nth-child(2)').addClass('activeFixed');
        location.href="#chartdiv";
        e.preventDefault();
    });

    $('.padOnHover').bind('inview', function (event, visible, topOrBottomOrBoth) {
        if (visible == true) {
            if (topOrBottomOrBoth == 'top') {
                // top part of element is visible
                $(this).find('.showDivEase').removeClass('pulse animated');
            } else if (topOrBottomOrBoth == 'bottom') {
                // bottom part of element is visible
                $(this).find('.showDivEase').removeClass('pulse animated');
            } else {
                // whole part of element is visible
                $(this).addClass('flipInX animated');
                $(this).find('.showDivEase').addClass('blackTrans').addClass('pulse animated');
                setTimeout(function(){ $(this).find('.showDivEase').removeClass('blackTrans').removeClass('pulse animated'); }, 2000);
            }
        } else {
            //$(this).removeClass('bounceInDown animated')
            $(this).find('.showDivEase').removeClass('blackTrans').removeClass('pulse animated');
        }
    });



    $('.pageTitle').bind('inview', function (event, visible, topOrBottomOrBoth) {
        if (visible == true) {
            if (topOrBottomOrBoth == 'top') {
                // top part of element is visible
                $('.fixedNav').removeClass('fadeOut animated');
            } else if (topOrBottomOrBoth == 'bottom') {
                // bottom part of element is visible
                $('.fixedNav').removeClass('fadeOut animated');
            } else {
                // whole part of element is visible
                $('.fixedNav').removeClass('fadeOut animated');
            }
        } else {
            $('.fixedNav').addClass('fadeIn animated');
        }
    });

    $('.cntl').bind('inview', function (event, visible, topOrBottomOrBoth) {
        if (visible == true) {

            $('.fixedNav li').removeClass('activeFixed');
            $('.fixedNav li:nth-child(1)').addClass('activeFixed');
        } else {
        }
    });

    $('.chartdiv').bind('inview', function (event, visible, topOrBottomOrBoth) {
        //alert($('#chartdiv').css('overflow'));
        $('.fixedNav li').removeClass('activeFixed');
        $('.fixedNav li:nth-child(2)').addClass('activeFixed');

        if (visible == true && !$(this).hasClass('animated')) {
            $(this).addClass('animated');

            var chart = AmCharts.makeChart("chartdiv", {
                "theme": "light",
                "type": "serial",
                "startDuration": 3,
                "dataProvider": [{
                    "skill": "HTML",
                    "visits": 98,
                    "color": "#FF0F00"
                }, {
                    "skill": "CSS",
                    "visits": 95,
                    "color": "#FF6600"
                }, {
                    "skill": "Javascript",
                    "visits": 90,
                    "color": "#FF9E01"
                }, {
                    "skill": "Jquery",
                    "visits": 88,
                    "color": "#FCD202"
                }, {
                    "skill": "Bootstrap",
                    "visits": 90,
                    "color": "#F8FF01"
                }, {
                    "skill": "ES6",
                    "visits": 85,
                    "color": "#B0DE09"
                },{
                    "skill": "Material Design",
                    "visits": 80,
                    "color": "#DDDDDD"
                },{
                    "skill": "SCSS",
                    "visits": 80,
                    "color": "#0D52D1"
                },{
                    "skill": "Reactjs",
                    "visits": 75,
                    "color": "#04D215"
                },{
                    "skill": "Git",
                    "visits": 80,
                    "color": "#8A0CCF"
                },{
                    "skill": "PWA",
                    "visits": 75,
                    "color": "#8c7f98"
                },{
                    "skill": "Chrome Extensions",
                    "visits": 75,
                    "color": "#d69ab4"
                }, {
                    "skill": "SQL",
                    "visits": 60,
                    "color": "#CD0D74"
                }, {
                    "skill": "PHP",
                    "visits": 60,
                    "color": "#754DEB"
                }, {
                    "skill": "Angular 2/4",
                    "visits": 50,
                    "color": "#0D8ECF"
                }],
                "valueAxes": [{
                    "position": "left",
                    "axisAlpha":0,
                    "gridAlpha":0
                }],
                "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "colorField": "color",
                    "fillAlphas": 0.85,
                    "lineAlpha": 0.1,
                    "type": "column",
                    "topRadius":1,
                    "valueField": "visits"
                }],
                "depth3D": 30,
                "angle": 50,
                "chartCursor": {
                    "categoryBalloonEnabled": false,
                    "cursorAlpha": 0,
                    "zoomable": false
                },
                "categoryField": "skill",
                "categoryAxis": {
                    "gridPosition": "start",
                    "axisAlpha":0,
                    "gridAlpha":0

                },
                "export": {
                    "enabled": true
                }

            }, 0);
        }
    });

    $('#gradient2').bind('inview', function (event, visible, topOrBottomOrBoth) {
        if (visible == true) {

            $('.fixedNav li').removeClass('activeFixed');
            $('.fixedNav li:nth-child(3)').addClass('activeFixed');
        } else {
        }
    });

    $('.footer').bind('inview', function (event, visible, topOrBottomOrBoth) {
        if (visible == true) {
            $('.fixedNav li').removeClass('activeFixed');
            $('.fixedNav li:nth-child(4)').addClass('activeFixed');
        } else {
        }
    });


    $('.compinfo').show()

    $('.navbar-nav>li').mouseover(function(){
        $(this).addClass('doTra');
    });

});

$(window).load(function(){
    $('.pg-loading').addClass('fadeOut animated');
    $('.pg-loading').hide();
    $('.user-icon').addClass(' zoomIn animated');
    $('.userInfo').addClass(' zoomIn animated');
    setTimeout(function(){ $('.extra').addClass('fadeInLeftBig animated'); }, 1000);
    setTimeout(function(){ $('.extra').removeClass('fadeInLeftBig animated').addClass('pulse animated'); }, 2000);
    setTimeout(function(){ $('.pageTitle>div').addClass('slideInDown animated'); }, 3500);
    setTimeout(function(){ $('.intro_list').addClass('zoomIn animated'); }, 5000);
    setTimeout(function(){ $('#portfolio-button').addClass('flipInX animated'); }, 6500);
    setTimeout(function(){ $('#bigDown').addClass('fadeOutDown animated'); }, 8000);

    var lazyload = document.getElementsByClassName('lazy');
    [].forEach.call(lazyload, function (key, value) {
        key.src = key.getAttribute('data-src');
    });

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-89678967-2', 'auto');
    ga('send', 'pageview');

});