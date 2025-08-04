const ROWS_NUM = 16;
const COLS_NUM = 16;

const div = document.querySelector("div");

function createGrid() {
    for (i = 1; i < ROWS_NUM + 1; i++) {

        for (j = 1; j < COLS_NUM + 1; j++) {

            const innerDiv = document.createElement("div");
            innerDiv.classList.toggle(`innerDiv`);
            innerDiv.classList.toggle(`row${i}`);
            innerDiv.classList.toggle(`col${j}`);
            innerDiv.setAttribute("id", `divR${i}C${j}`);
            innerDiv.addEventListener('mouseenter', () => {
                innerDiv.classList.add('hoveredDiv');
            });
            // innerDiv.addEventListener('mouseleave', () => {
            //     innerDiv.classList.remove('hoveredDiv');
            // });
            div.appendChild(innerDiv);
        } 
    }
}

createGrid();
//     const paperButton = document.createElement("button");
// paperButton.setAttribute("id", "Paper");
// paperButton.classList.toggle("playButton");
// paperButton.style.margin = "10px";
// paperButton.textContent = "Paper"
// paperButton.addEventListener('click', () => {
//         playRound(paperButton.id, getComputerChoice());
//     });