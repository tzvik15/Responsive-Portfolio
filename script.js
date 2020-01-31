let firstTime = localStorage.getItem('first');

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close-btn")[0];

$("#btn1").on("click", ()=>{
    window.location.href ="projects/bonez.html";
})

$("#btn2").on("click", ()=>{
    window.location.href="projects/python.html";
})

$("#btn3").on("click", ()=>{
    window.location.href="projects/weather.html";
})

$("#btn4").on("click", ()=>{
    window.location.href="projects/bassoon.html";
})

$("#btn5").on("click", ()=>{
    window.location.href="projects/burger.html";
})

$("#btn6").on("click", ()=>{
    window.location.href="projects/flintz.html";
})

$("#btn7").on("click", ()=>{
    window.location.href="projects/rest.html";
})

