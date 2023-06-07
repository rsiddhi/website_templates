$(document).ready(function() {

    $('nav a.mobile_menu').on('click',function() {

        var currentNavHeight = $('nav').height();

        if( currentNavHeight < 51 ){

            var newNavHeight = ($('nav ul li').length * $('nav ul li').height()) + 50;
            $('nav ul').animate({'height':newNavHeight+'px'}, 750);

        } else {
            $('nav ul').animate({'height':'50px'}, 750, function () {
                $('nav ul').removeAttr('style');
            });
        }

    });

    $(window).resize( function () {
        if( $(this).width() > 770 ) {
            $('nav ul').removeAttr('style');
        }
    } );

});