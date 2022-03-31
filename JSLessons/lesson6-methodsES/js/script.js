// const app = function (){
//     return 'Hello'
// }

// function(){}
// ()=>{}


// const app=()=>{
//     return"hello1";
// }


// console.log(app());
// ECMA
//for (let index = 0; index < 10; index++) {
//     console.log(`js ${index}`);
// }


// function () {
    
// }

class human {
    constructor(a){
        this.name = a;
    }


    live(){
        return this.name + ' live';
    }

    calculateAge(myTime){
        return new Date().getFullYear()-myTime;
    }

    drinkTea(name,teaName){
        return `Im ${name}, I like ${teaName}`;
    }
}



class animal extends human{

    eatGrass(animalName){
        return `${animalName} eat grass`;
    }

   

}


const myHuman = new human("Jhon");
const myAnimal = new animal("Cow");

console.log(myHuman.live());
console.log(myHuman.calculateAge(2003));
console.log(myHuman.drinkTea("Jhon","qaracay"));
console.log(myAnimal.eatGrass("Cow"));
console.log(myAnimal.calculateAge(2010));
console.log(myAnimal.live());