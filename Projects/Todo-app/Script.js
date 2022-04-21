const textField = document.querySelector("#inputText");
const btnAdd = document.querySelector("#btnAdd");
const btnSortByImportance = document.querySelector(`#btnSortByImportance`);
const btnSortByName = document.querySelector("#btnSortByName");
const btnSortByDate = document.querySelector("#btnSortByDate");
const unorderedList = document.querySelector("ul")

const ToDos = [];
let flagHasRun = false;

function populateToDos() {
    if (flagHasRun === false) {
        let parsedJSON = JSON.parse(localStorage.getItem("ToDos"));
        for (let i = 0; i < parsedJSON.length; i++) {
            //ToDos.push(parsedJSON[i]);
            addToDo(parsedJSON[i].name, parsedJSON[i].stars, parsedJSON[i].date);
            console.log("name " + parsedJSON[i].name + "stars" + parsedJSON[i].stars);
            flagHasRun = true;
        }
    }
}

btnSortByImportance.addEventListener("click", () => {
    console.log("btnSortByImportance");
    sortByImportance();
});

btnSortByName.addEventListener("click", () => {
    console.log("btnSortByName");
    sortByName();
});
btnSortByDate.addEventListener("click", () => {
    console.log("btnSortByDate");
    sortByDate();
});
btnAdd.addEventListener("click", () => {
    if (textField.value === "") { return }
    addToDo(textField.value, document.querySelector('input[name="rating"]:checked').value, "");
});

document.querySelectorAll("button[name=remove]").forEach
addEventListener((`click`), e => {
    if (e.target.name === "remove") {
        //remove dom (LI)
        e.target.parentNode.remove();

        //remove from object list
        for (let todo in ToDos) {
            if (ToDos[todo].id === e.target.parentNode.id) {
                ToDos.splice(todo, 1);
            }
        }
        //update localstorage
        localStorage.setItem("ToDos", JSON.stringify(ToDos));

    }
});

window.addEventListener("load", () => {
    populateToDos();
})

function addToLocalStorage() {
    localStorage.setItem("ToDos", JSON.stringify(ToDos));
}

function addToDo(text, stars, date) {
    const newLiElement = document.createElement("li");
    const newH2Element = document.createElement("h2");
    const newDateElement = document.createElement("p");

    let newDate;
    let dateString;

    if (!date) {
        newDate = new Date();
        dateString = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}(${newDate.getHours()} : ${newDate.getMinutes()})`;
    } else {
        newDate = new Date(date);
        dateString = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}(${newDate.getHours()} : ${newDate.getMinutes()})`;
    }



    const newDateText = document.createTextNode(dateString);
    const newText = document.createTextNode(text);

    const newBtnRemove = document.createElement("button");
    const newBtnText = document.createTextNode("Remove");
    newBtnRemove.appendChild(newBtnText);
    newBtnRemove.setAttribute("id", "btnRemove");
    newBtnRemove.setAttribute("name", "remove");


    newH2Element.appendChild(newDateElement);
    newH2Element.appendChild(newText);
    newLiElement.appendChild(newH2Element);
    newDateElement.appendChild(newDateText);
    newLiElement.appendChild(newBtnRemove);
    id = `todo${ToDos.length + 1}`;
    newLiElement.setAttribute("id", id)

    //add as object
    let todo = new ToDo(text, stars, id, newDate, newLiElement);
    ToDos.push(todo);
    console.log(todo);

    //add to LocalStorage
    addToLocalStorage();

    renderToDo(newLiElement);
}

function renderToDo(newLi) {
    unorderedList.appendChild(newLi);
}

function unRenderToDoById(id) {
    document.querySelector(`#${id}`).parentNode.remove();

}

function sortByName() {
    ToDos.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    reRenderToDos();
}



function sortByImportance() {
    ToDos.sort((a, b) => (a.stars > b.stars) ? -1 : ((b.stars > a.stars) ? 1 : 0))
    reRenderToDos();
}

function sortByDate() {
    ToDos.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
    reRenderToDos();
}

function reRenderToDos() {
    console.log(ToDos);
    if (ToDos.length > 1) {
        console.log(ToDos.length);
        for (const todo of ToDos) {
            document.querySelector(`#${todo.id}`).remove();
        }
        for (const todo of ToDos) {
            renderToDo(todo.li);
        }
    }
}


//color palette:
//https://coolors.co/palette/000000-14213d-fca311-e5e5e5-ffffff