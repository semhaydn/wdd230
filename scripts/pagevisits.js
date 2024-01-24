document.addEventListener('DOMContentLoaded', function () {
    // Check if the 'pageVisits' item exists in local storage
    if (localStorage.getItem('pageVisits') === null) {
        // If not, initialize it with 1
        localStorage.setItem('pageVisits', 1);
    } else {
        // If exists, increment the value
        let visits = parseInt(localStorage.getItem('pageVisits'));
        visits++;
        localStorage.setItem('pageVisits', visits);
    }

    // Display the number of page visits
    displayPageVisits();
});

function displayPageVisits() {
    // Get the current value from local storage
    let visits = localStorage.getItem('pageVisits');

    // Display the value in the page footer
    document.querySelector('#pageVisitsCount').innerText = `Page Visits: ${visits}`;
}
