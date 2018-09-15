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