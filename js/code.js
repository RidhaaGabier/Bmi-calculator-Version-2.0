//Naming convention

function bmi(){

//declaring variables

let height = parseInt(document.getElementById('height').value);

let weight = parseInt(document.getElementById('weight').value);

//calculation

let bmi = (weight/height**2) * 10000

document.getElementById('output').value = bmi.toFixed(2)


//conditions

if(bmi<18.4){
    document.getElementById('output').value = bmi.toFixed(2) + ' You are underweight';
}

else if(bmi >= 18.5 && bmi <=24.9){
    document.getElementById('output').value = bmi.toFixed(2) + ' You are normal weight';
}

else if(bmi >=25.0 && bmi <=39.9){
    document.getElementById('output').value = bmi.toFixed(2) + ' You are overweight';
}

}




