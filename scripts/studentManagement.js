$(document).ready(function(){
	students = [];
	getAllStudentData();
	var student = "<div class='row h-10 bg-white'> <div class='col-md-3 name'></div> </div>"; 
	$("#students").append(student); 
})

function sortByParameter(toSort, sortParam){
	//assume toSort is an array of student objects
	var compareIndex;
	switch(sortParam){
		case "fName":
			compareIndex = 0;
			break;
		case "lName":
			compareIndex = 1;
			break;
		case "class":
			compareIndex = 3;
			break;
	}
	//sort by selection
	
}