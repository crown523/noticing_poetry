var database = firebase.database();

function setUserData(userId, displayName, email, accType) {
    database.ref('users/' + userId).set({
    displayName: displayName,
    email: email,
    type: accType
  }, function(error) {
    if (error) {
      console.log("failed");
    } else {
      console.log("data saved");
    }
  });
}

function updateUsername(userId){
	database.ref('/users/' + userId).once('value').then(function(snapshot) {
	  userFName = snapshot.val().displayName.split(" ")[0];
	  $("#greeting").html("Hello, " + userFName);
	});
}

function checkUserTypeandRedirect(userId){
  database.ref('/users/' + userId).once('value').then(function(snapshot) {
    var userType = snapshot.val().type;
    if (userType == "student") {
        window.location.replace("../pages/studentPortal.html");
        console.log("student logged in, redirecting");
      }
      else {
        window.location.replace("../pages/teacherPortal.html")
        console.log("teacher logged in");
      }
  });
}

function savePoem(poemAnnotations, userId){
  var newRef = database.ref('users/' + userId + '/poems').push();
  var newRef2 = database.ref('poems').push();
  var newKey = newRef.key;
  newRef.set(poemAnnotations);
  newRef2.set(poemAnnotations);
  return newKey;
}

function retrievePoem(userId, poemId){
  database.ref('/users/' + userId + '/poems/' + poemId).once('value').then(function(snapshot) {
    console.log(snapshot.val())
    $("#sidebar").html(snapshot.val())
  });
}

function teacherRetrievePoem(poemId){
  database.ref('poems/' + poemId).once('value').then(function(snapshot) {
    console.log(snapshot.val())
    $("#sidebar").html(snapshot.val())
  });
}

function getAllPoemKeys(userId){
  database.ref('/users/' + userId + '/poems/').once('value').then(function(snapshot){
    var poemIds = Object.keys(snapshot.val());
    console.log(poemIds)
    for (var i = 0; i < poemIds.length; i++){
      var toAdd = "<button class='poemlink' id='link"+ i + "' >" + poemIds[i] + "</button>";
      $("#poemlinks").append(toAdd);
    }
    $(".poemlink").on('click', function(){
      console.log("reached");
      console.log(this.id);
      var clickedid = this.id;
      console.log("#" + clickedid)
      console.log($("#" + clickedid).text());
      retrievePoem(firebase.auth().currentUser.uid, $("#" + clickedid).text());
    });
  });
}

function getAllPoemKeysTeacher(){
  database.ref('/poems/').once('value').then(function(snapshot){
    var poemIds = Object.keys(snapshot.val());
    console.log(poemIds)
    for (var i = 0; i < poemIds.length; i++){
      var toAdd = "<button class='poemlink' id='link"+ i + "' >" + poemIds[i] + "</button>";
      $("#poemlinks").append(toAdd);
    }
    $(".poemlink").on('click', function(){
      console.log("reached");
      console.log(this.id);
      var clickedid = this.id;
      console.log("#" + clickedid)
      console.log($("#" + clickedid).text());
      teacherRetrievePoem($("#" + clickedid).text());
    });
  });
}

function getAllStudentData(){
  console.log("hi")
  database.ref('/users/').once('value').then(function(snapshot) {
    data = snapshot.val()
    // data.forEach(function(item){
    //   console.log(item);
    // });
    console.log(data);
  });
}