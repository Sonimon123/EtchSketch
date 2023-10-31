const COLUMN_COUNT = 4

console.log("I'm loaded")

function createGrid(COLUMN_COUNT) {
    if (COLUMN_COUNT > 100) {
        alert("Count too high! Defaulting to 100.")
        COLUMN_COUNT = 100;
    }

    if (COLUMN_COUNT < 0) {
        alert("Count too low! Defaulting to 4.")
        COLUMN_COUNT = 4;
    }

    let oldCont = document.getElementsByClassName('container')[0];
    if (oldCont != null) {
        document.body.removeChild(oldCont);
    }

    const container = document.createElement("div");
    container.classList.add('container')

    for (let i = 0; i < COLUMN_COUNT; i++) {
        let column = document.createElement("div");
        column.classList.add('column');
        
        for (let j = 0; j < COLUMN_COUNT; j++) {
            let square = document.createElement("div")
            square.classList.add('square');
            square.addEventListener('mouseover', () => square.classList.add("active"))
            column.appendChild(square);
        }
    
        container.appendChild(column);
    }

    document.body.appendChild(container);
}

createGrid(COLUMN_COUNT);
const button = document.querySelector("button");
button.addEventListener('click', () => createGrid(prompt("How many squares per side?")));