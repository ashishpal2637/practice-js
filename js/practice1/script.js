// question 
// make a rectangle. jab rectagle p mouse left ki trf jaye toh red color ki intensity increase ho or jab right ki side jaye toh blue ki intensity increase ho

var rectangle= document.querySelector(".main");

rectangle.addEventListener("mousemove", function(details){
    var rectval = rectangle.getBoundingClientRect();
    // console.log(rectval);
    
    var innerrect = details.clientX-rectval.left
    // console.log(innerrect);

    if(innerrect < rectval.width/2){
        // console.log("left");
        var red =  gsap.utils.mapRange(0, rectval.width/2, 255, 0, innerrect)
        // console.log(red);

        gsap.to('.main', {
            backgroundColor : `rgb(${red}, 0,0)`,
            ease: Power2,
        })
        
    } else{
        // console.log("right");
        var blue =  gsap.utils.mapRange(rectval.width/2, rectval.width, 0, 255, innerrect)
        // console.log(red);

        gsap.to('.main', {
            backgroundColor : `rgb(0, 0, ${blue})`,
            ease: Power2,
        })
        
    }
})

rectangle.addEventListener("mouseleave", function(){
     gsap.to('.main', {
            backgroundColor : "white",
            ease: Power2,
        })
})