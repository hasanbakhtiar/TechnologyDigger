window.onscroll = ()=> {myFunction()};

const myFunction=()=> {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("myP").className = "test";
    document.querySelector("img").className = "show";
  } else {
    document.getElementById("myP").className = "";
    document.querySelector("img").className = "";

  }
}