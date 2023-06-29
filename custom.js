var currentPageUrl = window.location.href;

var nav_links = document.querySelectorAll('.nav-link');
nav_links.forEach(function(link){

	if(link.href === currentPageUrl){
		link.classList.add('nav-link-active');
	}

});

// FORM SUBMISSION
window.onload = function(){
	const form = document.querySelector('form');
	form.addEventListener('submit',
		function(event){
			event.preventDefault();
			window.location.href = "thanks.html";
		});
}

// GSAP TYPEWRITER ANIMATION
const words = ["Your Frontend Developer.", "Your Flutter Developer."]
let cursor = gsap.to('.cursor', {opacity: 0,
 ease:"power2.inOut",
  repeat: -1}
  )

let boxTL = gsap.timeline();
boxTL.to('.box', {duration: 1, width: "25vw", ease: "power4.inOut"})
.from('.hey', {duration: 1, y: "9vw", ease: "power3.out", onComplete: ()=> masterTL.play()})
.to('.box', {duration: 1, height: "10vw", ease: "elastic.out"})
.to('.box', {duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1, ease: "rough({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})

let masterTL = gsap.timeline({repeat: -1}).pause()
words.forEach(
	word => { 
		let tl = gsap.timeline({repeat:1, yoyo: true, repeatDelay: 1})
		tl.to('.text', {duration: 1, text: word})
		masterTL.add(tl)
	})

// MEDIA QUERY CHECK
const mediaQuery = window.matchMedia('(max-width: 995px)');
const mediaQueryChange = (mq) =>{
	if (mq.matches){
		boxTL.to('.box', {width: "40vw"});
		
	}else{
		boxTL.to('.box', {duration: 1, width: "20vw", ease: "power4.inOut"});
	}
}

mediaQueryChange(mediaQuery);
mediaQuery.addListener(mediaQueryChange);

let tl = gsap.timeline();
tl.from('.snippet', {duration: 0.75, y:150, x: 150, autoAlpha: 0, ease: Power3.out, stagger: 1.5});
