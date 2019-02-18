var editor;

var tab1count = 0, tab2count = 0, tab3count = 0, tab4count = 0;

$(document).ready(function(){
	//CREATE TEXT EDITOR
	var options = {
		modules: {
		    toolbar: '#toolbar'
		  },
		theme: 'bubble'
	};
	editor = new Quill("#editSpace", options);

	//CREATE ANNOTATIONS
	$("#annotateButton").click(function(){ //Calls function when button is clicked
		createAnnotation(getSelectedText, ".selected");
	});
});

//HELPER FUNCTIONS FOR CREATING ANNOTATIONS
function getSelectedText(){
	selected = editor.getSelection(); //Gets the start index and length of text currently selected in the editor
	text = editor.getText(selected.index, selected.length); //Get the text corresponding to that start index and length
	return text;
}

function createAnnotation(text, tab){
	var annotation = $("<div class='annotation opener'></div>").text(text); //create two div tags, put the passed text inside them
	var annotationNo = 0;
	var tabNo = $(tab).attr('id')

	switch(tabNo){
		case "level1":
			tab1count++;
			annotationNo = tab1count;
			break;
		case "level2":
			tab2count++;
			annotationNo = tab2count;			
			break;
		case "level3":
			tab3count++;
			annotationNo = tab3count;
			break;
		case "level4":
			tab4count++;
			annotationNo = tab4count;
			break;
	}
	$(annotation).attr('id', tabNo + " " + annotationNo);
	$(tab).append(annotation); //insert the created html into the passed tab element

	//Open dialog box when annotation is clicked
	$(".opener").on('click', function(){
		$(".myInput").val('');
		$(this).addClass("current");
	    $("#annotationdialog").dialog("open");
	});
}

function createTextObject(text){
	var textObj = {
		"text": text,
		"annotation": ""
	};

	return textObj;
}