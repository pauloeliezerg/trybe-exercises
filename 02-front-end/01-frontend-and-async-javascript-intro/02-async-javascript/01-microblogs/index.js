import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';

// 1. fetch the https://dummyjson.com/users API to retrieve user information; after receiving the data, pass the array returned by the API with the user information to the fillUsersSelect function so that the page select is updated
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => fillUsersSelect(data.users));

usersSelect.addEventListener('change', () => {
  clearPageData();
  const UserID = usersSelect.value;
  const POST_API = `https://dummyjson.com/posts/user/${UserID}`

  // 2. in the initial structure of the project, there is already an eventListener for the select change event that triggers the clearPage function; after calling this function, fetch the API https://dummyjson.com/posts/user/{userID}; remember that you must get the id of the selected person through the value attribute of the select
  // 3. the request made in the previous item will return an array with the posts of the selected person; after receiving the information from the API, use the fillPosts function, passing the list of posts received, to display the posts on the screen; the first item in the array will be the highlighted post; the remaining posts are included in the list of related posts
  // 4. still using the list of posts returned by the request in item 2, get the id of the first post in the list (this will be the highlighted post) and make a request to the URL https://dummyjson.com/posts/{featuredPost.id}/ comments to get the comments of the highlighted post
  // 5. after receiving the comments from the first post from the API, use the fillFeaturedPostComments function to display them; you must pass the comments array received when returning from the API to this function
  fetch(POST_API)
    .then((response) => response.json())
    .then((data) => {
      fillPosts(data.posts);
      const firstPostId = data.posts[0].id;
      const COMMENT_API = `https://dummyjson.com/posts/${firstPostId}/comments`
    
      return fetch(COMMENT_API)
    })
    .then((response) => response.json())
    .then((data) => fillFeaturedPostComments(data.comments));
});
