//OCR FILE

function recognizeFile(file){
	Tesseract.recognize(file, {
		lang: "eng"		
	}).then(function(result){
			console.log(result.text);
			editor.setText(result.text, 'api'); //Using Quill's pre-established methods to change the editor text 
		});
}  
