function check() 
{
    var chekboxes =document.querySelectorAll("input[type='checkbox']");
    var checkboxesChosen = [];

    chekboxes.forEach(function(checkbox) 
    {
        if (checkbox.checked) 
        {
            checkboxesChosen.push(checkbox.value);
        }
    });
    console.log(checkboxesChosen);
}
