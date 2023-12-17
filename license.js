let prompt= require ('prompt-sync')({signit:true});

function letSpeed (){
    let input1 = Number(prompt("Enter the speed of the car: "));
    let speedLimit = 70
    let speedThreshold = 12;

    if (input1 < speedLimit){
        console.log("Ok");
    } else {
        let points2Deduct = Math.floor((input1 - speedLimit)/5);
        console.log (points2Deduct);
        if (points2Deduct > speedThreshold){
            console.log("License suspended")
        } else{
            console.log(`Points ${points2Deduct}`)
        }
    }
}

letSpeed()
