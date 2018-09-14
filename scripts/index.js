$(document).ready(function(){
	clearForm("#signup");
	$("#signup").submit(function(event){
		event.preventDefault();
		values = getFormContents("#signup");
		holdingArr = [];
		$.each(values, function(index, obj){
			holdingArr.push(obj.value);
		});
		console.log(holdingArr);
		firebase.auth().createUserWithEmailAndPassword(holdingArr[0], holdingArr[1]).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		});
	});
});

