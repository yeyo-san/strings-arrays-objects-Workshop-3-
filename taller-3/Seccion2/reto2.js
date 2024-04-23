//Funcion para tomar las calificaciones y ordenarlas en una lista
function getGrades() {
    const grades = prompt("Dame tus calificaciones ordenadas por ','");
    let listGrades = grades.split(",").map((e) => parseInt(e));

    return listGrades;
}

//Funcion para sacar las calificaciones 
function averageGrades(grades){
  let average = grades.reduce((acc, item) => {
      return (acc = acc + item / grades.length);
  });

  return average
}

//Funcion para ver la calificacion maxima
function maxGrade(grades){
  const max = Math.max(...grades);
  return max
}


//Funcion para ver la calificacion maxmiima
function minGrade(grades){
  const max = Math.min(...grades);
  return max
}

//Funcion para saber calificaciones aprobadas
function getGoodGrades(grades){
  const goodGrades = grades.filter((num) => num >= 70);
  return goodGrades
}

//Funcion para saber calificaciones aprobadas
function getFailGrades(grades){
  const failGrades = grades.filter((num) => num < 70);
  return failGrades
}

//Funcion para ordenar las calificaciones de menor a mayor
function min_max_Grades(grades){
  const listGrades = grades.sort();

  return listGrades
}
//Funcion para cierre del programa
function close(){
    const option = prompt("¿Deseas ver algo mas?: (si/no)").toLowerCase();
    return option === "si"
}

//Inicio del porgrama
let loop = true; //Inicializador del programa

alert("Hola mi papa, hoy me daras tus calificaciones y te mostrare que puede hacer con ellas");
let grades = getGrades();
let average = averageGrades(grades);

while(loop){
  let optionU = parseInt(prompt("----¿Que quieres hacer?----\n1-Ver tus calificaciones\n2-Ver tu promedio final\n3-Ver calificacion maxima\n4-Calificacion minima\n5-Calificaciones aprobadas\n6-Calificaciones reprobadas\n7-Calificaciones ordenadas de menor a mayor"));
  switch(optionU){
    case 1:
      console.log(grades);
      break;

    case 2:
      console.log(average);
      break;

    case 3:
      let max = maxGrade(grades);
      console.log(max);
      break;

    case 4:
      let min = minGrade(grades);
      console.log(min)
      break;

    case 5:
      let goodGrades = getGoodGrades(grades);
      console.log(goodGrades);
      break;

    case 6:
      let failGrades = getFailGrades(grades);
      console.log(failGrades);
      break;
    
    case 7:
      let listGrades = min_max_Grades(grades);
      console.log(listGrades);
      break;
  }

  loop = close();
}