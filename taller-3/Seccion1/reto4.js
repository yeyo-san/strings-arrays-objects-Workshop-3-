//Funcion para obtener los eventos 
function getEvents(){
    var events = [];
    let addMoreEvents = true;
    var id = 0;
    while(addMoreEvents){
        let nameEvent = prompt("Dame el nombre del evento").toLocaleLowerCase();
        let dateEvent = prompt("Dame la fecha del evento en este orden: AA-MM-DD");
        let description = prompt("Por ultimo describe el evento:").toLocaleLowerCase();
        id +=1;

        let event = {
            id: id,
            name: nameEvent,
            date: dateEvent,
            description: description
        }

        events.push(event)
        addMoreEvents = close();
    }

    return events
}


//Funcion para buscar usuarios por su nombre
function searchEventForName(Events){
    let nameEvent = prompt("Dame el nombre del evento que deseas buscar").toLowerCase();
    
    const showEvent = Events.find(function(event){
        return event.name === nameEvent;
    });
    
    return showEvent
}


//Funcion para actualizar los datos del usuario



//Funcion para cerrar bucles
function close(){
    const option = prompt("¿Papi quieres hacer otro registro?: (si/no)").toLowerCase();
    return option === "si"
}

//Inicio de la app
let loop = true;
let Events = getEvents();

while(loop){
    let desicionU = parseInt(prompt("1-Buscar evento por el nombre.\n2-Actualiar evento.\n3-Eliminar evento."))
    switch(desicionU){
        case 1: 
            let search = searchEventForName(Events);
            console.log(search)
        
        case 2:

    }
    
    loop = close()
}
console.log(Events);
