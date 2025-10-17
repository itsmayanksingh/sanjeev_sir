{/* <div class="request_form_70_overlay" id="requestForm70"> */}
// Show popup after 5 seconds
setTimeout(function() {
  document.getElementById('requestForm70').classList.add('active');
  document.body.style.overflow = 'hidden';
}, 5000);

// Close popup function
function closeRequestForm70() {
  document.getElementById('requestForm70').classList.remove('active');
  document.body.style.overflow = '';
}

// Close on overlay click
document.getElementById('requestForm70').addEventListener('click', function(e) {
  if (e.target === this) {
    closeRequestForm70();
  }
});

// Handle form submission
function handleRequestForm70(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
  closeRequestForm70();
  return false;
}

// Close on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeRequestForm70();
  }
});


// end



// bubbles
// Rising bubbles generator
const wrapper = document.querySelector('.ai-btn-wrapper');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Random horizontal position under the button
  bubble.style.left = Math.random() * 100 + '%';
  
  // Random size for variety
  const size = 4 + Math.random() * 8;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  
  // Random speed for natural effect
  bubble.style.animationDuration = 2 + Math.random() * 2 + 's';

  wrapper.appendChild(bubble);
  
  // Remove after animation ends
  setTimeout(() => bubble.remove(), 4000);
}

// Generate new bubbles continuously
setInterval(createBubble, 200);
{/* end */}