var editor

$(document).ready(function(){
	var options = {
		modules: {
		    toolbar: '#toolbar'
		  },
		theme: 'bubble'
	};
	editor = new Quill("#editSpace", options)

	$("#annotateButton").click(function(){ //Calls function when button is clicked
		console.log(createAnnotation(getSelectedText()))
	})
})

function getSelectedText(){
	selected = editor.getSelection() //Gets the start index and length of text currently selected in the editor
	text = editor.getText(selected.index, selected.length) //Get the text corresponding to that start index and length
	return text
}

function createAnnotation(text, tab){
	var annotation = "<p>" + text + "</p>"
	$(tab).append(annotation)
}

function createTextObject(text){
	var textObj = {
		"text": text,
		"annotation": ""
	}
	return textObj
}