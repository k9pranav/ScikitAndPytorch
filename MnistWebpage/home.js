
let gridMain = document.querySelector('#grid');

let isClicking = false;

//The 28*28 pixel array
let imageArray = Array(784).fill(0)


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
    square.classList = i;
    square.style.backgroundColor = 'white';
    square.style.border = '5px solid';
    square.style.borderWidth = '0.4px';
    square.style.height = '15px';
    square.style.width = '15px';
    square.addEventListener('mouseover', squareFunc)
    gridMain.appendChild(square);
}


function squareFunc() {
    if (isClicking == true){
        this.style.backgroundColor = 'black';
        imageArray[parseInt(this.className)] = 1;
    }
}


//I can make a array list using query select all





