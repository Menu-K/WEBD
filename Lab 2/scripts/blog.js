const postsDiv = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('col-md-6', 'col-lg-4', 'post');
      postDiv.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">${post.title}</h2>
            <p class="card-text">${post.body}</p>
            <a href="post.html?id=${post.id}" class="card-link">Read more</a>
          </div>
        </div>
      `;
      postsDiv.appendChild(postDiv);
    });
  })
  .catch(error => console.error(error));