const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const API_KEY = '34270048-f084a7934d6a57c317aee8d09';
const IMAGE_URL = 'https://pixabay.com/api/?key=<KEY>&q=foggy+forests&image_type=photo&per_page=20';
const url = IMAGE_URL.replace('<KEY>', API_KEY);


// DOM elements
const blogContainer = document.getElementById('blog-container');


fetch(API_URL)
  .then(response => response.json())
  .then(posts => {
    
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      
      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
      postElement.appendChild(titleElement);
      
      const imageElement = document.createElement('img');
      imageElement.src = IMAGE_URL;
      imageElement.alt = 'Image for ' + post.title;
      postElement.appendChild(imageElement);
      
      const bodyElement = document.createElement('p');
      bodyElement.textContent = post.body;
      postElement.appendChild(bodyElement);
      
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error(error));