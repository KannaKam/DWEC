//Creación del objeto Disco, definiendo sus propiedades y métodos
function Disco(nombre_in,cantante_in,anio_in,tipomusica_in,localizacion_in,prestado_in){
this.nombre=nombre_in;
this.cantante=cantante_in;
this.anio_publicacion=anio_in;
this.tipomusica=tipomusica_in;
this.localizacion=localizacion_in;
this.prestado=prestado_in;
this.defecto=defecto;
this.dados=dados;
this.cambiaestanteria=cambiaestanteria;
this.cambiaprestado=cambiaprestado;
this.muestradisco=muestradisco;
}
//Método que asigna valores por defecto al objeto Disco
function defecto(){
this.nombre="";
this.cantante="";
this.anio_publicacion="";
this.tipomusica="";
this.localizacion=0;
this.prestado=false;
}

//Método que asigna valores al objeto creado
function dados(nombre_en,cantante_en,anio_en,tipomusica_en,localizacion_en){
this.nombre=nombre_en;
this.cantante=cantante_en;
this.anio_publicacion=anio_en;
this.tipomusica=tipomusica_en;
this.localizacion=localizacion_en;
this.prestado=false;
}

//Método que cambia el valor de localización del objeto Disco
function cambiaestanteria(){
				 do{
				 var peticion=prompt("Introduce la nueva estantería de forma numérica");
				 peticion=peticion.trim();
				 this.localizacion=parseInt(peticion);
				 }while(isNaN(peticion) || this.localizacion < 0);
}
//Método que cambia el estado de prestado del Disco
function cambiaprestado(){
				 if(this.prestado){
				 this.prestado=false;
				 }else{
				 this.prestado=true;
				 }
}

//Método que muestra todas las propiedades del Disco
function muestradisco(){
document.write("<h3>El disco "+this.nombre+" presenta la siguiente información:</h3>");
document.write("<ul type='disc'>");
document.write("<li>Nombre: "+this.nombre+"</li>");
document.write("<li>Cantante o grupo: "+this.cantante+"</li>");
document.write("<li>Año publicación: "+this.anio_publicacion+"</li>");
document.write("<li>Tipo de música: "+this.tipomusica+"</li>");
document.write("<li>Localización: "+this.localizacion+"</li>");
if(this.prestado){
document.write("<li>El disco está prestado</li>");
}else{
document.write("<li>El disco no está prestado</li>");
}
document.write("</ul>");
}
