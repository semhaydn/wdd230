document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector('.sidebar');
  const visitMessage = document.getElementById('visitMessage');

  // Check if localStorage is supported
  if (typeof Storage !== "undefined") {
      // Get the current date in milliseconds
      const currentDate = Date.now();

      // Check if this is the user's first visit
      if (!localStorage.getItem("lastVisit")) {
          visitMessage.textContent = "Welcome! Let us know if you have any questions.";
      } else {
          // Get the last visit date from localStorage
          const lastVisit = parseInt(localStorage.getItem("lastVisit"));

          // Calculate the time difference in milliseconds
          const timeDifference = currentDate - lastVisit;

          // Calculate the number of days
          const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

          // Display appropriate message based on the time difference
          if (daysDifference === 1) {
              visitMessage.textContent = `You last visited 1 day ago.`;
          } else if (daysDifference < 1) {
              visitMessage.textContent = `Back so soon! Awesome!`;
          } else {
              visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
          }
      }

      // Save the current date in localStorage for future visits
      localStorage.setItem("lastVisit", currentDate.toString());
  } else {
      // If localStorage is not supported, provide a fallback message
      visitMessage.textContent = "LocalStorage is not supported on this browser.";
  }
});
