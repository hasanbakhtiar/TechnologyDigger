// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   document.querySelector("p").innerHTML = persons.map(getFullName);
  
//   function getFullName(item) {
//     return [item.lastname].join(" ");
//   }





// function Car(carName,brandName){
//     this.name = carName;
//     this.brand = brandName;
// }
// Car.prototype.year = 2022;


// const myCar  =  new Car("BMW","X5");
// document.querySelector('p').innerHTML = myCar.name;
// document.querySelector('p').innerHTML = myCar.brand;
// document.querySelector('p').innerHTML = myCar.year;







// https://www.w3schools.com/js/js_math.asp


// Property	Description
// MAX_VALUE	Returns the largest number possible in JavaScript
// MIN_VALUE	Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
// NaN	Represents a "Not-a-Number" value




// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x + "<br>";
// }

// document.querySelector('p').innerHTML = text;

// document.querySelector("button").addEventListener("click", () => {
//     let x = 9.656;
//     document.querySelector("p").innerHTML = 
//     x.toPrecision() + "<br>" +
//     x.toPrecision(2) + "<br>" +
//     x.toPrecision(4) + "<br>" +
//     x.toPrecision(6);


// document.querySelector("p").innerHTML = 
//   parseFloat("10") + "<br>" +
//   parseFloat("10.33") + "<br>" +
//   parseFloat("10 6") + "<br>" +  
//   parseFloat("10 years") + "<br>" +
//   parseFloat("years 10");

    
//     let x = 9.656;
    
// document.querySelector("p").innerHTML =
//   x.toFixed(0) + "<br>" +
//   x.toFixed(2) + "<br>" +
//   x.toFixed(4) + "<br>" +
//   x.toFixed(6   );
    
    
//     let x = 9.65649534534;
    
//   document.querySelector("p").innerHTML =
// //   x + "<br>"
//     x.toExponential() +
//     "<br>" +
//     x.toExponential(2) +
//     "<br>" +
//     x.toExponential(4) +
//     "<br>" +
//     x.toExponential(6);
// });
