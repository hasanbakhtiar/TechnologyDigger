let day = 20;
let cowCount = 1;
let milk = 3;
let money = 3;

let earnMilk = cowCount*(milk*day);
let earnMoney = earnMilk*money;
console.log(earnMoney);

if(earnMoney = 300){
    cowCount=2;
    earnMilk = earnMilk*cowCount;
    earnMoney = earnMoney*earnMilk;
    for (let index = 1; index <= cowCount; index++) {
        console.log("Cow"+index);
        
    }
    console.log(earnMoney);


}

