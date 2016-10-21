      function tarea() {
      var text=document.getElementById("area").value;
      
      if(text==="" || text===null){
         alert("el campo debe contener algo")
      }else{
        var check = document.createElement('input');
        check.setAttribute('type', 'checkbox'); /* otra forma de hacer esto es check.type="checkbox"*/
        var contenido = document.createElement('li');
        contenido.appendChild(check); /*padre.appendChild(hijo)*/
        contenido.appendChild(document.createTextNode(text));
        document.body.appendChild(contenido);

        var botondelete=document.createElement("button");
        var spanicono=document.createElement("span");
        spanicono.setAttribute("class" ,"fa fa-times");
        botondelete.appendChild(spanicono);
        contenido.appendChild(botondelete);
        document.body.appendChild(contenido);

        function eliminarboton(){
            contenido.parentNode.removeChild(contenido);
        }
        botondelete.onclick= eliminarboton;

        function checkbox(){
           var next=document.getElementByTagName("input").nextSibling;
          next.strike();
        }
        check.onclick=checkbox;


      }/*cierra else*/
  } /*cierre de función principal*/
   

   
     
    /*function tarea() {
      var text=document.getElementById("area").value;
      var check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      var contenido = document.createElement('li');
      contenido.appendChild(check);
      contenido.appendChild(document.createTextNode(text));
      document.body.appendChild(contenido);
   }*/