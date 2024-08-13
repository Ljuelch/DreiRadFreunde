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

	// Function to open the modal and disable page scrolling
	function openModal(modalId) {
		const modal = document.getElementById(modalId);
		if (modal) {
			console.log(`Opening modal: ${modalId}`); // Debugging line
			modal.style.display = 'flex'; // Use flex for centering
			overlay.style.display = 'block'; // Show overlay
		} else {
			console.error(`Modal with ID ${modalId} not found.`);
		}
	}

	// Function to close the modal and re-enable page scrolling
	function closeModal() {
		const modals = document.querySelectorAll('.modal');
		modals.forEach(modal => modal.style.display = 'none');
		overlay.style.display = 'none'; // Hide overlay
	}

	// Open modal on box click
	boxes.forEach(box => {
		box.addEventListener('click', () => {
			const modalId = box.getAttribute('data-modal-id');
			openModal(modalId);
		});
	});

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
	window.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') { // 'Escape' is the key name for Esc
			closeModal();
		}
	});
});

