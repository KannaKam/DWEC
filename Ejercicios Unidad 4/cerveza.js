var cervezas = [
    new Cerveza("Leffe", "Bélgica", 6.6, "Abadía", 1240, true), 
    new Cerveza("Cruzcampo", "España", 4.8, "Pilsen", 1904, true),
    new Cerveza("Kwak", "Bélgica", 8.4, "Tostada", 1791, true), 
    new Cerveza("Stella Artois", "Bélgica", "Lager", 1366, true), 
    new Cerveza("Paulaner", "Alemania", 5.5, "Trigo", 1634, true), 
    new Cerveza("1906 Estrella de Galicia", "España", 6.5, "Pilsen", 1906, true),
    new Cerveza("Sagres", "Portugal", 5, "Pilsen", 1940, true), 
    new Cerveza("Guiness", "Irlanda", 4.3, "Negra", 1893, true), 
    new Cerveza("Chimay", "Bélgica", 10, "Abadía", 1862, true)
];

var tipo = ["Lager", "Tostada", "Negra", "Pilsen", "Trigo", "Abadía"];

function Cerveza(nombre_in, paisOrigen_in, graduacion_in, tipo_in, anyoFabricacion_in, estadoFabricacion_in){
this.nombre = nombre_in;
this.paisOrigen = paisOrigen_in;
this.graduacion = graduacion_in;
this.tipo = tipo_in;
this.anyoFabricacion = anyoFabricacion_in;
this.estadoFabricacion = estadoFabricacion_in;
}

function defecto(){
    this.nombre="";
    this.paisOrigen="";
    this.graduacion=0;
    this.tipo="";
    this.anyoFabricacion=0;
    this.estadoFabricacion=true;
}

function dados(nombre_en, paisOrigen_en, graduacion_en, tipo_en, anyoFabricacion_en, estadoFabricacion_en){
    this.nombre = nombre_en;
    this.paisOrigen = paisOrigen_en;
    this.graduacion = graduacion_en;
    this.tipo = tipo_en;
    this.anyoFabricacion = anyoFabricacion_en;
    this.estadoFabricacion = estadoFabricacion_en;
}

function contarEtiquetas(){
    return cervezas.length;
}
function mostrarLista(){
    document.write("<ul>");
    var cerveza = new Cerveza;
    for(var i = 0; i < cervezas.length; i++){
        cerveza = cervezas[i];
        document.write("<li>"+cerveza.nombre+"</li>")
    }
    document.write("</ul>");
}
