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

document.addEventListener('DOMContentLoaded', () => {
	const boxes = document.querySelectorAll('.box');
	const overlay = document.querySelector('.modal-overlay');

	// Desktop Links
	const recordLinkDesktop = document.getElementById('recordLink');
	const mixLinkDesktop = document.getElementById('mixLink');
	const masterLinkDesktop = document.getElementById('masterLink');
	const contactLinkDesktop = document.getElementById('contact-nav-link');

	// Mobile Links
	const recordLinkMobile = document.getElementById('recordLinkMobile');
	const mixLinkMobile = document.getElementById('mixLinkMobile');
	const masterLinkMobile = document.getElementById('masterLinkMobile');
	const contactLinkMobile = document.getElementById('contactLinkMobile');

	const targetSection = document.querySelector('.go-to');
	const recordModal = document.getElementById('recordModal');
	const mixModal = document.getElementById('mixModal');
	const masterModal = document.getElementById('masterModal');
	const contactSection = document.getElementById('contactSection');

	// Function to scroll to the section
	function scrollToSection(section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}

	// Function to open the modal
	function openModal(modal) {
		modal.style.display = 'flex';
		overlay.style.display = 'block';
	}

	// Function to handle clicks on Record, Mix, Master
	function handleServiceLinkClick(event, section, modal) {
		event.preventDefault(); // Prevent the default link behavior
		scrollToSection(section);
		openModal(modal);
	}

	// Function to handle the Contact link click
	function handleContactLinkClick(event, section) {
		event.preventDefault(); // Prevent the default link behavior
		scrollToSection(section);
	}

	// Event listeners for desktop links
	recordLinkDesktop.addEventListener('click', (event) => handleServiceLinkClick(event, targetSection, recordModal));
	mixLinkDesktop.addEventListener('click', (event) => handleServiceLinkClick(event, targetSection, mixModal));
	masterLinkDesktop.addEventListener('click', (event) => handleServiceLinkClick(event, targetSection, masterModal));
	contactLinkDesktop.addEventListener('click', (event) => handleContactLinkClick(event, contactSection));

	// Event listeners for mobile links
	recordLinkMobile.addEventListener('click', (event) => handleServiceLinkClick(event, targetSection, recordModal));
	mixLinkMobile.addEventListener('click', (event) => handleServiceLinkClick(event, targetSection, mixModal));
	masterLinkMobile.addEventListener('click', (event) => handleServiceLinkClick(event, targetSection, masterModal));
	contactLinkMobile.addEventListener('click', (event) => handleContactLinkClick(event, contactSection));

	// Function to close the modal and re-enable page scrolling
	function closeModal() {
		const modals = document.querySelectorAll('.modal');
		modals.forEach(modal => modal.style.display = 'none');
		overlay.style.display = 'none'; // Hide overlay
	}

	// Close modal on close button click
	const closeBtns = document.querySelectorAll('.modal .close');
	closeBtns.forEach(closeBtn => {
		closeBtn.addEventListener('click', closeModal);
	});

	// Close modal if clicking outside of it
	window.addEventListener('click', (event) => {
		if (event.target === overlay) {
			closeModal();
		}
	});

	// Close modal if pressing ESC key
	window.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') { // 'Escape' is the key name for Esc
			closeModal();
		}
	});
});

