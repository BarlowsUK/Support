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