
$('document').ready(function(){
  document.getElementById('heading').innerHTML=localStorage.getItem('name');
  document.getElementById('prices').innerHTML="₹"+localStorage.getItem('price');
  document.getElementById('descriptions').innerHTML="<p>"+localStorage.getItem('description')+"</p>";
});
