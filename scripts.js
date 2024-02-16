let currentFilter = "barlows"; // Variable to store the currently active filter

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

// Function to handle filter button clicks
function handleFilterClick(filterValue) {
    currentFilter = filterValue; // Update current filter
    let x = document.querySelectorAll(".image_container");
    x.forEach((item) => {
        let id = item.id.toLowerCase(); // Get the id attribute
        if (id.includes(filterValue)) { // Check if id contains the filter value
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}

// Set default filter to "Barlows"
handleFilterClick("barlows");

// Add event listeners to filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        let filterValue = this.getAttribute('data-filter').toLowerCase(); // Convert to lowercase
        handleFilterClick(filterValue);
    });
});

// Add event listener to clear filters button
document.getElementById('clear-filters-button').addEventListener('click', function() {
    handleFilterClick("barlows"); // Revert to default "Barlows" filter
});

// Add event listener to search input
document.getElementById("searchbar").addEventListener("keyup", filterLP);
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to the clicked button
        this.classList.add('active');

        // Your existing code to handle filtering based on the clicked button
        let filterValue = this.getAttribute('data-filter').toLowerCase();
        handleFilterClick(filterValue);
    });
});

