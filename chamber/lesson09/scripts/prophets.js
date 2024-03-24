const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data); // Check data in console, remove/comment out after testing
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayProphets(prophets) {
    console.log(prophets); // Log the prophets array to see its structure
    if (!prophets || prophets.length === 0) {
        console.error('No prophets found in the data.');
        return;
    }
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        
        const fullName = document.createElement('h2');
        // Access the correct properties here based on the structure of each prophet object
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Adjust property names as needed
        
        const portrait = document.createElement('img');
        // Access the correct property for image URL
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');
        
        card.appendChild(fullName);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}

getProphetData(); // Call the function to fetch and display prophet data
