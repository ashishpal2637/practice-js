var crsr = document.querySelector('.crsr');
var maindiv = document.querySelector('.main');

maindiv.addEventListener('mousemove', function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    
})