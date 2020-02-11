
var numberOfSetsChoosen = 0; //fist input, defines the size of the set
var numberOfSetsRegistered = 0; //control variable
var lines = []; //set of all strings


function start(inputText) {
    document.getElementById('text').value = "";
    if (numberOfSetsChoosen === 0) { //see comment on validateNumberOfSets function
        numberOfSetsChoosen = inputText;
        document.getElementById("header").innerHTML = "Insert String";
    } else {
        numberOfSetsRegistered++;
        lines.push(inputText);
    }
    validateNumberOfSets();
}

//since the size of the set is defined by the first input, there has to be a
//limit for the user input. This method handles this logic
function validateNumberOfSets() {
    if (numberOfSetsRegistered >= numberOfSetsChoosen) {
        document.getElementById('text').disabled = true;
        document.getElementById('btn').disabled = true;
        document.getElementById('text').value = 'Num of defined sets reached';

        orderAll();//main alorithm's logic that's reached after the user inputs all sets
        output();
    }
}
function orderAll() {
    //here i'll first order the set based on it's length
    lines.sort(function (a, b) { return b[0].length - a[0].length });
    for (i = 0; i < lines.length; i++) {
        lines[i] = backToString(order(lines[i].split(' ')));
    }

}

function order(thisArray) {
    thisArray.sort(function (a, b) { return b.length - a.length });
    return thisArray;
}

function backToString(anotherArray) {
    return anotherArray.join(' ');
}

function output() {
    //algorithm's output
    document.getElementById('theText').append('Output: ');
    document.getElementById('theText').appendChild(document.createElement("br"));
    for (i = 0; i < lines.length; i++) {
        document.getElementById('theText').append(lines[i]);
        document.getElementById('theText').appendChild(document.createElement("br"));
    }
}
