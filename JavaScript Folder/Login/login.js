// Select popup elements
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.getElementById("popup-close");

// Function to show the popup with a message
function showPopup(message) {
  popupMessage.textContent = message; // Set the message
  popup.classList.remove("hidden"); // Show the popup
}

// Function to close the popup
popupClose.addEventListener("click", () => {
  popup.classList.add("hidden"); // Hide the popup
});

// Login form logic
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent page refresh

  const userId = document.getElementById("user-id").value.trim();
  const password = document.getElementById("password").value.trim();
  const termsChecked = document.getElementById("terms").checked;

  // Validate input fields
  if (!userId || !password) {
    showPopup("User ID and password are required!");
    return;
  }

  // Validate terms and conditions checkbox
  if (!termsChecked) {
    showPopup("You must agree to the Terms of Service and Privacy Policy.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, password, termsAccepted: termsChecked }),
    });

    const data = await response.json();

    if (response.status === 404) {
      showPopup("User not found! Please check your User ID or Password.");
    } else if (response.status === 401) {
      showPopup("Invalid credentials. Please try again.");
    } else if (response.ok) {
      showPopup("Login successful!");
      setTimeout(() => {
        window.location.href = "/Html Folder/Dashboard.html";
      }, 2000); // Redirect after 2 seconds
    } else {
      showPopup(data.message || "Login failed!");
    }
  } catch (error) {
    console.error("Error:", error);
    showPopup("An error occurred. Please try again.");
  }
});
