
const users = {};

// Funcion para el generador de emails
function emailGenerator(){
  const name1 = prompt("Dame tu nombre completo por favor.").toLocaleLowerCase();
  const splitName = name1.split(" ");

  
  let username = splitName[0].slice(0, 3) + splitName[1].slice(0, 3) + splitName[2].slice(0, 3);
  
  const timesRepeatedUsername = checkTimesRepeatedUsername(username) // -> 2
  
  if (timesRepeatedUsername > 0) {
    username += timesRepeatedUsername
  }
  
  let standarEmail = username + "@myDomain.com";

  // username === "dangutmun2"
  // standarEmail === "dangutmun2@myDomain.com"
  if (timesRepeatedUsername)
    alert(`¡El usuario que ingresaste ya existe en la base de datos, ahora tu nuevo nombre de usuario es ${username} y tu nuevo correo es ${standarEmail}!`)
  else alert(`¡Tu nuevo nombre de usuario es ${username} y tu nuevo correo es ${standarEmail}!`)
  
  const user = {
    [username] : standarEmail
  };

  return user
}

//Funcion para verificar si el usuario ya existe
function checkTimesRepeatedUsername(usernameToCheck) {
  const usernames = Object.keys(users)
  const filteredUsernames = usernames.filter((username) => username.startsWith(usernameToCheck))
  return filteredUsernames.length
}

//Funcion para cerrar el ciclo
function close(){
  const option = prompt("¿Papi quieres hacer otro registro?: (si/no)").toLowerCase();
  return option === "si"
}

alert("Bienvenido a tu generador de usuarios y correos electronicos papi.");
let wantToAddMoreUsers = true
while (wantToAddMoreUsers){
  Object.assign(users, emailGenerator())
  wantToAddMoreUsers = close()
}