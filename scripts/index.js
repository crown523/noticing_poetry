$(document).ready(function(){
	clearForm("#signup");
	clearForm("#signin");

	$("#signInandUp").click(function(event){
		event.preventDefault();
		$("#signin").show();
	});

	$("#showsignup").click(function(event){
		event.preventDefault();
		$("#signin").hide();
		$("#signup").show();
	});
});

