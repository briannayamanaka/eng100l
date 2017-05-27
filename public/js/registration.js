/* Authors: Proud, Joyce*/

// Avatar choice
var avatarText = "";

// Set the configuration for your app
var config = {
  apiKey: "AIzaSyAJi4sI7b5M9IkhEfLvn9OJ7TbRkNv-RE8",
  authDomain: "birchaquarium-fd036.firebaseapp.com",
  databaseURL: "https://birchaquarium-fd036.firebaseio.com/",
  storageBucket: "birchaquarium-fd036.appspot.com"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function setAvatar(avatarName) {
    avatarText = avatarName;
    console.log(avatarText);
}

/* Write an object to the Firebase database under the database RFID tree
* with the key idInput and the values idInput, nameInput, and ageGroupInput. 
* Example: writeToFirebase(42, 'Dale', 'Elementary school')
*   will store under key 42 an object containing id 42, name 'Dale', and
*   ageGroup 'Elementary school'
*   This object is then stored at https://birchaquarium-fd036.firebaseio.com/42 */
function writeToFirebase(idInput, languageInput, avatarInput, nameInput, ageGroupInput) {
    
    // Write the object under the database root "users"
    // Datbase schema: RFID tree-->user object that contains links id with name and age group
    database.ref("RFID/" + idInput).set({
        id: idInput,
        language: languageInput,
        avatar: avatarInput,
        name: nameInput,
        ageGroup: ageGroupInput,
    });
}

// This function will get called when the button is clicked
function update() {
    //Get values from the text boxes
    var rfidText = document.getElementById("rfidInput").value;
    var languageText = document.getElementById("languageInput").value;
    var nameText = document.getElementById("nameInput").value;
    var ageGroupText = document.getElementById("ageGroupInput").value;

    // Write user object to Firebase under the key rfidText
    writeToFirebase(rfidText, languageText, avatarText, nameText, ageGroupText);
    
    // For debugging: Set the paragraph element with the id "testTextDisplay" to contain the text that was inputted
    //document.getElementById("testTextDisplay").innerHTML = "RFID: " + rfidText + ", Name: " + nameText + ", Age group: " + ageGroupText;
}
