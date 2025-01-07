document.getElementById("quantity").addEventListener("input", function () {
    // Remove non-numeric characters and ensure the value stays within the range of 1-100
    this.value = this.value.replace(/[^0-9]/g, "");

    // Adjust the value if it's out of the range
    if (this.value < 1) this.value = 1;
    if (this.value > 100) this.value = 100;
});



// Function to change the main image when a thumbnail is clicked
function changeImage(thumbnail) {
    var mainImage = document.getElementById("mainImage"); // Get the main image element
    mainImage.src = thumbnail.src; // Update the source of the main image to the thumbnail's source
}

window.addEventListener("load", () => {
    const similarItems = document.querySelectorAll(".similar-item");
    similarItems.forEach(item => {
        item.classList.add("visible");
    });
});





