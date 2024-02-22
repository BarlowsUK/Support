var password = "Barlowsfeb";

function passcodeprotect() {
    // Check if the passcode flag is set in localStorage
    if (localStorage.getItem('passcodeEntered') === 'true') {
        // Passcode already entered, no need to ask again
        return;
    }

    var passcode = prompt("Enter Passcode");

    while (passcode !== password) {
        alert("Incorrect PassCode");
        passcode = prompt("Enter Passcode"); // Ask again for passcode
    }

    // Set the passcode flag in localStorage
    localStorage.setItem('passcodeEntered', 'true');

    // If passcode is entered correctly for the first time, show the welcome message
    alert('Welcome To Barlows Support!');
}

// Call passcodeprotect function only when the page loads for the first time
if (!localStorage.getItem('passcodeEntered')) {
    passcodeprotect();
}
