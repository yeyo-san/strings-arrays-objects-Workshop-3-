//Funcion para verificar email, retornara verdadero o falso dependiendo del email
function checkEmail(email){

                //Esta expresion regular nos permite validar si el corrreo sigue con las condiciones estandar 
    const check = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let v = check.test(email);

    return v
}


var bucle = 1;

while(bucle < 2){
    let email = prompt("Dame tu email:");
    let check = checkEmail(email);

    if(check){
        alert("Buena email pa.");
        bucle +=1;
    }else{
        alert("Lee bien pa.");
    }
}
