const baseURL = "https://semhaydn.github.io/wdd230/";
const linksURL = "https://semhaydn.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(data) {
  const lessons = data.lessons;
  const linksContainer = document.querySelector('#links');

  lessons.forEach(week => {
    const weekHeader = document.createElement('h2');
    weekHeader.textContent = `Week ${week.lesson}`;
    linksContainer.appendChild(weekHeader);

    const lessonList = document.createElement('ul');
    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      lessonList.appendChild(listItem);
    });

    linksContainer.appendChild(lessonList);
  });
}

getLinks();
