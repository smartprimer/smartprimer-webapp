// get the input from the user from the previous html page
function processForm() {
  var parameters = location.search.substring(1).split("&");
  var first_name = parameters[0].split("=");
  var last_name = parameters[1].split("=");
  var age = parameters[2].split("=");
  var gender = parameters[3].split("=");
  var school = parameters[4].split("=");

  // store to localStorage to pass across html pages
  localStorage.first_name = first_name[1].replace('+', '');
  localStorage.last_name = last_name[1].replace('+', '');

  if (gender[1] === "Female"){
  localStorage.gender = "Female";
  }
  else localStorage.gender = "Male";

  const firstName = document.querySelector("#firstName");
  firstName.innerHTML = first_name[1].replace('+', '');

  const lastName = document.querySelector("#lastName");
  lastName.innerHTML = last_name[1].replace('+', '');

  const ageEnter = document.querySelector("#ageEnter");
  ageEnter.innerHTML = age[1];
  localStorage.age = age[1];

  const genderEnter = document.querySelector("#genderEnter");
  genderEnter.innerHTML = gender[1];

  const schoolEnter = document.querySelector("#schoolEnter");
  schoolEnter.innerHTML = school[1].replace('+', '');;
  localStorage.school = school[1].replace('+', '');;
}

processForm();
