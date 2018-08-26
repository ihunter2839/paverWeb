var noteMap = {};
var defaultText = "Enter Notes Here..."
var noteInput = document.getElementById("noteInput");

var notesList = document.getElementById("notesList");

var formMap = {};
var formsList = document.getElementById("formsList");


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
        notesList.removeChild(noteMap[this.id]);
    }

    //add items to dom
    nC.appendChild(t);
    naC.appendChild(b);
    li.appendChild(nC);
    li.appendChild(naC);
    notesList.appendChild(li);

    //create a note id and update map
    noteMap[buttonId] = li;

}

/*Add an area form to the list of forms */
function addForm() {
    var li = document.createElement("div");
    li.className = "formItem";

    //First row of form
    //Sqft and border information
    var r1 = document.createElement("div");
    r1.className = "row m-0 pl-2 pr-2";
    
    var  c1_r1 = document.createElement("div");
    c1_r1.className = "col-4";

    var r1_c1_r1 = document.createElement("div");
    r1_c1_r1.className = " row align-items-center";

    var sqftText = document.createElement("div");
    sqftText.textContent = "Total Sqft";

    var sqftInput = document.createElement("input");
    sqftInput.type = "text";
    sqftInput.className = "formInput";

    var c2_r1 = document.createElement("div");
    c2_r1.className = "col-5";

    var r1_c2_r1 = document.createElement("div");
    r1_c2_r1.className = "row align-items-center";

    var borderText = document.createElement("div");
    borderText.textContent = "Border Lnft";

    var borderInput = document.createElement("input");
    borderInput.type = "text";
    borderInput.className = "formInput";

    var c3_r1 = document.createElement("div");
    c3_r1.className = "col-3";

    var r1_c3_r1 = document.createElement("div");
    r1_c3_r1.className = "row align-items-center";

    var deductBorderText = document.createElement("div");
    deductBorderText.style = "max-width: 60%; font-size: 10px;";
    deductBorderText.textContent = "Deduct border from area?";

    var deductBorderCheck = document.createElement("input");
    deductBorderCheck.type = "checkbox";
    deductBorderCheck.style = "margin-left: 5%";

    //construct the first row of the form
    r1_c1_r1.appendChild(sqftText);
    r1_c1_r1.appendChild(sqftInput);
    r1_c2_r1.appendChild(borderText);
    r1_c2_r1.appendChild(borderInput);
    r1_c3_r1.appendChild(deductBorderText);
    r1_c3_r1.appendChild(deductBorderCheck);
    c1_r1.appendChild(r1_c1_r1);
    c2_r1.appendChild(r1_c2_r1);
    c3_r1.appendChild(r1_c3_r1);
    r1.appendChild(c1_r1);
    r1.appendChild(c2_r1);
    r1.appendChild(c3_r1);

    //construct second row of form
    var r2 = document.createElement("div");
    r2.className = "row m-0 pl-2 pr-2";

    var c1_r2 = document.createElement("div");
    c1_r2.className = "col-6";

    var r1_c1_r2 = document.createElement("div");
    r1_c1_r2.className = "row align-items-center";

    var overageText = document.createElement("div");
    overageText.textContent = "Overage %";

    var overageInput = document.createElement("input");
    overageInput.type = "text";
    overageInput.className = "formInput";

    var c2_r2 = document.createElement("div");
    c2_r2.className = "col-6";

    var r1_c2_r2 = document.createElement("div");
    r1_c2_r2.style = "min-height: 100%";
    r1_c2_r2.className = "row align-items-center";

    var overageBorderText = document.createElement("div");
    overageBorderText.style = "max-width: 70%";
    overageBorderText.textContent = "Apply to border?";

    var overageBorderInput = document.createElement("input");
    overageBorderInput.type ="checkbox";
    overageBorderInput.style = "margin-left: 5%";

    //construct the second row of form
    r1_c1_r2.appendChild(overageText);
    r1_c1_r2.appendChild(overageInput);
    r1_c2_r2.appendChild(overageBorderText);
    r1_c2_r2.appendChild(overageBorderInput);
    c1_r2.appendChild(r1_c1_r2);
    c2_r2.appendChild(r1_c2_r2);
    r2.appendChild(c1_r2);
    r2.appendChild(c2_r2);

    //construct the third row of the form
    var r3 = document.createElement("div");
    r3.className = "row m-0 pl-2 pr-2";

    var c1_r3 = document.createElement("div");
    c1_r3.className = "col-6";

    var r1_c1_r3 = document.createElement("div");
    r1_c1_r3.className = "row align-items-center";

    var brandText = document.createElement("div");
    brandText.textContent = "Brand";

    /*
    Future improvements could include the ability to
    type to search for brands / paver types 
    */
    var brandSelect = document.createElement("select");
    brandSelect.className = "formInput";
    brandSelect.style = "min-width: 80px";

    var r2_c1_r3 = document.createElement("div");
    r2_c1_r3.className = "row align-items-center";

    var styleText = document.createElement("div");
    styleText.textContent = "Style";

    var styleSelect = document.createElement("select");
    styleSelect.className = "formInput";
    styleSelect.style = "min-width: 80px";

    //add a default selection
    var brandSelectDefault = document.createElement("option");
    brandSelectDefault.textContent = "<--Select Brand-->";
    brandSelect.appendChild(brandSelectDefault);

    var styleSelectDefault = document.createElement("option");
    styleSelectDefault.textContent = "<--Select Style-->";

    for (var brand in paverData) {
        let brandOption = document.createElement("option");
        brandOption.textContent = brand;
        brandSelect.appendChild(brandOption);
    }

    var c2_r3 = document.createElement("div");
    c2_r3.className = "col-6"

    var r1_c2_r3 = document.createElement("div");
    r1_c2_r3.className = "row align-items-center";

    var patternText = document.createElement("div");
    patternText.textContent = "Pattern";

    var patternSelect = document.createElement("select");
    patternSelect.className = "formInput";
    patternSelect.style = "min-width: 100px"

    var patternSelectDefault = document.createElement("option");
    patternSelectDefault.textContent = "<--Select Pattern-->";
    patternSelect.appendChild(patternSelectDefault);

    brandSelect.onchange = function() {
        /* Remove any old style options */
        while (styleSelect.firstChild) {
            styleSelect.removeChild(styleSelect.firstChild);
        }
        styleSelect.appendChild(styleSelectDefault);
        for (let style in paverData[this.value]) {
            let s = document.createElement("option");
            s.textContent = style.replace("_"," ");
            styleSelect.appendChild(s);
        }
    };

    styleSelect.onchange = function () {
    };


    //construct the third row
    r1_c1_r3.appendChild(brandText);
    r1_c1_r3.appendChild(brandSelect);
    r2_c1_r3.appendChild(styleText);
    r2_c1_r3.appendChild(styleSelect);
    r1_c2_r3.appendChild(patternText);
    r1_c2_r3.appendChild(patternSelect);
    c1_r3.appendChild(r1_c1_r3);
    c1_r3.appendChild(r2_c1_r3);
    c2_r3.appendChild(r1_c2_r3);
    r3.appendChild(c1_r3);
    r3.appendChild(c2_r3);


    //add the buttons
    var applyForm = document.createElement("button");
    applyForm.type = "button";
    applyForm.className = "applyForm formTotalAction";

    var deductForm = document.createElement("button");
    deductForm.type = "button";
    deductForm.className = "deductForm formTotalAction";


    li.appendChild(r1);
    li.appendChild(r2);
    li.appendChild(r3);
    li.appendChild(applyForm);
    li.appendChild(deductForm);

    formsList.appendChild(li);

    //Create the text inputs and select inputs
    //Populate the Brand select input
    //Add onSelect function to Brand select input to populate style options
    //Add onSelect function to Styles select input to populate pattern options

    //add all of this shit to the list item
}