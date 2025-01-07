// JavaScript to move the soap cursor and add bubble effects
document.addEventListener('mousemove', function(e) {
    const soapCursor = document.querySelector('.soap-cursor');
    soapCursor.style.left = `${e.pageX}px`;
    soapCursor.style.top = `${e.pageY}px`;
    
    // Create a new bubble when the mouse moves
    const bubble = document.createElement('div');
    bubble.classList.add('soap-bubble');
    document.body.appendChild(bubble);
    
    // Set bubble position
    bubble.style.left = `${e.pageX}px`;
    bubble.style.top = `${e.pageY}px`;
    
    // Remove the bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 1500);
});

// Adding soap cursor element
document.body.innerHTML += '<div class="soap-cursor"></div>';
