// getdates.js

document.addEventListener('DOMContentLoaded', function () {
    // Dynamically populate the copyright year
    var currentYear = new Date().getFullYear();
    document.getElementById('currentyear').innerText = currentYear;

    // Dynamically populate the last modified date
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerText = "Last Modified: " + lastModifiedDate;
});

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

function toggleMenu() {
    var menu = document.querySelector('.menu-list');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}
