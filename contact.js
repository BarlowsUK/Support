let currentFilter = "barlows"; // Variable to store the currently active filter

// Function to filter post containers based on filter value
function filterPostContainers(filterValue) {
    let x = document.querySelectorAll(".post_container");
    x.forEach((item) => {
        if (!item.classList.contains(filterValue)) {
            item.classList.add("hidden");
        } else {
            item.classList.remove("hidden");
        }
    });
}

// Set default filter to "barlows"
filterPostContainers(currentFilter);

// Function to handle filter button clicks
function handleFilterClick(filterValue) {
    currentFilter = filterValue; // Update current filter
    filterPostContainers(filterValue);
}

// Add event listeners to filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        let filterValue = this.getAttribute('data-filter').toLowerCase(); // Convert to lowercase
        handleFilterClick(filterValue);
    });
});

// Add event listener to clear filters button
document.getElementById('clear-filters-button').addEventListener('click', function() {
    handleFilterClick("barlows"); // Revert to default "barlows" filter
});

// Function to filter post containers based on search input
function filterPostContainersBySearch(input) {
    let searchTerm = input.value.toLowerCase();
    let x = document.querySelectorAll(".post_container");
    x.forEach((item) => {
        let id = item.id.toLowerCase();
        if (!id.includes(searchTerm)) {
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
