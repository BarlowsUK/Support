// Function to filter image containers based on search input
function filterLP(evt) {
    let input = evt.target.value.toLowerCase();
    let x = document.querySelectorAll(".image_container");
    x.forEach((item) => {
        let id = item.id.toLowerCase(); // Get the id attribute
        if (!id.includes(input)) {
            item.classList.add("hidden");
        } else {
            item.classList.remove("hidden");
        }
    });
}
// Add event listener to search input
document.getElementById("searchbar").addEventListener("keyup", function(evt) {
    filterPostContainersBySearch(evt.target);
});
    document.addEventListener('DOMContentLoaded', function () {
        const filterButtons = document.querySelectorAll('.filter-button');
        const postContainers = document.querySelectorAll('.facebook-post');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                postContainers.forEach(container => {
                    if (container.getAttribute('data-filter') === filter || filter === 'all') {
                        container.classList.remove('hidden');
                    } else {
                        container.classList.add('hidden');
                    }
                });
            });
        });

document.getElementById('clear-filters-button').addEventListener('click', () => {
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });

    // Clear filters
    postContainers.forEach(container => {
        container.classList.remove('hidden');
    });
});

    });
    // Modified event listener for filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        let filterValue = this.getAttribute('data-filter').toLowerCase(); // Convert to lowercase
        
        // Check if the clicked button is the clear filter button
        if (filterValue !== "clear") {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-button').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to the clicked button
            this.classList.add('active');
        }

        handleFilterClick(filterValue);
    });
});
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
