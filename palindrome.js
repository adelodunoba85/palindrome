function palindrome() {
    let word = (document.getElementById("word").value);

    word = word
    let word2 = "";
    wordSplit=word.split("");


    let i = 1;
    let output;

    while (i <= word.length) {
        word2 = word2.concat(wordSplit[wordSplit.length - i]);
        i++;
    }

    if (word.toLowerCase() === word2.toLowerCase()) {
        output = `${word.toUpperCase()} is a palindrome`;
    } else {
        output = `${word.toUpperCase()} is not a palindrome`;
    }

    /*
    for (let i=1; i<=word.length;++i){
    
        word2 = word2.concat(wordSplit[wordSplit.length-i]);
    
    }
    if (word.toLowerCase()==word2.toLowerCase()){
         output = `${word.toUpperCase()} is a palindrome`;
    }
    else {
        output = `${word.toUpperCase()} is not a palindrome`;

    }
    */

    displayResult(output); // Call the displayResult function;
}


function displayResult(result) {
    document.getElementById('result').textContent = result; // Display the result on the HTML page
}