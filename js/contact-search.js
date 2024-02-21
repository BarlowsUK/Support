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

