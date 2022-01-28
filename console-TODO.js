const list = {
    "create a new practice task": "To Do",
    "make a bed": "To Do",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = 'To Do';
};

function deleteTask(task) {
    delete list[task];
};

function showList() {
    let InProgress = "";
    let ToDo = "";
    let Done = "";

    console.log("Todo:")
    let countTodo;
    for ( countTodo in list) {
        if(list[countTodo] == "To Do") ToDo += " " + countTodo + "\n";
    } ;
    if(ToDo == false) console.log(" " + '-')
    else console.log(ToDo);

    console.log("In Progress:") 
    let countInProgress
    for ( countInProgress in list) {
        if(list[countInProgress] == "In Progress") InProgress += " " + countInProgress +"\n";
    };
    if( InProgress == false) console.log(" " + '-')
    else console.log(InProgress);

    console.log("Done:")
    let countDone;
    for ( countDone in list) {
        if(list[countDone] == "Done")  Done += " " + countDone +"\n";
    }; 
    if(Done == false) console.log(" " + '-')
    else console.log(Done);
};

deleteTask("make a bed");
changeStatus("write a post","Done");
addTask("drink a coffee")
showList();


