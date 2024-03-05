 // Function to filter contact list by ID
    function filterLP(evt) {
        let input = evt.target.value.toLowerCase();
        let contacts = document.querySelectorAll(".contact");
        contacts.forEach((contact) => {
            let id = contact.id.toLowerCase();
            if (!id.includes(input)) {
                contact.classList.add("hidden"); // Add hidden class to hide the entire contact row
            } else {
                contact.classList.remove("hidden"); // Remove hidden class to display the contact row
            }
        });
    }

    // Add event listener to the search input
    document.getElementById("searchInput").addEventListener("input", filterLP);

// Function to filter contact list by ID
    function filterLP(evt) {
        let input = evt.target.value.toLowerCase();
        let contacts = document.querySelectorAll(".main-contact");
        contacts.forEach((contact) => {
            let id = contact.id.toLowerCase();
            if (!id.includes(input)) {
                contact.classList.add("hidden"); // Add hidden class to hide the entire contact row
            } else {
                contact.classList.remove("hidden"); // Remove hidden class to display the contact row
            }
        });
    }

    // Add event listener to the search input
    document.getElementById("searchInput").addEventListener("input", filterLP);

// Function to filter contact list by accordion
    function filterLP(evt) {
        let input = evt.target.value.toLowerCase();
        let contacts = document.querySelectorAll(".buk-accordion-item");
        contacts.forEach((contact) => {
            let id = contact.id.toLowerCase();
            if (!id.includes(input)) {
                contact.classList.add("hidden"); // Add hidden class to hide the entire contact row
            } else {
                contact.classList.remove("hidden"); // Remove hidden class to display the contact row
            }
        });
    }

    // Add event listener to the search input
    document.getElementById("searchInput").addEventListener("input", filterLP);

// Function to filter contact list by clients
    function filterLP(evt) {
        let input = evt.target.value.toLowerCase();
        let contacts = document.querySelectorAll(".image_container");
        contacts.forEach((contact) => {
            let id = contact.id.toLowerCase();
            if (!id.includes(input)) {
                contact.classList.add("hidden"); // Add hidden class to hide the entire contact row
            } else {
                contact.classList.remove("hidden"); // Remove hidden class to display the contact row
            }
        });
    }

    // Add event listener to the search input
    document.getElementById("searchInput").addEventListener("input", filterLP);

