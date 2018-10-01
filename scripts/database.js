var database = firebase.database();

function setUserData(userId, displayName, email, accType) {
    firebase.database().ref('users/' + userId).set({
    displayName: displayName,
    email: email,
    type: accType
  }, function(error) {
    if (error) {
      console.log("failed");
    } else {
      console.log("data saved");
    }
  });
}

function updateUsername(userId){
	database.ref('/users/' + userId).once('value').then(function(snapshot) {
	  userFName = snapshot.val().displayName.split(" ")[0];
	  $("#greeting").html("Hello, " + userFName);
	});
}

function checkUserTypeandRedirect(userId){
  database.ref('/users/' + userId).once('value').then(function(snapshot) {
    var userType = snapshot.val().type;
    if (userType == "student") {
        window.location.replace("../pages/studentPortal.html");
        console.log("student logged in, redirecting");
      }
      else {
        console.log("teacher logged in");
      }
  });
}