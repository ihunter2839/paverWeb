var noteMap = {};
var defaultText = "Enter Notes Here..."
var noteInput = document.getElementById("noteInput");

var noteList = document.getElementById("notesList");

/* Set the default text */
noteInput.value = defaultText;

/* Clear the note input field when it comes into focus */
noteInput.onfocus = function() {
    if (noteInput.value == defaultText) {
        noteInput.value = "";
    }
}

/* Read the note input value each time a new character is added */
noteInput.oninput = function() {
    if (noteInput.value.substr(noteInput.value.length-1) == '\n'){
        if (noteInput.value.length != 1){
            addNote(noteInput.value);
        }
        noteInput.value = "";   
    }                
}

/* Add any current text to the notes list and reset the default text when note input field loses focus */
/*
            noteInput.onblur = function() {
                if (noteInput.value != "") {
                    notes.push(noteInput.value);
                }
                noteInput.value = defaultText;
            }
            */

/* Add a note to the list of notes */
function addNote(value) {
    var li = document.createElement("li");
    li.className = "noteItem";

    //noteContainer
    var nC = document.createElement("div");
    nC.className = "noteTextContainer";
    //note text
    var t = document.createTextNode(value);
    t.className = "noteText";

    //noteActionContainer
    var naC = document.createElement("div");
    naC.className = "noteActionContainer";
    //note deletion button
    //create an id for the button
    var buttonId = "button"+Object.keys(noteMap).length;

    var b = document.createElement("button");
    b.id = buttonId;
    b.className = "deleteNote";
    b.onclick = function() {
        noteList.removeChild(noteMap[this.id]);
    }

    //add items to dom
    nC.appendChild(t);
    naC.appendChild(b);
    li.appendChild(nC);
    li.appendChild(naC);
    noteList.appendChild(li);

    //create a note id and update map
    noteMap[buttonId] = li;

}
