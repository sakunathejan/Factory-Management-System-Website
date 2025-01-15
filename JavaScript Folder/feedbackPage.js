document.addEventListener("DOMContentLoaded", function () {
    // Handle feedback type change
    let feedbackType = document.getElementById("feedback-type");
    let ratingSection = document.getElementById("rating-section");
    let commentsSection = document.getElementById("comments-section");
    let additionalQuestions = document.getElementById("additional-questions");
    let additionalInput = document.getElementById("additional");

    feedbackType.addEventListener("change", function () {
        // Show rating and comments sections by default
        ratingSection.style.display = "block";
        commentsSection.style.display = "block";

        // Hide additional questions initially
        additionalQuestions.style.display = "none";

        // Show additional questions and update the placeholder based on feedback type
        if (feedbackType.value === "customer") 
        {
            additionalQuestions.style.display = "block";
            additionalInput.placeholder = "Product/service-specific questions";
        } 
        else if (feedbackType.value === "employee") 
        {
            additionalQuestions.style.display = "block";
            additionalInput.placeholder = "Suggestions for workplace improvement";
        } 
        else if (feedbackType.value === "ux") 
        {
            additionalQuestions.style.display = "block";
            additionalInput.placeholder = "Feedback on usability, navigation, and features";
        } 
        else if (feedbackType.value === "product") 
        {
            additionalQuestions.style.display = "block";
            additionalInput.placeholder = "Product-specific feedback";
        }
    });

    // Handle form submission
    let feedbackForm = document.getElementById("feedback-form");
    let thankYouMessage = document.getElementById("thank-you-message");

    feedbackForm.addEventListener("submit", function (event) 
    {
        event.preventDefault(); // Prevent actual form submission

        // Show the Thank You popup
        thankYouMessage.style.display = "block";

        // Redirect to Home Page after 3 seconds
        setTimeout(function () {
            window.location.href = "/Html Folder/HomePage.html";
        }, 2000);
    });

    // Optional: Close button (if you want a manual close for the popup)
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("close-btn");
    document.getElementById("thank-you-message").appendChild(closeButton);

    closeButton.addEventListener("click", function () 
    {
        const thankYouPopup = document.getElementById("thank-you-message");
        thankYouPopup.classList.remove("show");
    });
});
