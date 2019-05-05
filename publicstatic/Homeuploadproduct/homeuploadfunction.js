function setter(){
  if(($('category').val())&&($('comment').val())&&($('product').val())&&($('price').val()))
    alert("Enter The Required Field");
  else {
    getdata();
  }
  var name,price,category,description;
}

function getdata(){
  name=document.getElementById('product').value;
  price=document.getElementById('price').value;
  description=document.getElementById('comment').value;
  category=document.getElementById('category').value;
  localStorage.setItem("id","1");
  localStorage.setItem("date","19/4/19");
  localStorage.setItem("name", name);
  localStorage.setItem("price", price);
  localStorage.setItem("category",category);
  localStorage.setItem('description', description);
  console.log(name);
  console.log(price);
  console.log(category);
}

  /*function readURL(input) {
    //var file = input.target.files[0];
       if (input.files && input.files[0]) {
           var reader = new FileReader();
           console.log("running");
           //reader.onload = function (e) {

                reader.onload = function (e) {
                //  var filePath= $("#file").files[0].path;
                  console.log(filePath);
                //console.log(e.target.result);
                $("#blah").attr('src',filePath );
              }();
             //$('#file').(function () {
               //var filePath=$('#file').val();
               //console.log(filePath);
               //$('#blah').attr('src', filePath);
                //   console.log("running");
           //});

            //reader.readAsText(file);
         }
       }
*/
