// getdates.js

document.addEventListener('DOMContentLoaded', function () {
    // Dynamically populate the copyright year
    var currentYear = new Date().getFullYear();
    document.getElementById('currentyear').innerText = currentYear;

    // Dynamically populate the last modified date
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerText = "Last Modified: " + lastModifiedDate;
});
