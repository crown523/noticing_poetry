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
	$("#editorLink").click(function(){
		window.location.replace("../pages/poemEditor.html")
	})
	$("#poemManageLink").click(function(){
		window.location.replace("../pages/poemManagement.html")
	})
})