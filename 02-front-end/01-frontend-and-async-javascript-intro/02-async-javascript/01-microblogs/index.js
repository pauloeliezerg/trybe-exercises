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
  fetch(POST_API)
    .then((response) => response.json())
    .then((data) => fillPosts(data.posts));
});
