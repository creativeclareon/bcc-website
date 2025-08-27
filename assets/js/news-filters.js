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

    // Function to handle news article redirection (moved from bcc-news.html)
    // This function is called from bcc-news.html when a news card is clicked.
    window.viewNewsArticle = function(title, image, content, date, author, badgeText, badgeClass) {
        const url = `bcc-specific-news.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&content=${encodeURIComponent(content)}&date=${encodeURIComponent(date)}&author=${encodeURIComponent(author)}&badgeText=${encodeURIComponent(badgeText)}&badgeClass=${encodeURIComponent(badgeClass)}`;
        window.location.href = url;
    };

    // Logic for bcc-specific-news.html (moved from inline script)
    if (document.body.id === 'specific-news-page') { // Add an ID to the body of bcc-specific-news.html to identify it
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get('title');
        const image = urlParams.get('image');
        const content = urlParams.get('content');
        const date = urlParams.get('date');
        const author = urlParams.get('author');
        const badgeText = urlParams.get('badgeText');
        const badgeClass = urlParams.get('badgeClass');

        if (title) {
            document.getElementById('article-title').textContent = title;
            document.getElementById('news-title-breadcrumb').textContent = title;
            document.title = `Bago City College | ${title}`;
        }
        if (image) {
            document.getElementById('article-image').src = image;
        }
        if (content) {
            document.getElementById('article-content').innerHTML = content;
        }
        if (date) {
            document.getElementById('article-date').textContent = date;
        }
        if (author) {
            document.getElementById('article-author').textContent = author;
        }

        if (badgeText && badgeClass) {
            const articleBadge = document.getElementById('article-badge');
            articleBadge.textContent = badgeText;
            articleBadge.className = `update-badge specific-news-badge ${badgeClass}`;
        } else {
            document.getElementById('article-badge-container').style.display = 'none';
        }
    }
});
