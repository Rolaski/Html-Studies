function numberInWords(number)
{
    var units = ["", "jeden", "dwa", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć"];
    var teens = ["dziesięć", "jedenaście", "dwanaście", "trzynaście", "czternaście", "piętnaście", "szesnaście", "siedemnaście", "osiemnaście", "dziewiętnaście"];
    var tens = ["", "", "dwadzieścia", "trzydzieści", "czterdzieści", "pięćdziesiąt", "sześćdziesiąt", "siedemdziesiąt", "osiemdziesiąt", "dziewięćdziesiąt"];
    var hundreds = ["", "sto", "dwieście", "trzysta", "czterysta", "pięćset", "sześćset", "siedemset", "osiemset", "dziewięćset"];
    
    if(number == 0)
    {
        return "zero";
    }
    else if(number < 0) 
    {
        return "minus " + numberInWords(number*-1);
    }
    else if(number < 10)
    {
        return units[number];
    }
    else if(number < 20)
    {
        return teens[number - 10];
    }
    else if(number < 100)
    {
        var unit = number % 10;
        return tens[Math.floor(number / 10)] + (unit !== 0 ? " " + units[unit] : "");
    }
    else
    {
        var remainder = number % 100;
        var result = hundreds[Math.floor(number / 100)];
        if (remainder !== 0) 
        {
            result += " " + numberInWords(remainder);
        }
    }
    return result;
}

function number()
{
    let inputNumber = document.getElementById('inputNumber');
    var result = document.getElementById('result');
    var number = inputNumber.value;

    if(number > 999 || number < -999 || isNaN(number))
    {
        console.log("Incorrect number");
    }
    else
    {
        result.innerText = numberInWords(number);

    }
}