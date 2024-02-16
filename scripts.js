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
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        let filterValue = this.getAttribute('data-filter').toLowerCase(); // Convert to lowercase
        let x = document.querySelectorAll(".image_container");
        x.forEach((item) => {
            let id = item.id.toLowerCase(); // Get the id attribute
            if (id.includes(filterValue)) { // Check if id contains the filter value
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    });
});
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove "active" class from all filter buttons
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add "active" class to the clicked button
        this.classList.add('active');

        let filterValue = this.getAttribute('data-filter').toLowerCase(); // Convert to lowercase
        let x = document.querySelectorAll(".image_container");
        x.forEach((item) => {
            let id = item.id.toLowerCase(); // Get the id attribute
            if (id.includes(filterValue)) { // Check if id contains the filter value
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    });
});
