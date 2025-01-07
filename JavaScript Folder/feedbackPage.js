document.addEventListener("DOMContentLoaded", function () {
    // Handle feedback type change
    document.getElementById('feedback-type').addEventListener('change', function() {
        // Show the sections (rating and comments) by default
        document.getElementById('rating-section').classList.remove('hidden');
        document.getElementById('comments-section').classList.remove('hidden');
        
        // Hide the additional questions section initially
        document.getElementById('additional-questions').classList.add('hidden');
        
        // Show the additional questions section and update the placeholder based on the selected feedback type
        if (this.value === 'customer') {
            document.getElementById('additional-questions').classList.remove('hidden');
            document.getElementById('additional').placeholder = "Product/service-specific questions";
        } else if (this.value === 'employee') {
            document.getElementById('additional-questions').classList.remove('hidden');
            document.getElementById('additional').placeholder = "Suggestions for workplace improvement";
        } else if (this.value === 'ux') {
            document.getElementById('additional-questions').classList.remove('hidden');
            document.getElementById('additional').placeholder = "Feedback on usability, navigation, and features";
        } else if (this.value === 'product') {
            document.getElementById('additional-questions').classList.remove('hidden');
            document.getElementById('additional').placeholder = "Product-specific feedback";
        } else {
            // Hide additional questions for other feedback types
            document.getElementById('additional-questions').classList.add('hidden');
        }
    });

    // Handle form submission and show the Thank You message
    document.getElementById("feedback-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Show the Thank You popup
        const thankYouPopup = document.getElementById("thank-you-message");
        thankYouPopup.classList.add("show");

        // Simulate redirection after 3 seconds
        setTimeout(function() {
            // Redirect to the Home Page after 3 seconds
            window.location.href = "/Html Folder/HomePage.html";
        }, 3000);
    });

    // Optional: Close button (if you want a manual close for the popup)
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("close-btn");
    document.getElementById("thank-you-message").appendChild(closeButton);

    closeButton.addEventListener("click", function () {
        const thankYouPopup = document.getElementById("thank-you-message");
        thankYouPopup.classList.remove("show");
    });
});
