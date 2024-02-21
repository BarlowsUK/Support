// passcode.js
function passcodeprotect() {
    // Check if the passcode flag is set in localStorage
    if (localStorage.getItem('passcodeEntered') === 'true') {
        return; // If passcode already entered, exit the function
    }

    // Make an AJAX request to retrieve the passcode
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var passcode = xhr.responseText.trim();
                var userPasscode = prompt("Enter Passcode");

                while (userPasscode !== passcode) {
                    alert("Incorrect Passcode");
                    userPasscode = prompt("Enter Passcode"); // Ask again for passcode
                }

                // Set the passcode flag in localStorage
                localStorage.setItem('passcodeEntered', 'true');
            } else {
                alert("Failed to retrieve passcode. Please try again later.");
            }
        }
    };
    xhr.open('GET', 'passcode.php', true);
    xhr.send();
}

// Call passcodeprotect function when the page loads
passcodeprotect();

alert('Welcome To Barlows Support!');
