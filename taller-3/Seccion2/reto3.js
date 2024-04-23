//funcion para agregar productos y si el producto ya existe agregar un identificativo de que nos diga que es una copia
let id = 1;
function getProducts() {

    let listProducts = [];
    let loop = true;
    while (loop) {
        let nameProduct = prompt("Dame el nombre del producto que quieres ingresar:");
        let priceProduct = parseInt(prompt("Dame e precio del producto que ingresaras"));
        let quantity = parseInt(prompt("¿Cuantas unidades tienes en el inventario?"));
        let description = prompt("Dame una descripcion del producto");

        let check = checkProduct(listProducts, nameProduct);

        if (check > 0) {
            let checkStr = check.toString()

            nameProduct = nameProduct + "-copy" + checkStr;
        }

        let product = {
            id: id,
            name: nameProduct,
            price: priceProduct,
            quantity: quantity,
            description: description
        }

        listProducts.push(product);
        id++;

        loop = closeP();
    }

    return listProducts
}

//Funcion para saber si un elemento ya existe en la lista de productos
function checkProduct(listProducts, nameProduct) {
    const filterProduct = listProducts.filter((product) => product.name === nameProduct);

    return filterProduct.length
}


//Funcion para buscar producto por su nombre
function searchProductForName(listProducts) {
    let nameProduct = prompt("Dame el nombre del producto que deseas buscar").toLowerCase();

    const showProduct = listProducts.find(function (product) {
        return product.name === nameProduct;
    });

    return showProduct
}


//Funcion para actualizar productos
function updateProducts(listProducts) {
    let nameProduct = prompt("Dame el nombre del prodcuto que deseas actualizar.").toLowerCase();
    let whatDoYouGonnaItUpdate = prompt(("¿Que vas a actualizar?\n(-name-price-quantity-description)")).toLowerCase();

    let update = listProducts.find(function (product) {
        return product.name === nameProduct;
    });


    if (whatDoYouGonnaItUpdate == "name" || whatDoYouGonnaItUpdate == "description") {
        update[whatDoYouGonnaItUpdate] = prompt("Dame nuevo valor").toLowerCase();
    } else if (whatDoYouGonnaItUpdate == "price" || whatDoYouGonnaItUpdate == "quantity") {
        update[whatDoYouGonnaItUpdate] = parseInt(prompt("Dame nuevo valor"));
    }

    return update
}


//Funcion para borrar Productos
function moveToTrashProduct(listProducts) {
    let delteProductForName = prompt("Dame el nombre del producto que deseas borrar.").toLowerCase();

    const deleteProduct = listProducts.find(function (product) {
        return product.name === delteProductForName;
    });

    let validation = confirm("¿Estas seguro que deseas eliminar este producto?");

    if (validation) {
        listProducts.splice(deleteProduct, 1);
        alert("Producto eliminado, checkear por consola.")
    }
    return listProducts
}


//Funcion para validar la existencia de un producto en el inventario
function checkProductForTheSale(listProducts){
    let nameProduct= prompt("Dame el nombre del producto que deseas buscar para saber si existe.").toLowerCase();

    const productForTheSale = listProducts.find(function (product) {
        return product.name === nameProduct;
    });
}


//Funcion para cerrar bucle de "getProducts"
function closeP() {
    const option = prompt("¿Deseas agregar otro producto?: (si/no)").toLowerCase();
    return option === "si"
}


//Funcion para cerrar programa
function closeI() {
    const option = prompt("¿Deseas hacer algo mas en tu inventario?: (si/no)").toLowerCase();
    return option === "si"
}


//Inicio del programa
alert("Hola profe, este ejercicio se volvio personal asi que ya no hay nada chistoso aca >:C");
alert("Primero procederemos a agregar productos al inventario");
let loop = true;

let listProducts = getProducts();

while (loop) {
    let desicionU = parseInt(prompt('---Elije una opcion---\n1-Ver todos los productos agregados.\n2-Buscar producto por nombre.\n3-Actualizar producto(Por su nombre.\n4-Borrar porducto(por el nombre).\n5-Verificar si hay un producto disponible para la venta\n6-Vender un producto.\n7-Comprar un producto.\n8-Valor total del inventario.\n9-Ordenar inventario por precio, cantidad o descripcion.\n10-Reporte general de productos.'));

    switch (desicionU) {
        case 1:
            console.log(listProducts);
            break;

        case 2:
            let productForName = searchProductForName(listProducts)
            console.log(productForName);
            break;

        case 3:
            let update = updateProducts(listProducts);
            console.log(update);
            break;

        case 4:
            let deleteProduct = moveToTrashProduct(listProducts);
            console(deleteProduct);
            break;
        
        case 5:
    }

    loop = closeI()
}