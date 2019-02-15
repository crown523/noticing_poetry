$(document).ready(function(){
	students = [];
	//getAllStudentData();

	var student1 = {"fName": "Joe", "lName": "Bloe", "classPeriod": "1A"}
	var student2 = {"fName": "Jane", "lName": "Doe", "classPeriod": "1B"}
	var student3 = {"fName": "John", "lName": "Moe", "classPeriod": "2A"}
	var student4 = {"fName": "No", "lName": "You", "classPeriod": "3B"}
	var student5 = {"fName": "Jeff", "lName": "Geoff", "classPeriod": "4A"}
	var student6 = {"fName": "Adam", "lName": "Smith", "classPeriod": "3A"}
	var student7 = {"fName": "Jennifer", "lName": "Smith", "classPeriod": "2B"}
	var student8 = {"fName": "Omega", "lName": "LuL", "classPeriod": "4B"}
	var student9 = {"fName": "College", "lName": "Reject", "classPeriod": "3B"}
	var student10 = {"fName": "Pepe", "lName": "Hands", "classPeriod": "1A"}
	var studentsArray = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]

	//sortByParameter(studentsArray, "fName", true);
	//sortByParameter(studentsArray, "lName", true);
	//sortByParameter(studentsArray, "class", true);
	

	//searchByName(studentsArray, "John", "fName");

	//Give functionality to sorting buttons
	$("#fnamesort").on('click', function(){
		sortByParameter(studentsArray, "fName", true);
	});
	$("#lnamesort").on('click', function(){
		sortByParameter(studentsArray, "lName", true);
	});
	$("#classsort").on('click', function(){
		sortByParameter(studentsArray, "classPeriod", true);
	});

	//Give functionality to searching buttons
	$("#fnamesearch").on('click', function(){
		if ($("#searchinput").val()!=""){
			searchByName(studentsArray, $("#searchinput").val(), "fName");
		}
	});
	$("#lnamesearch").on('click', function(){
		if ($("#searchinput").val()!=""){
			searchByName(studentsArray, $("#searchinput").val(), "lName");
		}
	});

})

function sortByParameter(toSort, sortParam, print){
	//assume toSort is an array of student objects
	//sortParam is any of the properties of the student object (fName, lName, classPeriod)

	//sort by selection
	var minIndex = 0;
	for (var i = 0; i < toSort.length; i++){
		minIndex = i;
		for (var j = i; j < toSort.length; j++){
			//use javascript compare method to determine alphabetical precedence
			if (toSort[j][sortParam].localeCompare(toSort[minIndex][sortParam]) < 0){ 
				minIndex = j;
			}	
		}
		var b = toSort[i];
		toSort[i] = toSort[minIndex];
		toSort[minIndex] = b;
	}
	if (print){
		listStudents(toSort);
	}
	return toSort;
}

function searchByName(toSearch, searchPhrase, nameType){
	$("#students").empty();
	//nameType is either fName or lName
	console.log(toSearch);
	toSearch = sortByParameter(toSearch, nameType, false);
	//if searching by first name, re-sort array by first name; if searching by last name, re-sort by last name
	searchResult = binarySearch(toSearch, searchPhrase, nameType, 0, toSearch.length);
	console.log(searchResult);
	if (searchResult != -1){
		fullName = toSearch[searchResult].fName + " " + toSearch[searchResult].lName
		var student = "<div class='row h-10 bg-white'> <div class='col-md-3 name'>" + fullName + "</div> <div class='col-md-3 class'>" + toSearch[searchResult].classPeriod + "</div> <div class='col-md-3 links'>  </div> </div>";
		console.log(student); 
		$("#students").append(student); 
	}
	else{
		var student = "<div class='row h-10 bg-white'> <div class='col-md-3 name'>" + "Student not found" + "</div> </div>";
		$("#students").append(student); 
	}
}

function binarySearch(toSearch, searchPhrase, nameType, left, right){
	if (left==right){
		return -1;
	}
	midpoint = Math.floor((left+right)/2);
	if (toSearch[midpoint][nameType]==searchPhrase){
		console.log(toSearch[midpoint][nameType], midpoint);
		console.log(midpoint)
		return midpoint;
	}
	else if (toSearch[midpoint][nameType].localeCompare(searchPhrase) < 0){
		//midpoint is smaller than search phrase
		return binarySearch(toSearch, searchPhrase, nameType, midpoint+1, right);
	}
	else {
		//midpoint is larger than search phrase
		return binarySearch(toSearch, searchPhrase, nameType, left, midpoint-1);
	}
}

function listStudents(studentsArray){
	$("#students").empty();
	for (var i = 0; i < studentsArray.length; i++){
		var fullName = studentsArray[i].fName + " " + studentsArray[i].lName;
		var classPeriod = studentsArray[i].classPeriod;
		var entry = "Name: " + fullName + " Class: " + classPeriod;
		console.log(entry);
		var student = "<div class='row h-10 bg-white'> <div class='col-md-3 name'>" + fullName + "</div> <div class='col-md-3 class'>" + classPeriod + "</div> <div class='col-md-3 links'>  </div> </div>";
		console.log(student); 
		$("#students").append(student); 
		console.log("reached")
	}
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~" + "\n")
}









