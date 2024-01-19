function pangram()
{
    let inputText = document.getElementById('inputText');
    var text = inputText.value.toLowerCase().replace(/[^a-z]/g, '');

    var letterCount = {};

    //sprawdzamy liczbę wystąpienia danego znaku
    for(let i=0; i<text.length; i++)
    {
        let currentLetter = text[i];
        if(letterCount[currentLetter] == undefined)
        {
            letterCount[currentLetter] = 1;
        }
        else
        {
            letterCount[currentLetter]++;
        }
    }
    console.log(text);
    console.log(letterCount);

    //sprawdzamy czy to pangram
    var isPangram = true;
    for(let i=0; i<26; i++)
    {
        var char = String.fromCharCode(i + 97);
        if(letterCount[char] === undefined)
        {
            isPangram = false;
            break;
        }
    }
    console.log("Czy to pangram:", isPangram);
    console.log("=====================");
}