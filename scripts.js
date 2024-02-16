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
        let filterValue = this.getAttribute('data-filter');
        let x = document.querySelectorAll(".image_container");
        x.forEach((item) => {
            let id = item.id.toLowerCase(); // Get the id attribute
            if (id !== filterValue.toLowerCase()) {
                item.classList.add("hidden");
            } else {
                item.classList.remove("hidden");
            }
        });
    });
});
