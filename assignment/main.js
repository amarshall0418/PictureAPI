// imports CSS
import './style.css';

fetch('https://picsum.photos/v2/list?page=2&limit=100') // Fetches The API
  .then((res) => res.json()) // Take Response from Fetch and turn into JSON
  .then((listOfPhotos) => { // 'then' take the JSON 'object' and do what's in the brackets.
    const i = Math.floor(Math.random() * 100);

    console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);
    document.querySelector('#app').innerHTML += `
    <h2>${listOfPhotos[i].author} - ${listOfPhotos[i].id}</h2>
    <img src="${listOfPhotos[i].download_url}" alt="Random Picture"/>
    `;
  });

// ids = #app
// classes = .app
