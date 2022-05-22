








const requestButton =document.getElementById('request');




requestButton.addEventListener('click',()=>{

let inputHeight= document.getElementById("height").value;
let inputWidth= document.getElementById("width").value;
let filename=document.getElementById("filename").value;

let urlString=`http://localhost:3000/api/images/?filename=${filename}&width=${inputWidth}&height=${inputHeight}`;

 requestButton.firstChild.setAttribute("href",urlString);



});

