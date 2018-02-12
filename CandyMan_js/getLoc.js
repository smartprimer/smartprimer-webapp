class userLocation {
  constructor() {
    this.options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
  }

  success(pos) {
   var crd = pos.coords;

   console.log('Your current position is:');
   console.log(`Latitude : ${crd.latitude}`);
   console.log(`Longitude: ${crd.longitude}`);
   console.log(`More or less ${crd.accuracy} meters.`);

   const longitudeandlatitude = `Latitude : ${crd.latitude} Longitude: ${crd.longitude}` ;
   const inputElem = {'Location': longitudeandlatitude};
   firebase.database().ref('users/' + localStorage.first_name).update(inputElem);

   return longitudeandlatitude;
  };

  error(err) {
   console.warn(`ERROR(${err.code}): ${err.message}`);
  };
}


const id = new userLocation();
