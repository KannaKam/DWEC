//funci�n que muestra el n�mero de elementos del Array vector pasado como par�metro
function muestra_numelementos(vector){
var numelementos=vector.length;
return numelementos;
}

//La siguiente funci�n se aplicar�a a un array no formado por objetos
//Si se aplica a un array formado por cadenas de caracteres, mostrar� los elementos de dicho array.
function muestraelementos(vector){
				 document.write("<ul type='square'>");
				 for (var i=0;i<vector.length;i++){
				 document.write("<li>"+vector[i]+"</li>");
				 }
				 document.write("</ul>");
}

//La siguiente funci�n se aplicar�a a una array formado por objetos Discos
//Si se aplica, mostrar� los nombres de los Discos
function muestranombreselementos(vector){
				 document.write("<ul type='square'>");
				 for (var i=0;i<vector.length;i++){
				 document.write("<li>"+vector[i].nombre+"</li>");
				 }
				 document.write("</ul>");
}

//Aplicada a un array de cadenas de caracteres, invierte los elementos y los muestra
function invierteelementos(vector){
var nuevovector = new Array();
for(i=0;i<vector.length;i++){
nuevovector[i]=vector[i];
}
nuevovector = nuevovector.reverse();
muestraelementos(nuevovector);
}

//Aplicada a un array de cadenas de caracteres, ordena alfab�ticamente los elementos y los muestra
function ordenaelementos(vector){
var nuevovector = new Array();
for(i=0;i<vector.length;i++){
nuevovector[i]=vector[i];
}
nuevovector = nuevovector.sort();
muestraelementos(nuevovector);
}

//Aplicada a un array, a�ade un nuevo elemento al principio del array
function agregaprincipio(vector,elemento){
vector.unshift(elemento);
muestranombreselementos(vector);
}

//Aplicada a un array, a�ade un nuevo elemento al final del array
function agregafinal(vector,elemento){
vector.push(elemento);
muestranombreselementos(vector);
}

//Aplicada a una array de cadena de caracteres, elimina el primer elemento del array y lo devuelve
//Aplicado a un array de objetos, elimina el primer objeto del array. Lo que devuelve no nos interesa
//pues lo vamos a comprobar con la funci�n que muestra los objetos del Array
function eliminaprincipio(vector){
var devuelve=vector.shift();
muestranombreselementos(vector);
}

//Aplicada a una array de cadena de caracteres, elimina el �ltimo elemento del array y lo devuelve
function eliminafinal(vector){
var devuelve=vector.pop();
muestranombreselementos(vector);
}

//Aplicada a un array de cadena de caracteres, introducida la posici�n, devuelve el elemento
function diceelemento(vector,posicion){
document.write(vector[parseInt(posicion)]);
}

//Aplicada a un array de cadena de caracteres, introducido el elemento, devuelve la posici�n
function devuelveposicion(vector){
var paisbuscar=prompt("introduce el pais a buscar");
paisbuscar=paisbuscar.trim();
var indicebuscar=vector.indexOf(paisbuscar);
if(indicebuscar!=-1){
document.write("El elemento se encuentra en la posici�n "+indicebuscar+"<br>");
}else{
document.write("La b�squeda no ha arrojado ninguna coincidencia");
}
}

//Introducidas las posiciones inicial y final, devuelve los elementos que se encuentran entre dichas posiciones
function devuelveintervalo(vector,posicioninicial,posicionfinal){
var nuevovector = new Array();
nuevovector=vector.slice(posicioninicial,posicionfinal+1);
var numelementos=nuevovector.length;
if(numelementos==0){
document.write("El nuevo array no contiene ning�n elemento<br>");
}else{
document.write("<h3>Los elementos seleccionados son:</h3>");
muestraelementos(nuevovector);
//Sustituir por muestranombreselementos(nuevovector) en el caso de array de objetos
}
}
