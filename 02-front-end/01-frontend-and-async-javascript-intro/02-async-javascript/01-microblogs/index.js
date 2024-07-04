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

// fetch the https://dummyjson.com/users API to retrieve user information; after receiving the data, pass the array returned by the API with the user information to the fillUsersSelect function so that the page select is updated
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => fillUsersSelect(data.users));

usersSelect.addEventListener('change', () => {
  clearPageData();
  const UserID = usersSelect.value;

});
