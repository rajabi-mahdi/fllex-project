window.onload = function (){
    document.querySelector(".nav__bar").addEventListener("click",function (){
        document.querySelector('.nav__menu').style = "transform:translateX(0);transition: transform 1500ms ease-in-out;";
    })
    document.querySelector(".close").addEventListener("click",function (){
        document.querySelector('.nav__menu').style = "transform:translateX(-100%);transition: transform 1500ms ease-in-out;";
    })
}