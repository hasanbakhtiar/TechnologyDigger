// LOOPS

// While loop

// let a = 10;

// while (a >= 1) { //shert
//     console.log(a);//nectice
//     a-=2;//hadise
// }
// =====================================================================
// do while loop

// let b = 1;

// do {//netice
// console.log(b);
// document.write(b+"JavaScript<br>");

// //hadise
//     b++;
// } while (b<10);//shert
// =====================================================================
// for loop
/* for(deyishken;shert;hadise){
    * netice
 }*/

// let r = 10
// for(let x = 1; x<r;x++){
//     console.log(x);
//     console.log("Hello");
// }

// =====================================================================
// let a = ["table","desk","pen"];

// console.log(a);

// for (const x in a) {
//    console.log(a[x]);
// }

// =====================================================================
// index deyeri 0dan bashlayir.
// let info = ["table","pen",5];
// info[3] = 'new';

// let info = [];
// info[0] = "table1";
// info[1] = "table2";
// info[2] = "table3";

// let pen = 'my pen';
// let info = [pen,'hi'], infoOne = ['my array'];
// console.log(infoOne);

// let info = ["table","pen",5];
// info["myindex"] = "new table";
// console.log(info["myindex"]);

// let info = [
//   "pen",
//   "table",
//   "book",
//   ["cat", "dog", [1, 2, 3], true],
//   "pencil",
//   "desk",
// ];
// console.log(info[3][2][0]);

// const car = {
//     name:"BMW",
//     model:"X5",
//     year:2021,
//     salon:['full','deri',{
//             deri:true,
//             full:false
//     }],
//     doortype:{
//         sportStyle: 2,
//         generalStyle:4
//     }

// }

// console.log(car.salon[2].deri);
// console.log(car.doortype.sportStyle);

// function myFunc (){
//     let a = 5;
//     console.log(a);
// }
// myFunc();

// const myFunc = function (){
//     let a = "Hello";
//     console.log(a);
// }
// myFunc();

// const myFuncOne = function (a){

//     console.log(a);
// }
// myFuncOne("Hello");

// ozu-ozunu cagiran funksiya
// (function myFunc (){
//     let a = "Hello";
//     console.log(a);
// })()

// (function myFunc (a){

//     console.log(a);
// })("Hello")

// function(params){
//     //action
// }

// function myFunc (a,b){
//     return a + b;
// }
// console.log(myFunc(10,20));

// const myObj ={
//     action:function(a){
//         return a;
//     }
// }

// const myArr = [
//     function(a){
//         return a;
//     }
// ]

// console.log(myArr[0]("Hello"));
// console.log(myObj.action("new action"));

const myTime = 4;
const defaultTime = 3;
const myWorkTime = myTime * defaultTime;

let allprduct = {
  product1: ['duyu','pomidor','xiyar'],
  product2: 5,
  product3: 2,
  product4: 1,
};

function myEarn(a){
    if (a > 10) {
    
         for (let key in allprduct.product1) {
             console.log(allprduct.product1[key]);
        };

    }
    else{
        console.log('no product');
    }
}
myEarn(myWorkTime);
