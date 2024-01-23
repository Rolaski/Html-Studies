var button = document.getElementById('button');

button.addEventListener('click', function(e) 
{
    e.preventDefault();
    check();
});

function check()
{
    var specialCharacters = document.getElementById('specialCharacters').value;
    var length = document.getElementById('length').value;
    var lowercase = document.getElementById('lowercase').checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    var uppercase = document.getElementById('uppercase').checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    var numbers = document.getElementById('numbers').checked ? "0123456789" : "";

    if(specialCharacters == "" || length == "")
    {
        alert("Please fill fields");
    }
    else if(length < 8 || length > 100)
    {
        alert("Length must be between 8 and 100");
    }
    else if(!lowercase && !uppercase && !numbers)
    {
        alert("At least one character type must be selected");
    }
    else
    {
        var password = passwordGenerator(specialCharacters, length, lowercase, uppercase, numbers);
        var output = document.getElementById('output');
        output.innerHTML = password;
    }

}

function passwordGenerator(specialCharacters, length, lowercase, uppercase, numbers) {
    var characters = "";
    var charSets = [specialCharacters, lowercase, uppercase, numbers];

    for (let i = 0; i < length; i++) 
    {
        var randomNumber = Math.floor(Math.random() * charSets.length);
        var selectedSet = charSets[randomNumber];

        if (selectedSet && selectedSet.length > 0) 
        {
            characters += selectedSet.charAt(Math.floor(Math.random() * selectedSet.length));
        } 
        else 
        {
            i--; 
        }
    }

    return characters;
}

