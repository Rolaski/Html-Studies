function validation(event)
{
    event.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm').value;

    var alertSection = document.getElementById("alertSection");

    if(name == "" || age == "" || password == "" || confirmPassword == "")
    {
        alertSection.innerText = "fields cannot be empty";
    }
    else if(password != confirmPassword)
    {
        alertSection.innerText = "passwords do not match";
    }
    else if(!isNaN(name))
    {
        alertSection.innerText = "name cannot be a number";
    }
    else
    {
        let person = {name: name, age: age, password: password, confirmPassword: confirmPassword};
    console.log(person);
    }

    
}