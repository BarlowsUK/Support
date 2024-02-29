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
// Function to filter accordion sections by content
function filterAccordion(evt) {
    let input = evt.target.value.toLowerCase();
    let accordionContents = document.querySelectorAll(".accordion-content");
    accordionContents.forEach((content) => {
        let sectionContent = content.textContent.toLowerCase();
        if (!sectionContent.includes(input)) {
            content.parentElement.classList.add("hidden"); // Hide the entire accordion section
        } else {
            content.parentElement.classList.remove("hidden"); // Show the accordion section
        }
    });
}

// Add event listener to the search input
document.getElementById("searchbar").addEventListener("input", filterAccordion);

// accordion js
document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    item.addEventListener('click', function() {
      // Close all accordion items
      accordionItems.forEach(item => {
        item.classList.remove('active');
        const panel = item.querySelector('.accordion-content');
        panel.style.display = 'none';
      });

      // Open the clicked accordion item
      this.classList.add('active');
      const panel = this.querySelector('.accordion-content');
      panel.style.display = 'block';
    });
  });
});
