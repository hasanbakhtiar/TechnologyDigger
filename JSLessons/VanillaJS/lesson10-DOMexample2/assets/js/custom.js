const header = document.querySelector("header");
const ul = document.querySelector("ul");
const btn = document.querySelector(".mode");

const mode = () => {
  // if (header.className == 'light-header') {
  //     header.className = 'dark-header';
  // ul.className = 'dark-text';
  // }else{
  //     header.className = 'light-header';
  //     ul.className = 'light-text';
  // }

  header.classList.toggle("dark-header");
  ul.classList.toggle("dark-text");
};

btn.addEventListener("click", mode);

const lang = document.querySelector(".lang");
const item = document.querySelectorAll("ul>li>a");

const newLang = () => {
  if (lang.innerHTML == "AZ") {
    lang.innerHTML = "EN";
    for (let a = 0; a < 10; a++) {
      item[a].innerHTML = "new";
    }
  }else{
    lang.innerHTML = "AZ";
    for (let a = 0; a < 10; a++) {
        item[a].innerHTML = "Text List";
      }
    }
};

lang.addEventListener("click", newLang);
