function getFile(){
	var file = document.getElementById("fileUpload").files[0]
	return file
}

function getFileType(){
	var file = getFile()
	return file.type
}

function handleSubmit(){			
	recognizeFile(getFile()) //get the file user submitted, then call the OCR function on it
}

function clearForm(){
	document.getElementById("uploadForm").reset()
}