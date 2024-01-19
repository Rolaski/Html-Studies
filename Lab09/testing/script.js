function handler(event) 
{
    console.log('Został wciśnięty przycisk');
}

function handler2(event)
{
    var btn2 = document.getElementById('btn2');
    if(btn2.innerText == "pajac")
    {
        btn2.innerText = "debil"
    }
    else
    {
        btn2.innerText = "pajac"
    }
}
   