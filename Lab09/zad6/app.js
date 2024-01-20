function reverse() {
    let reverseText = text();
    let array = reverseText.split(" ");
    array = array.reverse();

    var outputText = document.getElementById('outputText');
    outputText.innerHTML = "";
    for (let i = 0; i < array.length; i++) 
    {
        outputText.innerHTML += array[i]+" ";
    }
}

function text(inputText) {
    var inputText = document.getElementById('inputText');
    return inputText.value;
}
