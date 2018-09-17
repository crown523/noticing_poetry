$(document).ready(function(){
	//HANDLE SIGNUP
	$("#signup").submit(function(event){
		event.preventDefault(); //Prevent form from submitting
		var values = getFormContents("#signup"); //Get contents of all form field as elements in an array
		console.log(values)
		firebase.auth().createUserWithEmailAndPassword(values[2], values[3]).then(function() {
		  console.log("Signup successful")
		  $("#signup").hide();
		  $("#signInandUp").hide();
		  $("#signout").show();
		  updateProfile(values[0], values[1]);
		}).catch(function(error) {
		  console.log(error.code, error.message)
		});
	});

	//HANDLE SIGNIN
	$("#signin").submit(function(event){
		event.preventDefault();
		var values = getFormContents("#signin"); //Get contents of all form field as elements in an array
		console.log(values)
		firebase.auth().signInWithEmailAndPassword(values[0], values[1]).then(function() {
		  console.log("Signin successful")
		  $("#signin").hide();
		  $("#signInandUp").hide();
		  $("#signout").show();
		}).catch(function(error) {
		  console.log(error.code, error.message)
		});
	});

	//HANDLE SIGNOUT
	$("#signout").click(function(event){
		event.preventDefault();
		firebase.auth().signOut().then(function() {
		  console.log("Signout successful")
		  $("#signInandUp").show(); //show signin/signup button
		  $("#signout").hide(); //hide signout button
		}).catch(function(error) {
		  console.log(error.code, error.message)
		});
	});

	//HANDLE AUTH STATE CHANGE
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in
	    var name = user.displayName;
  		var email = user.email;
  		var photoUrl = user.photoURL;
  		var emailVerified = user.emailVerified;
  		var uid = user.uid;
  		console.log(name, email, photoUrl, emailVerified, uid)
	  } else { 
	    // No user is signed in
	    console.log("Signed out")
	  }
	});
});	

function updateProfile(fname, lname){
	var user = firebase.auth().currentUser;
	user.updateProfile({
	  displayName: fname + " " + lname
	}).then(function() {
	  console.log("user profile created")
	  console.log(user.displayName)
	}).catch(function(error) {
	  console.log(error.code, error.message)
	});
}