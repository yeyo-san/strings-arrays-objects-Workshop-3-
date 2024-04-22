function getGrades(){
  const grades = prompt("Dame tus calificaciones ordenadas por ','");
  let listGrades = grades.split(",").map(e => parseInt(e));
  
  
  return listGrades;
}

alert("Bienvenido papi, tu y yo de nuevo en este hermoso camino llamado aprender a programar sin frustrarte.");
let desicionU = true;
while(desicionU){
  let Grades = getGrades();
  let average = Grades.reduce( (acc, item) => {
    return acc =  acc + item / Grades.length;
  } );
  alert(`Tu promedio es de ${average}`);
  desicionU = false;
}