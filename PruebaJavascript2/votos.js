class Voto {
    constructor(colegio, partido, numeroVotos) {
        this.colegio = colegio;
        this.partido = partido;
        this.numeroVotos = numeroVotos;
    }
     defecto() {
        this.colegio = "";
        this.partido = "";
        this.numeroVotos = 0;
    }
    introduceVotos() {
        do{
        var votos = prompt();
        }while(isNaN(votos));
        return votos;
    }

    cambiaDatos(){
        var flag = true;
        do{
            var colegio = prompt("Introduce el colegio electoral.");
            colegio.toLowerCase();
        if (colegio!="ataulfo argenta" || colegio!="josé saramago" || colegio!="santa catalina" || colegio!="riomar"){
            alert("Nombre del colegio incorrecto.")
            flag = true
        }else {
            var partido = prompt("Introduce el nombre del partido.");

            if(partido  != "psoe" || partido != "pp" || partido != "iu" || partido != "ciudadanos" || partido.toLowerCase != "podemos" || partido.toLowerCase != "upyd"){
                alert("Nombre de partido incorrecto.")
            flag = true
            } else {
                var voto = prompt("Introduce el número de votos")
            }
            
        }
        }while (flag)
        return new Voto(colegio, partido, voto);
    } 

    contarVotos(){
        
    }
}