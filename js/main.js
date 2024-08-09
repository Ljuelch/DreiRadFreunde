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

document.addEventListener("DOMContentLoaded", function() {
	const dividerSection = document.querySelector('.divider');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				dividerSection.classList.add('divider-animated');
			}
		});
	});

	observer.observe(dividerSection);
});