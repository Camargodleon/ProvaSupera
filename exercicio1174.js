var input = [];
var inputsRegistered = 0;

function receiveInput(inputText) {
    inputsRegistered++;
    if (inputsRegistered < 5) {
        document.getElementById('text').value = "";
        input.push(inputText);
        
    } else {
        input.push(inputText);
        document.getElementById('text').disabled = true;
        document.getElementById('btn').disabled = true;
        document.getElementById('text').value = 'Num of defined sets reached';
        output();
    }
}

function output() {
    input = input.map(function (a) {
        return Number(a).toFixed(1);
    });
    for (i = 0; i < input.length; i++) {
        if (input[i] <= 10) {
            document.getElementById('theText').append("X[" + i + "] = " + input[i]);
            document.getElementById('theText').appendChild(document.createElement("br"));
        }

    }
}