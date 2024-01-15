
//productos
const productos =[
    {id:1,nombre:'giant xtc', precio:3010000,talle:16,rodado:29},
    {id:2,nombre:'giant atc', precio:3000000,talle:18,rodado:29},
    {id:3,nombre:'playera',precio:350000,talle:20,rodado:26},
    {id:4,nombre:'Term',precio:650000,talle:14,rodado:20}
]

const validarNumero =(numero)=>{
    if(isNaN(numero)){
        return false;
    }else if(numero<=0){
        return false;
    }
    else{
        return true;
    }
}

function validarNombre(nombre){
    if(nombre.length>=3 || /^\s+$/.test(nombre) ){
        return true;
    }
    else{
        return false;
    }
}

class producto {
    //constructor producto
    constructor(productos){
        this.productos = productos;
    }
    //buscar por id
    getProductos(id){
        
        const encontrar = this.productos.find((item) =>(item.id) == id);
        return encontrar ? encontrar : 'no existe el producto';
    }
    ingresarId(){
       let id;
        do{
            id = parseInt(prompt('ingrese el id del producto a buscar:'));
            
            if(validarNumero(id)===false){
                alert('Ingrese un id correcto, Son numero mayores 0');
            }else{
                return id;
            }
            
        }while(validarNumero(id)===false)
    }
    
    ingresarRodado(){
        let ingreso;
        do{
            ingreso=parseInt(prompt('Ingrese el Rodado'));
            if(validarNumero(ingreso)==false){
                alert('Ingrese un rodado correcto(Van del 12 al 29)');
            }
            else{
                return ingreso;
            }
        }while(validarNumero(ingreso)==false);
    }
    //cantidad productos carrito
    getCantidadCarrito(){
         return this.productos.length;
    }
    //total carrito
    getSumatorria(){
        let suma = 0;
        productos.forEach(e => {
            suma+=e.precio
        });
        return suma;
    }
    //listar productos
    getListaDeProductos(){
        console.table(this.productos);

    }
    //ingresar busqueda
    ingresarBusqueda(){
        let ingresar;
        do{
        ingresar = prompt('Ingrese El nombre del modelo que desea buscar:')
        if(validarNombre(ingresar)==false){
            alert('Ingrese por lo menos tres caracteres para la busqueda');
        }
        else{
            return ingresar;
        }
        }while(validarNombre(ingresar)==false);
    }
    //ingresar nombre
    ingresarNombre(){
        let ingresar;
        do{
        ingresar = prompt('Ingrese El nombre del modelo a ingresar:')
        if(validarNombre(ingresar)==false){
            alert('Ingrese un nombre valido.');
        }
        else{
            return ingresar;
        }
        }while(validarNombre(ingresar)==false);
    }
    //ingresar precio
    ingresarPrecio(){
        let precio;
        do{
            precio = parseInt(prompt('ingrese el precio del producto:'));
            
            if(validarNumero(precio)===false){
                alert('Ingrese un precio correcto:');
            }else{
                return precio;
            }
            
        }while(validarNumero(precio)===false)
    }
    //ingresar talle
    ingresarTalle(){
        let talle;
        do{
            talle = parseInt(prompt('ingrese el talle del producto:'));
            
            if(validarNumero(talle)===false){
                alert('Ingrese un talle correcto:');
            }else{
                return talle;
            }
            
        }while(validarNumero(talle)===false)
    }
    //buscar por nombre
    getProductosByName(nombre){
        const buscar = this.productos.filter( item => item.nombre.toLowerCase().includes(nombre.toLowerCase()));
        
        if (buscar){
            return buscar;
        } else {
            return 'No existe el producto.';
        }
        
    }
    //filtrar por rodado
    getProductoPorRodado(rodado){
        const buscar = this.productos.filter(item => item.rodado == rodado);
        return buscar;
        /*if (buscar.length ==0){
            return buscar;
        } else {
            return 'No existe el producto.';
        }*/
    }
    //agregar producto
    
    
    addProducto(nombre1, precio1, talle1, rodado1){
        let id = this.productos.length +1;
        let nombre = nombre1;
        let precio = precio1;
        let talle = talle1;
        let rodado = rodado1;
        productos.push({id,nombre,precio,talle,rodado});

    }
    //ordenar por precio menor
    OrdenarPorPrecioMin(){
       return this.productos.sort((x,y)=> x.precio - y.precio);
    }
    //ordenar por mayor precio
    OrdenarPorPrecioMay(){
        return this.productos.sort((x,y)=> y.precio - x.precio);
    }
    //promedio precios del carrito
    promedioCarrito(){
        return this.getSumatorria() / this.getCantidadCarrito();
    }
    descuentoEfectivo(){
        return this.getSumatorria()*0.80;
    }
}

const carrito = new producto(productos);
//busco por id
console.log('-------El producto encontrado por id es--------');
const encontrado = carrito.getProductos(carrito.ingresarId());
console.table(encontrado);


//busco producto por nombre
//const buscar = prompt('Ingrese El nombre del modelo que desea buscar:');
const entradoPorNombre = carrito.getProductosByName(carrito.ingresarBusqueda());
console.log('-----Los productos encontrados por nombre son:------');
console.table(entradoPorNombre);

//buscar por rodado
console.log('-------El o los productos encontrados por rodados-------');
//let rodado = parseInt(prompt("Ingrese el Rodado que desea Buscar:"));
console.table(carrito.getProductoPorRodado(carrito.ingresarRodado()));
//cargo productos
while( confirm('desea ingresar un  producto:')===true){
    
    let nombre = carrito.ingresarNombre();//prompt("ingrese el nombre del producto");
    let precio = carrito.ingresarPrecio();// parseInt(prompt("ingrese el precio"));
    let talle = carrito.ingresarTalle();//parseInt(prompt('ingrese es talle:'));
    let rodado = carrito.ingresarRodado();//parseInt(prompt('ingrese el rodado'));
    
    carrito.addProducto(nombre, precio,talle,rodado);
}

//listo los productos
console.log('------listado de producto--------');
carrito.getListaDeProductos();

console.log('la cantidad de productos del carrito son '+ carrito.getCantidadCarrito());
console.log('El precio total de su compra es ' +carrito.getSumatorria());
console.log('El promedio de precios del carrito es '+carrito.promedioCarrito());
console.log('El precio si paga en efectivo es '+ carrito.descuentoEfectivo());
console.log('-----los precios ordenados de menor a mayor-----');
console.table(carrito.OrdenarPorPrecioMin());
console.log('-----los precios ordenados de mayor a menor-----');
console.table(carrito.OrdenarPorPrecioMay());
