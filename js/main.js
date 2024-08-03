$(document).ready(()=>{

	$(".go-to").click(()=>
		$('html, body').animate({
			scrollTop: $("#page-content").offset().top
		}, 100)
	)

	$(".go-to-mobile").click(()=>
		$('html, body').animate({
			scrollTop: $("#sec-vid-helper").offset().top
		}, 100)
	)
	
	AOS.init({
		duration: 1100 // global
	})

})