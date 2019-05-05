function setter1(){
  if(($('category').val())&&($('comment').val())&&($('product').val())&&($('price').val()))
    alert("Enter The Required Field");
  else {
    setInterval(function(){ alert("Hello"); }, 3000);
    getdata1();
    setInterval(function(){ alert("Hello"); }, 3000);
  }


}

function getdata1(){
  setInterval(function(){ alert("Hello"); }, 3000);
var category1,name1,to,from,price1;
category1=document.getElementById('category1').value;
name1=document.getElementById('product1').value;
from=document.getElementById("from1").value;
to=document.getElementById("to1").value;
price1=document.getElementById("price1").value;
alert("bhjhjbj");
console.log(price1);
localStorage.setItem("name1", name1);
localStorage.setItem("category1", category1);
localStorage.setItem("1a","1")
localStorage.setItem("To", to);
localStorage.setItem("price1",price1);
localStorage.setItem("From", from);
localStorage.setItem("1a","1");
alert("kjjk");
}
