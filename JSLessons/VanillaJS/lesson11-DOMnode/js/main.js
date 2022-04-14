// document.querySelector("p").innerHTML =
// document.querySelector("ul").childNodes[1].firstChild.nodeValue;
//   document.querySelector("li").previousSibling.firstChild.nodeValue;
// document.querySelector('a').parentNode.childNodes[0].nodeValue;

// const p = document.querySelector('p');
// // const a = document.querySelector('button:nth-child(1)');
// // const b = document.querySelector('button:nth-child(2)');
// const a = document.querySelectorAll('button')[0];
// const b = document.querySelectorAll('button')[1];
// a.addEventListener('click',()=>{
//        p.classList.toggle('text');
// });
// b.addEventListener('click',()=>{
//     p.style.background = "white";

// })


// const span = document.createElement('span');
// const text = document.createTextNode('HelloNew');
// span.appendChild(text);
// const div = document.querySelector('div');
// div.appendChild(span);


const input = document.querySelector('.todoinput');
const inBtn = document.querySelector('.todo');
const todoItem = document.querySelector('.todoitem');

const addtodo=()=>{
    const p = document.createElement('p');
    p.innerHTML = input.value;
    todoItem.appendChild(p);
    input.value= "";
    p.addEventListener('click',()=>{
        p.style.textDecoration = 'line-through';
    })
    p.addEventListener('dblclick',()=>{
        p.remove();
    })
}

inBtn.addEventListener('click',addtodo);
