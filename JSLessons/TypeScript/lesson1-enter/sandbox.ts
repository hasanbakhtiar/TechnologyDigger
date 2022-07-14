// let infoOne : number;
// let infoTwo : string;
// let infoThree : boolean;

// infoOne = 5;
// infoTwo = "Hello";
// infoThree = true;

// console.log(infoOne);
// console.log(infoTwo);
// console.log(infoThree);



// let infoArr : Array<number> = [1,2,3,4,5];
// let infoArr : Array<number> 
// infoArr = [1,2,3,4,5];
// console.log(...infoArr);

// let infoArr : number[];
// infoArr = [1,2,3,4];
// console.log(...infoArr);

// ? -> optional deyerin verilmeyeceyi halda verilir
// viod istifade olunan funksiyada return etmek olmaz
// function infoFunc(val:string,val1?:number):void {
//      return val + val1;
// }

// console.log(infoFunc("Hello"));

// const infoArr =():void=>  {
//      'Hello';
// }



class Person{

    public iname:string;
    public isurname:string;
    public iage:number;

    constructor(name:string,surname:string,age:number){
        this.iname = name;
        this.isurname = surname;
        this.iage = age;
    }
}

class Employee extends Person{
    isalary:number;

    constructor(name:string,surname:string,phone:number,salary:number){
        super(name,surname,phone);
        this.isalary = salary;
    }
}

const infoPerson = new Person("Arthur ","Morgan",41);
const infoEmployee = new Employee("Arthur","41",777,1000);

console.log(infoPerson.iname+infoPerson.isurname);




