$('document').ready(function(){
  //console.log(document.getElementById('a3').innerHTML);
  document.getElementById('b6').innerHTML="";
  document.getElementById('b7').innerHTML="";
  document.getElementById('b8').innerHTML="";
  document.getElementById('c6').innerHTML="";
  document.getElementById('c7').innerHTML="";
  document.getElementById('c8').innerHTML="";

  sendata();
});
//var name,price,category,description;
/*function getdata(){
  name=document.getElementById('product').value;
  price=document.getElementById('price').value;
  description=document.getElementById('comment').value;
  category=document.getElementById('category').value;
  console.log(name);
  console.log(price);
  console.log(category);
}
*/
function sendata(){
  document.getElementById('a1').innerHTML=localStorage.getItem("id");
  document.getElementById('a2').innerHTML=localStorage.getItem("date");
  document.getElementById('a3').innerHTML=localStorage.getItem("name");
  document.getElementById('a4').innerHTML=localStorage.getItem("category");
  document.getElementById('a5').innerHTML=localStorage.getItem("price");

}
function removethis(){
  localStorage.clear();
  document.getElementById('a1').innerHTML="";
  document.getElementById('a2').innerHTML="";
  document.getElementById('a3').innerHTML="";
  document.getElementById('a4').innerHTML="";
  document.getElementById('a5').innerHTML="";
  document.getElementById('a6').innerHTML="";
  document.getElementById('a7').innerHTML="";
  document.getElementById('a8').innerHTML="";
}
