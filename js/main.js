

// loader animation

function pageTransition() {
    var tl = gsap.timeline();
    tl.to('ul.lines .line',{duration:.6,scaleX:1,ease:'Power3.out',transformOrigin:'left',stagger:'.2'});
    tl.to('ul.lines .line',{duration:.6,scaleX:0,ease:'Power3.out',transformOrigin:'right',stagger:'.1',delay:.1});
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        },n)
    })
}

barba.init({
    sync:true,
    transitions:[{
        async leave(){
            // const done = this.async();
            pageTransition();
            await delay(1000);
        },
        async enter(data){
            // contentAnimation();
            
            
        },
        async once(data){
            // contentAnimation();
            
        },
        debug:true,
        
    }]
})



// Isotope gallery

