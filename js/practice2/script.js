//questions
// make a rectangle and when we move left rectangle move left same for right but afer a certain point rectangle stop moving.

var rectangle = document.querySelector('.main');

rectangle.addEventListener('mousemove', function(dets){
    var rectval = rectangle.getBoundingClientRect()
    rectangle.style.left = dets.x + "px";
    // rectangle.style.top = dets.y + "px";

    var leftval =  gsap.utils.mapRange(0, window.innerWidth, 100 + rectval.width/2, window.innerWidth - (100 + rectval.width/2), dets.x)
    // console.log(leftval);

    gsap.to('.main', {
        left: leftval + 'px',
        ease: Power3,
    })
    
})