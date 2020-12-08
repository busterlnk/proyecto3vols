// var azul = document.querySelectorAll('.azul');
// var amarillo = document.querySelectorAll('.amarillo');
// var rojo = document.querySelectorAll('.rojo');
var circle = document.querySelectorAll('.circle');

// azul.forEach(item => {
//     item.addEventListener('click', function grande(e){
//         console.log(azul);
//         item.classList.add('grande');
//         item.classList.remove('circulo');
//         e.currentTarget.removeEventListener(e.type, grande);
//         amarillo.forEach(item => {
//             item.style.display = 'none';
//         });
//         rojo.forEach(item => {
//             item.style.display = 'none';
//         });
//     });
// });

// amarillo.forEach(item => {
//     item.addEventListener('click', function grande(e){
//         console.log(amarillo);
//         item.classList.add('grande');
//         item.classList.remove('circulo');
//         e.currentTarget.removeEventListener(e.type, grande);
//         azul.forEach(item => {
//             item.style.display = 'none';
//         });
//         rojo.forEach(item => {
//             item.style.display = 'none';
//         });
//     });
// });

// rojo.forEach(item => {
//     item.addEventListener('click', function grande(e){
//         console.log(rojo);
//         item.classList.add('grande');
//         item.classList.remove('circulo');
//         e.currentTarget.removeEventListener(e.type, grande);
//         amarillo.forEach(item => {
//             item.style.display = 'none';
//         });
//         azul.forEach(item => {
//             item.style.display = 'none';
//         });
//     });
// });



// var cerrar = document.querySelectorAll('.close');

// cerrar.forEach(item => {
//     item.addEventListener('click', function(){
//         console.log(item);
//         item.parentNode.classList.add('circulo');
//         item.parentNode.classList.remove('grande');
//         circulo.forEach(item => {
//             item.style.display = 'flex';
//             item.style.flexDirection = 'column';
//         });
//     });
// });

circle.forEach(item => {
    item.addEventListener('click', function large(){
        item.classList.toggle('large');
        item.classList.toggle('circle');
    });
});