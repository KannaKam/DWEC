var paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita",
"Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados",
"Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana",
"Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá",
"Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte",
"Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto",
"El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia",
"Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia",
"Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India",
"Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica",
"Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano",
"Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí",
"Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro",
"Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán",
"Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal",
"Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo",
"República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia",
"Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía",
"Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia",
"Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania",
"Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía",
"Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti",
"Zambia","Zimbabue"];

function mostrarNumeroPaises(){
    return paises.length;
}
function mostrarPaises(){
    document.write("<table border 1px class='table'>");
    document.write("<tr><th>Paises</th></tr>");
    for(var i = 0; i < paises.length; i++){
        document.write("<tr><td>"+paises[i]+"</td></tr>")
    }
    document.write("</table>");
}
function mostrarInverso(){
    var paisesOrdenados = paises;
    document.write("<table border 1px class='table'>");
    document.write("<tr><th>Paises Inversos</th></tr>");
    for(var i = paisesOrdenados.length-1; i >= 0; i--){
        document.write("<tr><td>"+paisesOrdenados[i]+"</td></tr>")
    }
    document.write("</table>");
}
function mostrarOrdenado(){
    var paisesOrdenados = paises;
    paisesOrdenados.sort();
    document.write("<table border 1px class='table'>");
    document.write("<tr><th>Paises ordenados</th></tr>");
    for(var i = 0; i < paisesOrdenados.length; i++){
        document.write("<tr><td>"+paisesOrdenados[i]+"</td></tr>")
    }
    document.write("</table>");
}
function anyadirPaisPrincipio(){
    var paisesOrdenados = paises;
    paisesOrdenados.unshift(prompt("Introduce el país que quieres añadir"));
    document.write("<table border 1px class='table'>");
    document.write("<tr><th>Paises ordenados</th></tr>");
    for(var i = 0; i < paisesOrdenados.length; i++){
        document.write("<tr><td>"+paisesOrdenados[i]+"</td></tr>")
    }
    document.write("</table>");
}
function anyadirPaisFinal(){
    var paisesOrdenados = paises;
    paisesOrdenados.push(prompt("Introduce el país que quieres añadir"));
    document.write("<table border 1px class='table'>");
    document.write("<tr><th>Paises ordenados</th></tr>");
    for(var i = 0; i < paisesOrdenados.length; i++){
        document.write("<tr><td>"+paisesOrdenados[i]+"</td></tr>")
    }
    document.write("</table>");
}
function anyadirPaisFinal(){
    var paisesOrdenados = paises;
    paisesOrdenados.push(prompt("Introduce el país que quieres añadir"));
    document.write("<table border 1px class='table'>");
    document.write("<tr><th>Paises ordenados</th></tr>");
    for(var i = 0; i < paisesOrdenados.length; i++){
        document.write("<tr><td>"+paisesOrdenados[i]+"</td></tr>")
    }
    document.write("</table>");
}
function borrarPrincipio(){
    var paisesOrdenados = paises;
    alert("Se ha eliminado "+paises[0]);
    paisesOrdenados.shift(paises[0]);
    document.write("<table border 1px class='table'>");
    document.write("<tr><th>Paises ordenados</th></tr>");
    for(var i = 0; i < paisesOrdenados.length; i++){
        document.write("<tr><td>"+paisesOrdenados[i]+"</td></tr>")
    }
    document.write("</table>");
}
function borrarFinal(){
    var paisesOrdenados = paises;
    alert("Se ha eliminado "+paises[paises.length-1]);
    paisesOrdenados.pop();
    document.write("<table border 1px class='table'>");
    document.write("<tr><th>Paises ordenados</th></tr>");
    for(var i = 0; i < paisesOrdenados.length; i++){
        document.write("<tr><td>"+paisesOrdenados[i]+"</td></tr>")
    }
    document.write("</table>");
}
function buscarElemento(){
    prompt()
}