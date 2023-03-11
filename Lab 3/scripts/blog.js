const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const API_KEY = '34270048-f084a7934d6a57c317aee8d09';
const IMAGE_URL = 'https://pixabay.com/api/?key=<KEY>&q=foggy+forests&image_type=photo&per_page=20';
const url = IMAGE_URL.replace('<KEY>', API_KEY);

// DOM elements
const blogContainer = document.getElementById('blog-container');

let posts = [];
// Fetch blog posts from JSONPlaceholder
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    posts = data;
    // Replace <KEY> with API_KEY in IMAGE_URL
    const imageUrl = IMAGE_URL.replace('<KEY>', API_KEY);

    // Fetch images from Pixabay
    return fetch(imageUrl);
  })
  .then(response => response.json())
  .then(images => {
    // Create a blog card for each post
    for (let i = 0; i < images.hits.length; i++) {
      const post = posts[i];
      const image = images.hits[i];

      // Create card elements
      const card = document.createElement('div');
      card.classList.add('card');

      const imageElement = document.createElement('img');
      imageElement.classList.add('card-img-top');
      imageElement.src = image.webformatURL;
      imageElement.alt = `Image for post ${i + 1}`;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h2');
      title.classList.add('card-title');
      title.textContent = post.title;

      const content = document.createElement('p');
      content.classList.add('card-text');
      content.textContent = post.body;

      // Append elements to card
      card.appendChild(imageElement);
      card.appendChild(cardBody);
      cardBody.appendChild(title);
      cardBody.appendChild(content);

      // Append card to container
      blogContainer.appendChild(card);
    }
  });