let prompt= require ('prompt-sync')({signit:true});

function calculateGrade(){
input1 = Number(prompt('Enter student marks (between 0-100); '));
if (input1 >= 79 && input1<= 100){
    console.log(`Your grade is A`);
    return ('A');
} else if (input1 >= 60 && input1 <= 79){
    console.log(`Your grade is B`)
    return ('B');
} else if (input1 >= 49 && input1 <= 59){
    console.log(`Your grade is C`)
    return ('C');
} else if (input1 >= 40 && input1 <= 49){
    console.log(`Your grade is D`)
    return ('D');
} else if (input1 <= 40 && input1 >= 0){
    console.log(`Your grade is E`)
    return ("E");
} else {
    console.log("Input a mark between 0-100");
}
}
calculateGrade();