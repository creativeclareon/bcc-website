document.addEventListener('DOMContentLoaded', function() {
    const filterDropdown = document.getElementById('filterDropdown');
    if (filterDropdown) {
        filterDropdown.addEventListener('click', function(event) {
            // Prevent the dropdown from closing when clicking inside
            event.stopPropagation();
        });

        const dropdownMenu = filterDropdown.nextElementSibling;
        if (dropdownMenu) {
            dropdownMenu.addEventListener('click', function(event) {
                // Prevent the dropdown from closing when clicking on checkboxes or labels
                if (event.target.type === 'checkbox' || event.target.closest('.form-check-input')) {
                    event.stopPropagation();
                }
            });
        }
    }
});
