//question 
// image pop out effect

var rectangle = document.querySelector('.rect');

function throttle(fn, delay) {
    let t = 0;
    return function (...args) {
        let now = Date.now();
        if (now - t >= delay) {
            fn.apply(this, args);
            t = now;
        }
    };
}
rectangle.addEventListener('mousemove', throttle((dets) => {
    
    //code
    var div = document.createElement('div');
    div.classList.add('imagediv');
    // console.log(div);
    var img = document.createElement('img');
    img.setAttribute('src', 'https://cdn.pixabay.com/photo/2025/07/13/21/25/wedding-9712800_1280.jpg');
    div.appendChild(img);
    
    document.body.append(div);

    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    // initial state (hidden below)
    gsap.set(img, { y: "100%" });

    gsap.to(img, {
        y: "0%",
        duration: 0.3,
        ease: "power2.out"
    });

    setInterval(() => {
        div.remove();
    }, 1000);

}, 200));