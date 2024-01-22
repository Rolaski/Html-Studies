var list = document.getElementsByTagName("li");

// var style = document.createElement("style");
// style.innerHTML = "li:nth-child(odd){color:red;}";
// document.head.appendChild(style);

for (let i = 0; i < list.length; i++) 
{
    if(i%2 == 0)
    {
        list[i].style.backgroundColor = "#99ccff";
    }
    else
    {
        list[i].style.backgroundColor = "#6699ff";
    }

}