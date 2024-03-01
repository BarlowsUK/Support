var password = "Barlowsmar";
var localStorageKey = 'passcodeEntered';
var expirationDurationMinutes = 60; // Adjust the duration as needed

function passcodeprotect() {
    // Check if the passcode flag is set in localStorage and if it has not expired
    var passcodeEnteredInfo = localStorage.getItem(localStorageKey);
    if (passcodeEnteredInfo) {
        var passcodeInfo = JSON.parse(passcodeEnteredInfo);
        if (passcodeInfo.entered === true && passcodeInfo.expiry > Date.now()) {
            // Passcode already entered and not expired, no need to ask again
            return;
        }
    }

    var passcode = prompt("Enter Passcode");

    while (passcode !== password) {
        alert("Incorrect PassCode");
        passcode = prompt("Enter Passcode"); // Ask again for passcode
    }

    // Calculate expiry timestamp (current time + duration in milliseconds)
    var expiryTimestamp = Date.now() + (expirationDurationMinutes * 60 * 1000);

    // Set the passcode flag and expiry timestamp in localStorage
    var passcodeInfo = {
        entered: true,
        expiry: expiryTimestamp
    };
    localStorage.setItem(localStorageKey, JSON.stringify(passcodeInfo));

    // If passcode is entered correctly for the first time, show the welcome message
    alert('Welcome To Barlows Support!');
}

// Call passcodeprotect function only when the page loads for the first time
if (!localStorage.getItem(localStorageKey)) {
    passcodeprotect();
}
