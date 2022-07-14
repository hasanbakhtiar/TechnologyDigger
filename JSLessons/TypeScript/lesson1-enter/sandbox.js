// let infoOne : number;
// let infoTwo : string;
// let infoThree : boolean;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.iname = name;
        this.isurname = surname;
        this.iage = age;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, phone, salary) {
        var _this = _super.call(this, name, surname, phone) || this;
        _this.isalary = salary;
        return _this;
    }
    return Employee;
}(Person));
var infoPerson = new Person("Arthur ", "Morgan", 41);
var infoEmployee = new Employee("Arthur", "41", 777, 1000);
console.log(infoPerson.iname + infoPerson.isurname);
