window.onload = function(){
	var submitButton = document.getElementById("submitButton") //store the submit button element in a variable
	//changing behavior of the button when clicked
	submitButton.addEventListener("click", function(event){
		event.preventDefault() //Prevents the form from actually submitting when submit button is clicked
		if (getFile() == null){ 
			alert("No file selected") //If no file has been uploaded, inform the user so
		}
		else{
			if (getFileType().startsWith("image")){
				handleSubmit() //If a file has been uploaded, run OCR on it
				clearForm()
			}
			else{
				alert("Incorrect file type")
			}
		}
	})
	var fileUpload = document.getElementById("fileUpload") //store the file upload field in a variable
	clearForm()
	document.getElementById("defaultOpen").click() //"clicks" the level1 tab, opening it by default
}

function openTab(evt, toOpen){
	var tabcontents, tabLinks //Create variables to store references in

	tabcontents = document.getElementsByClassName("tabcontent") //get all tabcontent elements, put in a list
	for (var i = 0; i < tabcontents.length; i++){
		tabcontents[i].style.display = "none" //iterate through list and change all to no display
	}

	tablinks = document.getElementsByClassName("tablink") //get all tablink elements, put in a list
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "") //iterate through list and remove active class from all
    }

    document.getElementById(toOpen).style.display = "block" //display the element corresponding to the tab clicked
    evt.currentTarget.className += " active" //change classname of selected tab to "active"
}