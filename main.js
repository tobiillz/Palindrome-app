
//let outImage = document.getElementById  

function palindromeFunction(str) {
    const str = document.getElementById("input").value;
    const alphaNumeric = str.toLowerCase().match(/[a-z0-9]/g);
    (alphaNumeric.join("") === alphaNumeric.reverse().join("")) ? document.getElementByClass("output-images").innerHTML = `${str}` : document.getElementByClass("output-images").innerHTML = `${out}`;
    //return out;
  }


// This is the function that resets the input text field
function resetFunction(){
    document.getElementById("input").value = "";
}


/*
//
function aPalindrome(){
    let outPut = document.getElementByClass("output-images").innerHTML = `${out}`;
    return outPut;
}

function notPalindrome(){
    let outPut = document.getElementByClass("output-images").innerHTML = "Nope!!!"
    return outPut;
     
}
*/
