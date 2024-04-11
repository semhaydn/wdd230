const rentalDataUrl = 'data/rentals.json'; 
const rentalTable = document.getElementById('rental-table');

function fetchRentalData() {
  fetch(rentalDataUrl)
    .then(response => response.json())
    .then(data => {
      buildRentalTable(data);
    })
    .catch(error => console.error('Error fetching rental data:', error));
}

function buildRentalTable(rentalData) {
  let tableHTML = `
    <thead>
      <tr>
        <th>Rental Type</th>
        <th>Max. Persons</th>
        <th>Half Day (3 hrs) - Walk In</th>
        <th>Full Day - Walk In</th>
        <th>Half Day (3 hrs) - Reservation</th>
        <th>Full Day - Reservation</th> 
      </tr>
    </thead>
    <tbody>`;

  rentalData.forEach(rental => {
    tableHTML += `
      <tr>
        <td>${rental.rentalType}</td>
        <td>${rental.maxPersons}</td>
        <td>$${rental.pricing.halfDayWalkIn}</td>
        <td>$${rental.pricing.fullDayWalkIn}</td>
        <td>$${rental.pricing.halfDayReservation}</td>
        <td>$${rental.pricing.fullDayReservation}</td>
      </tr>
    `;
  });

  tableHTML += `</tbody>`;
  rentalTable.innerHTML = tableHTML; 
}

// Fetch the data when the page loads
fetchRentalData();
