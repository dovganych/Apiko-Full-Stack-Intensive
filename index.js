const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';
const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users/';

const posts = () => {
  fetchData(POSTS_ENDPOINT, showPosts);
}

const user = () => {
  fetchData(`${USERS_ENDPOINT}/${getId()}`, showUser);
}

const userPosts = () => {
  fetchData(`${POSTS_ENDPOINT}?userId=${getId()}`, showPosts);
}

const post = () => {
  fetchData(`${POSTS_ENDPOINT}/${getId()}`, showPost);
}

const postComments = () => {
  fetchData(`${POSTS_ENDPOINT}${getId()}/comments`, showPostComments);
}

const getId = () => {
  return +window.location.href.slice(-1);
}

const fetchData = (url, method) => {
  fetch(url)
  .then(response => response.json())
  .then(json => { method(json); });	
}

const showPost = (post) => {
  $('#content').append(`<li>
    <a href='?userId=${post.userId}'>UserId: ${post.userId}</a>
    <p>Id: ${post.id}</p><p>Title: ${post.title}</p>
    <button onclick="postComments()">See comments</button>
  </li>`);
}

const showUser = (data) => {
  $('#content').append(`<li>
    <h4>Name: ${data.name}</h4>
    <p>Username: ${data.username}</p></li>
    <p>Email: ${data.email}</p></li>
    <p>Company name: ${data.company.name}</p></li>
    <button onclick="userPosts()">See posts</button>
  </li>`);
}

const showPostComments = (comments) => {
  comments.forEach((item) => {
    $('#content').append(`<li>
      <h4>Comments ${item.id}</h4>
      <p>Name: ${item.name}</p>
      <p>Text: ${item.body}</p>
      <p>By: ${item.email}</p>
    </li>`);
  });
}

const showPosts = (posts) => {
  posts.forEach((item) => {
    $('#content').append(`<li>
      <a href='?postId=${item.id}'>Title: ${item.title}</a>
      <p>Id: ${item.id}</p></li>
      <a href='?userId=${item.userId}'>UserId: ${item.userId}</a></li>`);
  });
}

if (window.location.href.match('userId=')){
  user();
}
else if (window.location.href.match('postId=')){
  post();
}
else {
  posts();
}