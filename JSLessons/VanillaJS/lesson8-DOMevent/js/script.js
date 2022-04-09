// const newText = document.querySelector('h1');
// const btn = document.querySelector('button');
// const addText = ()=>{
//     newText.innerHTML = "Hello";
// }

// const clearText = ()=>{
//     newText.innerHTML = "";
// }

// btn.addEventListener('toggle',addText);
// // btn.addEventListener('dblclick',clearText);








const input1 = document.querySelector('.input1');
const btn = document.querySelector('button');

const textChange1 = ()=>{
    input1.style.background="red";
}

const textChange2 = ()=>{
    input1.style.background="none";
}

btn.addEventListener('mousedown', textChange1);
btn.addEventListener('mouseup', textChange2);

