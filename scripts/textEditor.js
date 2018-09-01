var previous = window.onload
var editor

window.onload = function(){
	if (typeof(previous) == "function") {
		previous()
	}
	var options = {
		modules: {
		    toolbar: [
		      ['bold', 'italic', 'underline'],
		    ]
		  },
		theme: 'bubble'
	};
	editor = new Quill("#editSpace", options)
}

