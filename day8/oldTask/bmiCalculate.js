function bmi() 
{
    let name = document.getElementById("nameInput").value;
    let weight = document.getElementById("weightInput").value;
    let height = document.getElementById("heightInput").value;
    let bmi = weight / (height * height);

    document.getElementById("bmitext").innerHTML = "هلا " + name + " BMI: " + bmi;
    
}

