const divEl = $('#div1');

const maxWidth = 400;
let currentWidth = 100;

// function animation () {
//     divEl.css('width', ++currentWidth)
//     if (currentWidth < maxWidth) {
//         setTimeout(animation, 16.7)
//     }
// }
// animation();
//

function animation () {
    divEl.css('width', currentWidth+=.1)
    if (currentWidth < maxWidth) {
        window.requestAnimationFrame(animation)
    }
}
animation();

