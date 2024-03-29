// Get references to HTML elements
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate QR code
function generateQR() {
    // Check if input text is not empty
    if (qrText.value.length > 0) {
        // Set the source of the QR image using the QR server API
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        // Show the image box
        imgBox.classList.add("show-img");
    } else {
        // If input is empty, add error class and remove it after 1 second
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
