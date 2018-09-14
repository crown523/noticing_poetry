var editor;

$(document).ready(function(){
	var options = {
		modules: {
		    toolbar: '#toolbar'
		  },
		theme: 'bubble'
	};
	editor = new Quill("#editSpace", options);

	$("#annotateButton").click(function(){ //Calls function when button is clicked
		createAnnotation(getSelectedText, ".selected");
	});
});

function getSelectedText(){
	selected = editor.getSelection(); //Gets the start index and length of text currently selected in the editor
	text = editor.getText(selected.index, selected.length); //Get the text corresponding to that start index and length
	return text;
}

function createAnnotation(text, tab){
	var annotation = $("<div class='annotation'</div>").text(text); //create two div tags, put the passed text inside them
	$(tab).append(annotation); //insert the created html into the passed tab element
}

function createTextObject(text){
	var textObj = {
		"text": text,
		"annotation": ""
	};
	return textObj;
}