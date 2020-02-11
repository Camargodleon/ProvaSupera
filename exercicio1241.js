
var numberOfSetsChoosen = 0; //fist input, defines the size of the set
var numberOfSetsRegistered = 0; //control variable
var input = []; //set of all strings


function start(inputText) {
    document.getElementById('text').value = "";
    if (numberOfSetsChoosen === 0) { 
        numberOfSetsChoosen = inputText;
        document.getElementById("header").innerHTML = "Insert pair of numbers";
    } else {
        numberOfSetsRegistered++;
        input.push(inputText);
    }
    validation();
}

function validation() {
    if (numberOfSetsRegistered >= numberOfSetsChoosen) {
        document.getElementById('text').disabled = true;
        document.getElementById('btn').disabled = true;
        document.getElementById('text').value = 'Num of defined sets reached';

        mainLogic();
    }
}

function mainLogic() {
    for (i = 0; i < input.length; i++) {
        auxArray = input[i].split(' ');
        if(auxArray[0].charAt(auxArray[0].length-1) == auxArray[1].charAt(auxArray[1].length-1) && Number(auxArray[0]) >= Number(auxArray[1])){
            document.getElementById('theText').append('encaixa');
            document.getElementById('theText').appendChild(document.createElement("br"));
        }else{
            document.getElementById('theText').append('nao encaixa');
            document.getElementById('theText').appendChild(document.createElement("br"));
        }
    }
    
}
