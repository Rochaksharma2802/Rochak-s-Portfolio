// ----------------------JS FOR SERVICES PART---------------------------
// alert("Hello world");
var content1= document.querySelector("#Content1 ul");
var content2= document.querySelector("#Content2 ul");
var content3= document.querySelector("#Content3 ul");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function openSkills(){
    content1.style.transform = "translateX(0)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(100%)";
    btn1.style.color = "#ff004f";
    btn2.style.color = "#000";
    btn3.style.color = "#000";

}
function openExperience(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(0)";
    content3.style.transform="translateX(100%)";
    btn2.style.color = "#ff004f";
    btn1.style.color = "#000";
    btn3.style.color = "#000";
}
function openEducation(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(0)";

    btn3.style.color = "#ff004f";
    btn2.style.color = "#000";
    btn1.style.color = "#000";
}