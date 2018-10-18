$(document).ready(function(){
	clearForm("#signup");
	clearForm("#signin");

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in
	    checkUserTypeandRedirect(user.uid)
	  } else { 
	    // No user is signed in
	    console.log("Signed out")
	  }
	});
});

