var student1 = {"fName": "Joe", "lName": "Bloe", "class": "1A"}
var student2 = {"fName": "Jane", "lName": "Doe", "class": "1B"}
var student3 = {"fName": "John", "lName": "Moe", "class": "2A"}
var student4 = {"fName": "No", "lName": "You", "class": "3B"}
var student5 = {"fName": "Jeff", "lName": "Geoff", "class": "4A"}

var studentsArray = [student1, student2, student3, student4, student5]

sortByParameter(studentsArray, "fName");
sortByParameter(studentsArray, "lName");
sortByParameter(studentsArray, "class");

searchByName(studentsArray, "John", "fName");

function sortByParameter(toSort, sortParam){
	//assume toSort is an array of student objects
	//sortParam is any of the properties of the student object (fName, lName, class)

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
	console.log(toSort)
	return toSort;
}

function searchByName(toSearch, searchPhrase, nameType){
	//nameType is either fName or lName
	toSearch = sortByParameter(toSearch, nameType);
	//if searching by first name, resort array by first name; if searching by last name, resort by last name
	binarySearch(toSearch, searchPhrase, nameType, 0, toSearch.length);
}

function binarySearch(toSearch, searchPhrase, nameType, left, right){
	console.log(toSearch);
	midpoint = Math.floor((left+right)/2);
	console.log(midpoint);
	if (toSearch[midpoint][nameType]==searchPhrase){
		console.log(toSearch[midpoint][nameType], midpoint);
		return midpoint;
	}
	else if (toSearch[midpoint][nameType].localeCompare(searchPhrase) < 0){
		//midpoint is smaller than search phrase
		binarySearch(toSearch, searchPhrase, nameType, midpoint+1, right);
	}
	else {
		//midpoint is larger than search phrase
		binarySearch(toSearch, searchPhrase, nameType, left, midpoint-1);
	}
}







