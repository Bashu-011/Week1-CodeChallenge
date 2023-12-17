let prompt= require ('prompt-sync')({signit:true});

function kraDeduction(input1){
    if (input1 <= 24000){
        return (input1 * (10/100))
    } else if (input1 >= 24000 && input1 <= 32333){
        return (input1 * (25/100));
    } else if (input1 >= 32334 && input1 <= 500000){
        return (input1 * (30/100));
    } else if (input1 >= 500001 && input1 <= 800000){
        return (input1 * (32.5/100));
    } else {
        return (input1 * (35/100));
    }
    }

function nhifDeduction(input1){
    if (input1 < 6000){
        return (150); 
    } else if (input1 >= 6000 && input1 < 20000){
        return(450);
    } else if (input1 >= 20000 && input1 < 40000){
        return(860)
    } else if (input1 >= 40000 && input1 < 60000){
        return(1100);
    } else if (input1 >= 60000 && input1 < 80000){
        return(1350);
    } else if (input1 >= 80000 && input1 < 100000){
        return(1650);
    } else{
        return(2000);
    }
}

function nssfDeduction(input1){
    if (input1 <= 30000){
        return (360);
} else {
    return(720)
}
}

function HLDeduction(input1){
    return ((1.5/100) * input1);
}


function finalPaye(kraDeduction, HLDeduction, nhifDeduction, nssfDeduction){
    let input1 = Number(prompt("Enter your salary: "));
    let a = kraDeduction(input1);
    let b = nhifDeduction(input1);
    let c = HLDeduction(input1);
    let d = nssfDeduction(input1);
    let totalDeductions = a + b + c + d;
    let netPaye = input1 - totalDeductions;
    console.log(`Your Gross Pay is ${input1}. Your total deductions are \n${totalDeductions} and your net pay is ${netPaye}`)
}

finalPaye(kraDeduction, HLDeduction, nhifDeduction, nssfDeduction);