//funcion para agregar productos y si el producto ya existe agregar un identificativo de que nos diga que es una copia
let id = 1;
function getProducts() {

    let listProducts = [];
    let loop = true;
    while (loop) {
        let nameProduct = prompt("Dame el nombre del producto que quieres ingresar:");
        let priceProduct = parseInt(prompt("Dame el precio del producto que ingresaras"));
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
function searchProductbyNameOrPrice(listProducts) {
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
function checkProductForSale(listProducts){
    let nameProduct= prompt("Dame el nombre del producto que deseas buscar para saber si existe.").toLowerCase();

    let productForTheSale = listProducts.find(function (product) {
        return product.name === nameProduct;
    });
    if(!productForTheSale){
        alert("Este producto no existe papi")
    }else if(productForTheSale.quantity > 0){
            alert(`¡El producto "${nameProduct} le quedan ${productForTheSale.price} para la venta!"`)
        }else{
            alert("No papi a buscar a otro lado")
    }
}


//Funcion para vender Productos
function sale(listProducts) {
    let saleProductForName = prompt("Dame el nombre del producto que deseas vender.").toLowerCase();

    const saleProduct = listProducts.find(function (product) {               
        return product.name === saleProductForName;
    });

    if(saleProduct.quantity == 0){
        alert("No puedo venderte este producto por que no hay disponibilidad en este momento");
    }else{
        quantitySale = parseInt(prompt("¿Cuantos productos deseas comprar?"));
        if(quantitySale > saleProduct.quantity){
            alert("No tenemos esa cantidad disponible acatualmente")
        }else{
            saleProduct.quantity = saleProduct.quantity - quantitySale;
        }   
    }

    return listProducts
}


//Funcion para comprar un producto
function buyProduct(listProducts){
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

    return listProducts
}


//Funcion para mirar el costo total del inventario
function CostTotalInventory(listproducts){
    const cost = listProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
    console.log(cost);

    return cost
}



//Funcion para ordenare lista por como quiera el usuario
function newList(listProducts){
    let x = undefined;
    const optionU = prompt("¿Por que valor deseas organizar la lista.\n-name-price-quantity-description").toLowerCase();
    console.log(optionU);
    switch(optionU){
        case "name":
            x = listProducts.sort((a,b) => {
                    if(a.name < b.name){
                        return -1
                    }

                    if(a.name > b.name){
                        return 1
                    }

                    return 0
                });
            break;
         
        case "price":
            x = listProducts.sort((a,b) => {
                    if(a.price < b.price){
                        return -1
                    }

                    if(a.price > b.price){
                        return 1
                    }

                    return 0
            });
            break;

        case "quantity":
            x = listProducts.sort((a,b) => {
                    if(a.quantity < b.quantity){
                        return -1
                    }

                    if(a.quantity > b.quantity){
                        return 1
                    }

                    return 0
            });
            break;

        case "description":
            x = listProducts.sort((a,b) => {
                    if(a.quantity < b.quantity){
                        return -1
                    }

                    if(a.quantity > b.quantity){
                        return 1
                    }

                    return 0
                });
            break;
        
        default:
            alert("Opcion incorrecta.")
            break;
    }

    return x
}


//Funciones para dar el reporte general del inventario
//Funcion para ordenar desde el precio mas barato al mas barato (Reporte general)
function lsitProductsLowCost (listProducts){
    const newList = listProducts.sort((a,b) =>{
        if(a.price < b.price){
            return -1
        }

        if(a.price > b.price){
            return 1
        }

        return 0
    });

    return newList
}    

//Funcion para ordenar desde el precio mas caro (Reporte general)
function lsitProductsMoreExpensive (listProducts){
    const newList = listProducts.sort((a,b) =>{
        if(a.price < b.price){
            return 1
        }

        if(a.price > b.price){
            return -1
        }

        return 0
    });

    return newList
}    

//Funcion para ordenar productos por menor cantidad (Reporte general)
function listProductLowerQuantity(listProducts){
    const newList = listProducts.sort((a,b) =>{
        if(a.quantity < b.quantity){
            return -1
        }

        if(a.quantity > b.quantity){
            return 1
        }

        return 0
    });

    return newList
}   


//Funcion para ordenar productos por mayor cantidad (Reporte general)
function listProductsMoreQuantity (listProducts){
    const newList = listProducts.sort((a,b) =>{
        if(a.price < b.price){
            return 1
        }

        if(a.price > b.price){
            return -1
        }

        return 0
    });

    return newList
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
    let desicionU = parseInt(prompt('---Elije una opcion---\n1-Ver todos los productos agregados.\n2-Buscar producto por nombre.\n3-Actualizar producto(Por su nombre).\n4-Borrar porducto(por el nombre).\n5-Verificar si hay un producto disponible para la venta\n6-Vender un producto.\n7-Comprar un producto.\n8-Valor total del inventario.\n9-Ordenar inventario por precio, cantidad o descripcion.\n10-Reporte general de productos.'));

    switch (desicionU) {
        case 1:
            console.log(listProducts);
            break;

        case 2:
            const productForName = searchProductbyNameOrPrice(listProducts)
            console.log(productForName);
            break;

        case 3:
            const update = updateProducts(listProducts);
            console.log(update);
            break;

        case 4:
            const deleteProduct = moveToTrashProduct(listProducts);
            console(deleteProduct);
            break;
        
        case 5:
            checkProductForSale(listProducts);
            break;
        
        case 6:
            const listProductsUpdate = sale(listProducts);
            console.log(listProductsUpdate);
            break;

        case 7:
            let listPrudctsWithaNewProduct = buyProduct(listProducts);
            console.log(listPrudctsWithaNewProduct);
            break;
        
        case 8:
            var totalCosteProducts = CostTotalInventory(listProducts);
            console.log(`El valor total de tu inventario es de ${totalCosteProducts}$`);
            break;

        case 9:
            let orderList = newList(listProducts);
            console.log("Asi quedo tu lista de productos: ", JSON.stringify(orderList));
            break;

        case 10:
            let newlistProductsLowCost = lsitProductsLowCost(listProducts);
            let newListProductMoreExpensive = lsitProductsMoreExpensive(listProducts);
            totalCosteProducts = CostTotalInventory(listProducts);
            let newListProductLowQuantity = listProductLowerQuantity(listProducts);
            let newListProductmoreQuantity = listProductsMoreQuantity (listProducts)
            alert(`Hay ${listProducts.length} en el inventario.`);
            alert(`El valor total de tu inventario es de ${totalCosteProducts}$`);
            alert(`Tu lista ordenada desde el producto mas barato: ${JSON.stringify(newlistProductsLowCost)}`);
            alert(`Tu lista ordenada desde el producto mas caro: ${JSON.stringify(newListProductMoreExpensive)}`);
            alert(`Tu lista ordenada desde el producto con menos cantidad ${JSON.stringify(newListProductLowQuantity)}`);
            alert(`Tu lista ordenada desde el producto con mayor cantidad ${JSON.stringify(newListProductmoreQuantity)}`);
            break;

        default:
            alert("Opcion incorrecta.")
    }

    loop = closeI()
}