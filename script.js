document.addEventListener('DOMContentLoaded', () => {

    // 1. Search / Filtering Functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const bookCards = document.querySelectorAll('.book-card');

    function filterBooks() {
        const query = searchInput.value.toLowerCase().trim();

        bookCards.forEach(card => {
            const title = card.getAttribute('data-title');
            const category = card.getAttribute('data-category');

            if (title.includes(query) || category.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event Listeners for Search
    searchInput.addEventListener('keyup', filterBooks);
    searchBtn.addEventListener('click', filterBooks);


    // 2. Newsletter Subscription Validation
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const newsletterMessage = document.getElementById('newsletterMessage');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            showMessage('Please enter an email address.', 'error');
        } else if (!emailRegex.test(emailValue)) {
            showMessage('Please enter a valid email address.', 'error');
        } else {
            showMessage('Welcome to our forest learning community!', 'success');
            emailInput.value = ''; // Reset input field
        }
    });

    function showMessage(msg, type) {
        newsletterMessage.textContent = msg;
        newsletterMessage.className = `message ${type}`;
    }
});

// 3. View Details DOM Interaction Function
function showDetails(bookTitle) {
    alert(`Showing forest library details for: ${bookTitle}`);
}