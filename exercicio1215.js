var dictionary = [];

function start(giganticText) {
    array = giganticText.split(/[\,\ \.\!\?\n]/);

    array = array.sort(function(a,b){
        a = a.toUpperCase();
        b = b.toUpperCase();
        return a.localeCompare(b);
    });
    uniques = [...new Set(array)]; //search more about this syntax
    for(i=0;i<uniques.length;i++){
        document.getElementById('theText').append(uniques[i]);
        document.getElementById('theText').appendChild(document.createElement("br"));
    }
}

function verifyAndInsert(wordToInsert){

}