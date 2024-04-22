function checkPassword(password){
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let v = undefined;

    if(password.match(passwordCheck)){
        v = true;
    } else{
        v = false;
    }

    return v
}

var x = 1;

while(x < 2){
    let password = prompt("Ahora para finalizar el registro necesito que me des tu contraseña con un minimo de 8 caracteres, una letra, un numero y un caracter especial.");
    let verification = checkPassword(password);

    if(verification){
        alert("Buena contra pa.");
        x +=1;
    }else{
        alert("Lee bien pa.")
    }
}
