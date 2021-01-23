// variable declaration
var fn;
var sn;
var age;
var birthYear;
var job;


let tempAge;
let elligbleToVote;

// array
let familyMember = new Array();
let numberOfFamily;

// height and weight
let weight;
let height;

// bmi calculator
let calcBmi= function (weight, height){
    let bmi = (weight)/(height * height);

    bmi = Number(bmi.toFixed(1));

    console.log("Your Bmi is : " + bmi);
    if (bmi < 18.5)
        console.log("Your are : Underweight");
    else if (bmi >= 18.5 && bmi <= 24.9)
        console.log("Your are : Normal/Healthy");
    else if (bmi >= 25.0 && bmi <= 29.9)
        console.log("Your are : Overweight");
    else if (bmi >= 30.0)
        console.log("Your are : Obese");
}



// receive value from input
fn=prompt("your first name? ");
sn=prompt("your last name? ");
birthYear=prompt("your dob? ");
job=prompt("your job? ");
weight=prompt("input your weight in kilograms: ");
height=prompt("input your height in meters: ");
numberOfFamily=prompt("how many family members do you have ?");


// number age
tempAge=calcAge (birthYear);
if(tempAge >= 18){
    elligbleToVote = true;
   
}
else {elligbleToVote=false;
}


// receive each family member
for (let index = 0; index< parseInt(numberOfFamily); index++) {
    familyMember[index] = prompt("Your Family  Members " + (index + 1));
}
// display family list











// function age calculator
function calcAge(birthYear){
    return new Date().getFullYear()- birthYear;
}

// self invoking function output

(function(){
console.log("Here is your Profile ")
console.log("Full Name: " + fn+ " "+sn);
console.log("Profession : " + job);
console.log("Age : " + tempAge + " " + "years old");
console.log("can you vote" +" " + elligbleToVote);
console.log("Family members ");

familyMember.forEach(function(member, index){
    console.log("Family Member  " + (index + 1) + " : " + member);
});

calcBmi(weight,height);

}
)();

