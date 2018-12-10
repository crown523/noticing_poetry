$(document).ready(function(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in
	    updateUsername(user.uid);
	  } else { 
	    // No user is signed in
	    console.log("Signed out")
	    window.location.replace("../pages/index.html");	  
		}
	});
	$("#studentManagement").click(function(event){
		event.preventDefault();
		window.location.replace("../pages/studentManagement.html");
	})
})