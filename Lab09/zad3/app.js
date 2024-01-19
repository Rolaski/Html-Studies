function palindrom()
{
    let inputText = document.getElementById('inputText');
    var text = inputText.value.toLowerCase().replace(/[^a-ząćęłńóśźż]/g, '');
    var textLength = text.length;

    console.log(text);
    console.log(textLength);

    var isPalindrome = true;
    for (var i = 0; i < textLength / 2; i++) 
    {
        if (text[i] !== text[textLength - 1 - i]) 
        {
            isPalindrome = false;
            break;
        }
    }

    console.log("Czy to palindrom:", isPalindrome);
}
