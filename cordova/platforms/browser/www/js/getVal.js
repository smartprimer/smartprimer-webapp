

function getVal(){
var userId = 'Dummy';
return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = snapshot.val().School;
  console.log(username);
});
}


const dummyBtn = document.querySelector('#dummy');
dummyBtn.addEventListener('click', getVal);
