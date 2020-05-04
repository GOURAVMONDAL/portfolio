
// nav-menu gsap animation

var checkbox = document.querySelector('#check');

function navAnimation() {
    if(checkbox.checked == true) {
        gsap.to('.nav-menu',{x:0,duration:.6,delay:.2,ease:Expo.easeOut})
    }else{
        gsap.to('.nav-menu',{x:"100%",duration:.6,ease:Expo.easeOut})
    }
}

function loadAnimation(){
    gsap.to('.lines .line',{scaleX:1,transformOrigin:'left',duration:.5,stagger:.1})
    gsap.to('.lines .line',{scaleX:0,transformOrigin:'right',duration:.5,stagger:.2,delay:1})
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        },n);
    });
}

barba.init({
    sync:true,
    views:[{
        namespace:'home',
        async beforeLeave(data){
            
            loadAnimation();
            await delay(1300);
        },
        beforeEnter(data){
            new Typed('.typing', {
                strings: ['Web Designer', 'Web Developer','Freelancer'],
                autoStart: true,
                loop:true,
                typeSpeed:100,
                backSpeed:100,
            
              });
        },
        before(data){
            new Typed('.typing', {
                strings: ['Web Designer', 'Web Developer','Freelancer'],
                autoStart: true,
                loop:true,
                typeSpeed:100,
                backSpeed:100,
            
              });
        }
    },{
        namespace:'contact',
        async beforeLeave(data){
            loadAnimation();
            await delay(1300);
        }
    },{
        namespace:'portfolio',
        async beforeLeave(data){
            loadAnimation();
            await delay(1300);
        },
        beforeEnter(data){
            $('.grid').isotope();
            $('.portfolio-filter').on('click','li',function(){
                var filterValue = $(this).attr('data-filter');
                $('.grid').isotope({filter:filterValue});
            })
            
            $('.portfolio-filter ul li').on('click',function() {
                $('.portfolio-filter ul li').removeClass('active');
                $(this).addClass('active');
            })
        }
    }]
})