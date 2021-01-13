function mostrarNumeroProductos(array){
    return array.length;
}
var producto = new Producto;
function ordenarProductos(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if(array[i].tipo==array[i].tipo){
                producto=array[i];
                array[i]=array[j];
                array[j]=producto;
            }
        }
    }
    document.write("<ol>")
        for (let i = 0; i < productos.length; i++) {
            document.write("<li>"+productos[i].numeroSerie+"  "+productos[i].tipo+"  "+productos[i].localizacion+"</li>");   
        }
        document.write("</ol>");
}