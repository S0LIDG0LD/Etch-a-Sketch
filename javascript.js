let rowsColsNum = 16;

const container = document.querySelector("#container");

function createGrid() {

    for (i = 1; i < rowsColsNum + 1; i++) {
        
        for (j = 1; j < rowsColsNum + 1; j++) {
        
            const innerDiv = document.createElement("div");
            innerDiv.classList.toggle(`innerDiv`);
            innerDiv.classList.toggle(`row${i}`);
            innerDiv.classList.toggle(`col${j}`);
            innerDiv.setAttribute("id", `divR${i}C${j}`);
            let size = 100 / rowsColsNum;
            innerDiv.style.flexBasis = size + "%";
            innerDiv.addEventListener('mouseenter', () => {
                innerDiv.classList.add('hoveredDiv');
            });
            container.appendChild(innerDiv);
        } 
    }
}



const newSketchpad = document.querySelector(".new");
newSketchpad.addEventListener('click', () => {
    rowsColsNum = 0;
    do
    {
        rowsColsNum = Number(prompt("Insert grid size nXn, n(max 100): "));
    }
    while (rowsColsNum < 1 || rowsColsNum > 100);
    let innerDivs = document.querySelectorAll(".innerDiv");
    innerDivs.forEach(innerDiv => {
        container.removeChild(innerDiv);
    })
    createGrid();
});

createGrid();
