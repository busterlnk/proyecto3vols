$(document).ready(function(){
    $('.circulo').on('mouseenter', function(){
        $(this).animate({
            width: '175px',
            height: '175px',
            fontSize: '21px'
        });
    });
    
    $('.circulo').on('click', function(){
        $(this).siblings().hide(); 
        $(this).animate({
            width: '100%',
            height: '300px',
            borderRadius: '2%'
        });
        $(this).parent().css({
            width: '80%',
            height: '100%'
        });
        $(this).children('.descript').show();
        $(this).children('.descript').css({
            padding: '30px'
        });
    });

    $('.circulo').on('mouseleave', function(){
        $(this).animate({
            width: '150px',
            height: '150px',
            fontSize: '18px'
        });
        $(this).css({
            position: 'relative',
            borderRadius: '100%'
        });
        $(this).siblings().show();
        $(this).children('.descript').hide();
    });
});