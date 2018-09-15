$(document).ready(function(){
	clearForm("#signup");
	clearForm("#signin");

	//HANDLE SIGNUP
	$("#signup").submit(function(event){
		event.preventDefault(); //Prevent form from submitting
		var values = getFormContents("#signup"); //Get contents of all form field as elements in an array
		console.log(values)
		firebase.auth().createUserWithEmailAndPassword(values[0], values[1]).then(function() {
		  console.log("Signup successful")
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
		}).catch(function(error) {
		  console.log(error.code, error.message)
		});
	});

	//HANDLE SIGNOUT
	$("#signout").click(function(event){
		firebase.auth().signOut().then(function() {
		  console.log("Signout successful")
		}).catch(function(error) {
		  console.log(error.code, error.message)
		});
	});
});

