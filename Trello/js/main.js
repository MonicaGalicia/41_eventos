

var boton=document.createElement("button");
	boton.innerHTML="Guardar"
	boton.setAttribute("id","btn");
var input=document.getElementById("input");


function addLista(obj){
	obj.style.backgroundColor="#E2E4E6";
     tarjeta.appendChild(boton);

}

function presionarBtn(){
    var div=document.createElement("div");
    div.setAttribute("id","div");
	var texto=document.createElement("h5");
	texto.appendChild(document.createTextNode(input.value));
	var addTarjeta=document.createElement("a");
	addTarjeta.setAttribute("id" , "enlace");
	addTarjeta.appendChild(document.createTextNode("Añadir Lista"));

	div.appendChild(texto);
	texto.appendChild(addTarjeta);
	addTarjeta.appendChild(btn);
	document.body.appendChild(div);

	function clickEnlace(){
    
     var divDos=document.createElement("div");
     divDos.setAttribute("id","divdos");
     var area=document.createElement("textarea");
     area.setAttribute("id","area");
     var btn=document.createElement("button");
     btn.setAttribute("id","btn");
     btn.innerHTML="Guardar";



     divDos.appendChild(area);
     divDos.appendChild(btn);
    div.appendChild(divDos);
    addTarjeta.parentElement.replaceChild(divDos,addTarjeta);

	 //var area=document.createElement("textarea");
	 //area.setAttribute("id","area");
	 //addTarjeta.appendChild(area);
	 //console.log( addTarjeta.parentElement);
	 //addTarjeta.parentElement.replaceChild(area,addTarjeta);
	
}

addTarjeta.onclick=clickEnlace;

}

boton.onclick=presionarBtn;









