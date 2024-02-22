// Retrieve the current passcode from localStorage
var currentPasscode = localStorage.getItem('passcode') || "Barlowsfeb";

document.getElementById("passcodeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var currentPasscodeInput = document.getElementById("currentPasscode").value;
    var newPasscode = document.getElementById("newPasscode").value;

    if (currentPasscodeInput === currentPasscode) {
        // If the current passcode entered is correct, update the passcode
        localStorage.setItem('passcode', newPasscode);
        alert("Passcode updated successfully!");
        document.getElementById("currentPasscode").value = ""; // Clear current passcode input
        document.getElementById("newPasscode").value = ""; // Clear new passcode input
    } else {
        alert("Incorrect current passcode. Please try again.");
    }
});
