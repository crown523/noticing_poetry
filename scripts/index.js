$(document).ready(function(){
	clearForm("#signup");
	clearForm("#signin");

	$("#showsignin").click(function(event){
		event.preventDefault();
		$("#signupsection").hide();
		$("#signinsection").show();
	});

	 $("#showsignup").click(function(event){
	 	event.preventDefault();
	 	$("#signinsection").hide();
	 	$("#signupsection").show();
	 });

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

