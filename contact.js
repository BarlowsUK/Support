document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function() {
            let filterValue = this.getAttribute('data-filter').toLowerCase();
            let x = document.querySelectorAll(".facebook-post");
            x.forEach((item) => {
                let id = item.id.toLowerCase();
                if (id.includes(filterValue)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });

    document.getElementById('clear-filters-button').addEventListener('click', function() {
        let x = document.querySelectorAll(".facebook-post");
        x.forEach((item) => {
            item.classList.remove("hidden");
        });
    });
});
