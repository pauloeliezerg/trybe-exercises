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
// logic to get information from users and fill in the select here

usersSelect.addEventListener('change', () => {
  clearPageData();
  const UserID = usersSelect.value;

  // logic to get information from the selected person's posts and from the comments on the post highlighted here
});
