const box = document.querySelector(".a");
const p = document.createElement("p");
box.appendChild(p);
// setInterval(() => {
//   p.innerHTML = new Date();
// }, 1000);
// setTimeout(() => {
//     p.innerHTML = new Date();
//   }, 1000);

// setTimeout(alert('hello'),2000);
// clearInterval();
// setInterval(()=>{alert('hello')}, 2000);
// clearTimeout();

// let say = 0;

// const sayac=()=>{
//     p.innerHTML = say;
//     say=say+1;
//     setTimeout(sayac,1000);
// }
// sayac()

// localStorage.setItem('name',"Senan");
// localStorage.setItem('surname',"Adigozelov");
// localStorage.removeItem('name');
// localStorage.clear();
// p.innerHTML = localStorage.getItem('surname');

const btnMode = document.querySelector(".mode");
const header = document.querySelector("header");
const link = document.querySelectorAll('a');
const mode=()=>{
    if (btnMode.innerHTML == "dark") {
        const modeName = "dark"; 
        header.className = modeName;
        link.className = modeName;
        localStorage.setItem('mode', modeName);
        btnMode.innerHTML = 'light';

    }else{
        const modeName = "light"; 
        header.className = modeName;
        link.className = modeName;
        localStorage.setItem('mode', modeName);
        btnMode.innerHTML = 'dark';
    }
}

header.className = localStorage.getItem("mode");
link.className = localStorage.getItem("mode");
btnMode.addEventListener('click',mode);



const langBtn = document.querySelector('.lang');

const az = ['Ana Sehife','Haqqimizda','Mehsullar','Elaqe'];
const en = ['Home','About','Product','Contact'];


const multiLang =()=>{
    if (langBtn.innerHTML == "az") {
        for(let x = 0; x<az.length;x++){
            link[x].innerHTML = az[x];
        }
        localStorage.setItem('lang',az);
        localStorage.setItem('langBtn','en');

        langBtn.innerHTML = "en";
    }else{
        for(let x = 0; x<en.length;x++){
            link[x].innerHTML = en[x];
        }
        localStorage.setItem('lang',en);
        localStorage.setItem('langBtn','az');
        langBtn.innerHTML = "az";


    }
}

langBtn.innerHTML = localStorage.getItem('langBtn');
for(let x = 0; x<en.length;x++){
    link[x].innerHTML = localStorage.getItem('lang').split(',')[x];
}
langBtn.addEventListener('click',multiLang)
