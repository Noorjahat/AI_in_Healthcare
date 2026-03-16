document.getElementById("healthForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let gender=document.getElementById("gender").value;
let height=document.getElementById("height").value;
let weight=document.getElementById("weight").value;
let bp=document.getElementById("bp").value;
let heart=document.getElementById("heart").value;
let chol=document.getElementById("chol").value;

let status="Healthy";

if(bp>140 || heart>100 || chol>240){
status="High Risk";
}

let table=document.getElementById("resultTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=gender;
row.insertCell(2).innerHTML=height;
row.insertCell(3).innerHTML=weight;
row.insertCell(4).innerHTML=bp;
row.insertCell(5).innerHTML=heart;
row.insertCell(6).innerHTML=chol;
row.insertCell(7).innerHTML=status;

});