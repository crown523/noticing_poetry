var database = firebase.database();

function writeUserData(userId, displayName, email, accType) {
    firebase.database().ref('users/' + userId).set({
    username: displayName,
    email: email,
    type: accType
  }, function(error) {
    if (error) {
      console.log("failed")
    } else {
      console.log("data saved")
    }
  });
}
