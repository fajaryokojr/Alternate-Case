var alternateCase = function(str) {
    var letters = str.split("");

    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toLowerCase()) {
            letters[i] = letters[i].toUpperCase();
        } else {
            letters[i] = letters[i].toLowerCase();
        }
    }
    str = letters.join("");
    console.log(str);
}

var text = 'hELLO wORLD';

alternateCase(text);