// This is the function that resets the input text field
function resetFunction(){
    let reset = document.getElementById("input").value = "";
    console.log(reset);
}

function palindromeFunction() {
    const str = document.getElementById("input").value;
    const alphaNumeric = str.toLowerCase().match(/[a-z0-9]/g);
    let a = (alphaNumeric.join("") === alphaNumeric.reverse().join("")) ? document.getElementsByClassName("output-images").innerHTML = `${str} is a palindrome` : document.getElementsByClassName("output-images").innerHTML = `${str} is not a palindrome`;

    console.log(a);
}


//   




