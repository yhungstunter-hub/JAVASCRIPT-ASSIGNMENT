//Question 1

const userAge = Number(prompt("Enter your age"))

if(userAge >= 18){
    console.log("You are old enough to drive");  
}else{
    console.log(`${18 - userAge} years to drive`)
}

//Question 2

const myAge = Number(prompt("Enter my age"));
const yourAge = Number(prompt("Enter your age"));

if(myAge > yourAge){
    console.log("I am  older")
}else if(yourAge > myAge){
    console.log("You are older")
}else{
    console.log("We are the same age")
}


//Question 3

const a = 4;
const b = 3;
if(a > b){
    console.log("a is greater than b")
}else{
    console.log("a is less than b")
}

//ternary operator
const c = 4;
const d = 3;

console.log(c > d? "a is greater than b": "a is less than b")

//Question 4

const number = 8; 
if(number % 2 === 0){
    console.log("the number is even")
}else{
    console.log("the number is odd")
}

//Question 5

const gradescore=90;
switch(true){
    case gradescore >= 80 && gradescore <= 100:
        console.log("Grade A");
        break;
        case gradescore >= 70 && gradescore <= 79:
            console.log("Grade B");
            break;
            case gradescore >= 60 && gradescore <= 69:
                console.log("Grade C");
                break;
                case gradescore >= 50 && gradescore <= 59:
                console.log("Grade D");
                break;
                case gradescore >= 0 && gradescore <= 49:
                console.log("Grade E");
                break;

                default:
                    console.log("NO GRADING") ;
                    break;
}

