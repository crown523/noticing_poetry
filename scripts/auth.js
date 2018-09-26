$(document).ready(function(){
	//HANDLE SIGNUP
	$("#signup").submit(function(event){
		event.preventDefault(); //Prevent form from submitting
		var values = getFormContents("#signup"); //Get contents of all form field as elements in an array
		firebase.auth().createUserWithEmailAndPassword(values[2], values[3]).then(function() {
		  console.log("Signup successful")
		  $("#signup").hide();
		  $("#signInandUp").hide();
		  $("#signout").show();
		  createUserProfile(values[0], values[1], values[4]);
		}).catch(function(error) {
			console.log(error.code, error.message)
		});
	});

	//HANDLE SIGNIN
	$("#signin").submit(function(event){
		event.preventDefault();
		var values = getFormContents("#signin"); //Get contents of all form field as elements in an array
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
	
});	

function createUserProfile(fname, lname, accType){
	var user = firebase.auth().currentUser;
	displayName = fname + " " + lname
	user.updateProfile({
	  displayName: displayName
	}).then(function() {
	  console.log("user profile created")
	}).catch(function(error) {
	  console.log(error.code, error.message)
	});
	setUserData(user.uid, displayName, user.email, accType) 

}