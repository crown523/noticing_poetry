//FILE OF HELPER FUNCTIONS FOR FORMS

function getFile(){
	var file = document.getElementById("fileUpload").files[0];
	return file;
}

function getFileType(){
	var file = getFile();
	return file.type;
}

function handleSubmit(){			
	recognizeFile(getFile()); //get the file user submitted, then call the OCR function on it
}

function clearForm(id){
	$(id).trigger("reset");
}

function getFormContents(id){
	var fields = $(id).serializeArray();
	var formValues = []; //Create empty array
	$.each(fields, function(index, obj){ //Iterate over each elemnt in fields array and run the function
		formValues.push(obj.value); //add the value of the array element to the new array
	});
	return formValues;
}