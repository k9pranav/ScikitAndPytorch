
let gridMain = document.querySelector('#grid');

let isClicking = false;

// The grid setup
gridMain.style.gridTemplateColumns = 'repeat(28, 1fr)';
gridMain.style.gridTemplateRows = 'repeat(28, 1fr)';



gridMain.addEventListener('mousedown', () => {
    isClicking = true;
})

gridMain.addEventListener('mouseup', () => {
    isClicking = false;
})

// Adding the divs

for (i = 0; i < 28*28; i++){
    let square = document.createElement('div');

    square.addEventListener('mouseover', () => {
        if (isClicking == true){
            square.style.backgroundColor = 'black';
        }
    })

    square.classList.add('boxBlank');
    gridMain.appendChild(square);
}



//I can make a array list using query select all

