let seccion=document.getElementsByTagName('section');
console.log(seccion[2].innerText);
let etiqueta=document.getElementsByTagName("ul");
console.log(etiqueta[0].innerText);


function agregar(){
    
    var genero=document.getElementById('lista').value
    let listado,lista, contenido

    listado=document.getElementsByTagName('li');
    
    
    lista=document.createElement('li');
    contenido=document.createTextNode(genero);
    lista.appendChild(contenido);
    
    listado[2].insertAdjacentElement('afterend',lista);
}

var borrar
borrar=document.getElementById('pie');
borrar.innerHTML="@ronaldoadame";


let elemento, contenido;
elemento=document.createElement("li");
contenido=document.createTextNode("Reemplazo")
elemento.appendChild(contenido);

seccion[2].replaceChild(elemento,etiqueta[0]); 

let parrafo, parrafo2;
parrafo=document.createElement("p");
parrafo.setAttribute('class','nuevo');
parrafo2=document.createTextNode("Nodo nuevo");
parrafo.appendChild(parrafo2);
seccion[0].insertAdjacentElement('afterend',parrafo)
console.log(parrafo.innerText)













  
