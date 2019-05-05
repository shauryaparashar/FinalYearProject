
$('document').ready(function(){

sendata();
});
function sendata(){
  document.getElementById('a1').innerHTML=localStorage.getItem("1a");
  document.getElementById('a2').innerHTML=localStorage.getItem("category1");
  document.getElementById('a3').innerHTML=localStorage.getItem("name1");
  document.getElementById('a4').innerHTML=localStorage.getItem("To");
  document.getElementById('a5').innerHTML=localStorage.getItem("From");
  document.getElementById('a6').innerHTML=localStorage.getItem("price1");
  if(localStorage.getItem("price1"))
    $('#a7').append("<i class='fa fa-trash' aria-hidden='true' onclick='removethis();'></i>");
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

}
