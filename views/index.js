// import Swup from 'swup';

var bg =  document.querySelector(".back_gr");
var btu = document.querySelector(".btu_btu")

// To-top Button
window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            bg.classList.add("new_bg")
            btu.classList.add("btu_btu_new")
        } else {
            bg.classList.remove("new_bg")  
            btu.classList.remove("btu_btu_new")          
        }

    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

// var menu_btu = document.querySelector(".menu");

var menu = document.querySelector(".menu");
var menu_menu = document.querySelector(".menu_ct");
var ismenu = true;

function menuopen(){
    menu.classList.toggle("new_menu")
    menu_menu.classList.toggle("new_menu_ct")
    if (ismenu){
        document.querySelector("body").style.overflowY = "hidden";
        ismenu = false
    } else {
        document.querySelector("body").style.overflowY = "visible";
        ismenu= true
    }
};

// const swup = new Swup();

barba.Dispatcher.on('newPageReady', function(currentStatus, prevStatus) {
    $('body a[href*="app.dev"]').each(function() {
      $(this).attr('href', $(this).attr('href').replace('app.dev', 'localhost:3000'))
    })
  })

function contentAnimation(){
    var ti = gsap.timeline();
    ti.from('.left', {
        duration: 1.5, translateY: 50, opacity: 0
    })
    ti.to('.left', {
        duration: 1.5, translateY: 50, opacity: 0
    })

}


function delay(n) {
    n = n || 2000;
    return new Promise ((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition(){
    var ti = gsap.timeline();

    ti.to(".transition li", {
        duration: .5, 
        scaleY: 1, 
        transformOrigin: "bottom left", 
        stagger: .2
    });
    ti.to(".transition li", {
        duration: .5, 
        scaleY: 0, 
        transformOrigin: "bottom left", 
        stagger: .1, 
        delay: .5
    })

    ti.set(".transition", {
        left: "-100"
    })
}

$(function(){
    barba.init({
    
        sync: true, 
    
        transitions: [{
            async leave(date){ 
                const done = this.async();
    
                pageTransition();
                await delay(1500);
                done();
    
            },
            async enter(data){
                contenetAnimation();
            },
            async once(data){
                contenetAnimation();
            }
        }]
    })

})
