
// nav-menu gsap animation

var checkbox = document.querySelector('#check');

function navAnimation() {
    if(checkbox.checked == true) {
        gsap.to('.nav-menu',{x:0,duration:.6,delay:.2,ease:Expo.easeOut})
    }else{
        gsap.to('.nav-menu',{x:"100%",duration:.6,ease:Expo.easeOut})
    }
}


