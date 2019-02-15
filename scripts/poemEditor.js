$(document).ready(function(){
	//HANDLE FILE UPLOAD & OCR
	$("#submitButton").click(function(event){
		event.preventDefault(); //Prevents the form from actually submitting when submit button is clicked
		if (getFile() == null){ 
			alert("No file selected"); //If no file has been uploaded, inform the user so
		}
		else{
			if (getFileType().startsWith("image")){
				handleSubmit(); //If a file has been uploaded, run OCR on it
				clearForm("#uploadForm");
			}
			else{
				alert("Incorrect file type");
			}
		}
	});
	clearForm("#uploadForm");
	$("#defaultOpen").click(); //"clicks" the level1 tab, opening it by default

	$("#signout").click(function(event){
		event.preventDefault();
		firebase.auth().signOut().then(function() {
		  console.log("Signout successful");
		}).catch(function(error) {
		  console.log(error.code, error.message)
		});
	});	

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
	$(".annotation").click(function(event){
		console.log("clicked")
	})

	//Initialize dialog
	$("#dialog").dialog({
	    autoOpen: false,
	    show: {
	        effect: "blind",
	        duration: 1000
	    },
	    hide: {
	        effect: "blind",
	        duration: 1000
	    },
	    modal: true
	});

	//When the button in the form is clicked, add the comment to the annotation that was clicked
	$('.formSaver').on('click', function(){
		var originalText = $(".current").text();
		if (originalText.indexOf('Comment') != -1){
			var originalText = originalText.substring(0, originalText.indexOf('Comment'));
		}
		var newText = originalText + " Comment: " + $('.myInput').val();
		console.log(newText)
	    $(".current").text(newText);
	    $(".current").removeClass("current");
	    $("#dialog").dialog('close');
	});
	

});

//HANDLE TABS
function openTab(obj, toOpen){
	$(".tabcontent").hide(); //Get all elements with class name "tabcontent" and hide them (set display to none)"
	$(".tablink").attr("class", "tablink");
	$(obj).addClass("active");
	$(".tabcontent").attr("class", "tabcontent");
	$(toOpen).addClass("selected");
    $(toOpen).show(); //Show the element with the passed ID
}