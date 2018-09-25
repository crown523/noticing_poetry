var database = firebase.database();

function setUserData(userId, displayName, email, accType) {
    firebase.database().ref('users/' + userId).set({
    displayName: displayName,
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

function getUserData(userId){
	data = []
	database.ref('/users/' + userId).once('value').then(function(snapshot) {
	  data.push(snapshot.val().displayName)
	  data.push(snapshot.val().email)
	  data.push(snapshot.val().type)
	  userFName = snapshot.val().displayName.split(" ")[0]
	  $("#greeting").html("Hello, " + userFName)
	});
}