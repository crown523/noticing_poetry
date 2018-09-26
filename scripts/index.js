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

	// $("#showsigninandup").click(function(event){
	// 	event.preventDefault();
	// 	$("#signupsection").hide();
	// 	$("#signinsection").show();
	// });

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in
	    window.location.replace("../pages/studentPortal.html");
	    getUserData(user.uid);
	  } else { 
	    // No user is signed in
	    console.log("Signed out")
	    $("#greeting").html("Hello, Guest")
	  }
	});
});

