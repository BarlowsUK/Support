var password = "Barlowsfeb";

function passcodeprotect() {
    // Check if the passcode flag is set in localStorage
    if (localStorage.getItem('passcodeEntered') === 'true') {
        return; // If passcode already entered, exit the function
    }

    var passcode = prompt("Enter Passcode");

    while (passcode !== password) {
        alert("Incorrect PassCode");
        passcode = prompt("Enter Passcode"); // Ask again for passcode
    }

    // Set the passcode flag in localStorage
    localStorage.setItem('passcodeEntered', 'true');

    // Show the welcome message
    alert('Welcome To Barlows Support!');
}

// Call passcodeprotect function when the page loads
passcodeprotect();
