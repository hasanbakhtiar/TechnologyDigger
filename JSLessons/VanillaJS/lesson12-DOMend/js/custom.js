// document.querySelector("a").accessKey = "a";

// const newDate = () => {
//   const myDate = new Date().getMilliseconds();
//   document.querySelector("p").innerHTML = myDate;
// };



// setInterval(newDate, 1); //1000ms = 1s

// const myText = document.querySelector('p');

// const incrementCount=()=>{
//   alert('Hello');
// }

// setTimeout(incrementCount,3000);
// clearTimeout(incrementCount,3000);

// setInterval
// clearInterval


const input = document.querySelector('input');
const btn = document.querySelector('button');
const p = document.querySelectorAll('p');

const myArr = ["Home","About","Contact"];
input.addEventListener('change',(e)=>{
    let x = e.target.value;
    myArr.push(x);
})
const menu =()=>{

    for(let a = 0; a<myArr.length; a++){
        p[a].innerHTML = myArr[a];
    }
    
}
btn.addEventListener('click', menu);

// myArr.pop();
// myArr.push("machine");
// myArr.shift()
// myArr.unshift("Hello1")
// console.log(myArr);

