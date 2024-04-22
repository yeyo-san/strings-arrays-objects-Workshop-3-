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
        addMoreEvents = close2();
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


//Funcion para actualizar los datos del evento por su clave
function updateEvent(Events){
    let nameEvent = prompt("Dame el nombre del evento que deseas actualizar.").toLowerCase();
    let whatDoYouGonnaItUpdate = prompt(("¿Que vas a actualizar?\n(-id-name-date-description)")).toLowerCase();

    let update = Events.find(function(eventU){
        return eventU.name === nameEvent;
    });

    update[whatDoYouGonnaItUpdate] = prompt("Dame nuevo valor").toLowerCase();

    return update
}

//Funcion para borrar eventos
function moveToTrashEvent (Events){
    let delteNameEvent = prompt("Dame el nombre del evento que deseas actualizar.").toLowerCase();

    const deleteEvent = Events.find(function(eventU){
        return eventU.name === delteNameEvent;
    });

    let validation = confirm("¿Estas seguro que deseas eliminar este evento?");

    if(validation){
        Events.splice(deleteEvent, 1);
        alert("Evento eliminado, checkear por consola.")
    }
    return Events
}   


//Funcion para cerra el bucle que contiene el menu
function close1(){
    const option = prompt("¿Papi quieres hacer algo mas?: (si/no)").toLowerCase();
    return option === "si"
}

//Funcion para cerra bucle donde se agregan eventos
function close2(){
    const option = prompt("¿Deseas agregar otro evento?: (si/no)").toLowerCase();
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
            console.log(search);
        
        case 2:
            let update = updateEvent(Events);
            console.log(update);

        case 3:
            let deleteEvent = moveToTrashEvent (Events);
            console.log(deleteEvent);
    }
    
    loop = close1()
}
console.log(Events);
