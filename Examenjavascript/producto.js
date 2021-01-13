class Producto{
    constructor(numeroSerie, tipo, localizacion){
        this.numeroSerie = numeroSerie;
        this.tipo = tipo;
        this.localizacion = localizacion;
    }

    defecto(){
        this.numeroSerie = "";
        this.tipo = "";
        this.localizacion = "";
    }

    crearProducto(){
        this.localizacion=prompt("Introduce la localización del producto.");
        this.numeroSerie=prompt("Introduce el número de serie");
        this.tipo=prompt("Introduce el tipo");
        return new Producto(this.numeroSerie, this.tipo, this.localizacion);
    }
}