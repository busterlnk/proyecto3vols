$(document).ready(function(){
    $('.circulo').on('mouseenter', function ampliated(){
        $(this).animate({
            width: '175px',
            height: '175px',
            fontSize: '21px'
        });
    });
    
    $('.circulo').on('mouseleave', function normal(){
        $(this).animate({
            width: '150px',
            height: '150px',
            fontSize: '18px'
        });
        $(this).css({
            position: 'relative',
            borderRadius: '100%',
            overflow: 'auto'
        });
        $(this).siblings().show();
    });
    $('.circulo').on('click', function selected(){
        $(this).siblings().hide(); 
        $(this).animate({
            width: '100%',
            height: '300px',
            borderRadius: '2%'
        });
        $(this).css({
            opacity: '1'
        });
        $(this).parent().css({
            width: '80%',
            height: '100%',
            overflow: 'hidden'
        });
        $(this).children('.close').show();
        $(this).children('.descript').show();
        $(this).children('.descript').css({
            padding: '30px'
        });
        $(this).off('mouseleave');
        $(this).off('mouseenter');
        $(this).off('click');
    });
    $('.cross').on('click', function(){
        $('.circulo').animate({
            width: '150px',
            height: '150px',
            fontSize: '18px'
        });
        $('.circulo').css({
            position: 'relative',
            borderRadius: '100%',
            overflow: 'hidden'
        });
        $('.circulo').siblings().show();
        $('.circulo').children('.descript').hide();
        $('.circulo').children('.close').hide();
            
    });
    
});