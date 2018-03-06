/**
 * When the user submits the preliminary info form with his or her name and
 * gender, record both in localStorage before transitioning to 1_attention.html.
 * This allows us to modify the story text to incorporate the user's name and
 * gender.
 */
let userInfoForm = document.querySelector('#userInfoForm');
userInfoForm.onsubmit = function() {
  localStorage.first_name = document.querySelector("#firstName").value;
  localStorage.gender = document.querySelector("#gender").value;
  window.location = "1_attention.html";
  return false;
};
