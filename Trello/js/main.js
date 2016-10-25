

var boton=document.createElement("button");
	boton.innerHTML="Guardar"
	boton.setAttribute("id","btn");
var input=document.getElementById("input");


function addLista(obj){
	obj.style.backgroundColor="#E2E4E6";
	//var formulario=document.createElement("form");
	//formulario.setAttribute("id" , "form");
	//formulario.appendChild(boton);
     tarjeta.appendChild(boton);

}

function presionarBtn(){
	 var texto=document.createElement("h4");
	texto.appendChild(document.createTextNode(input.value));
	var addTarjeta=document.createElement("a");
	addTarjeta.setAttribute("id" , "enlace");
	addTarjeta.appendChild(document.createTextNode("Añadir Lista"));
	texto.appendChild(addTarjeta);

	document.body.appendChild(texto);

	function clickEnlace(){
	 var area=document.createElement("textarea");
	 addTarjeta.appendChild(area);
	
}

addTarjeta.onclick=clickEnlace;

}

boton.onclick=presionarBtn;









