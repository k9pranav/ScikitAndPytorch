let gridMain = document.querySelector('#grid');

//The grid setup
gridMain.style.gridTemplateColumns = 'repeat(28, 1fr)'
gridMain.style.gridTemplateRows = 'repeat(28, 1fr)'

//Adding the divs
for (i = 0; i < 28*28; i++){
    let square = document.createElement('div');
    square.style.backgroundColor = 'blue';
    square.style.height = '10px';
    square.style.width = '10px';
    gridMain.appendChild(square)
}

//I can make a array list using query select all

