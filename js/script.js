//Get slider value && update the value viewer

//Access the slider
const slider = document.querySelector(".slider");
//Access the slider value viewer
const sliderPreview = document.querySelector(".slider-value")

//Creat text value holder
const sliderValue = document.createElement('p');
//Add onload value of the slider/selector
sliderValue.textContent = slider.value + " x " + slider.value;
sliderValue.classList.add("sliderValue"); // Center text value
sliderPreview.appendChild(sliderValue); // Add to the DOM


const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };


//Add square on the  view
//Access the board
const board = document.querySelector(".board-view");

const squares = [];
let singleRandom = true;
const colorPick = document.querySelector(".color-selector");
const randomColor = document.querySelector("#colorID");

//Update the value on html, if changed
slider.oninput = () => {

    sliderValue.textContent = slider.value + " x " + slider.value;

    const remSquare= document.querySelectorAll(".grid-item");
    remSquare.forEach( tile => {
        tile.remove();
    })
    
    let widthHeight = Math.floor(706/`${slider.value}`);


    for (let i= 0; i < slider.value * slider.value ; i++)
    {
    squares[i] = document.createElement('div'); 

    board.style = `grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value},1fr);`;

    squares[i].classList.add("grid-item");
    board.appendChild(squares[i]);
    }

    squares.map( (square) => {
        square.addEventListener('mouseover', () => {
            square.style = `background-color: ${(singleRandom) ? colorPick.value : random_hex_color_code()}`;
        })
    })

}


for (let i= 0; i < slider.value*slider.value ; i++)
{
    squares[i] = document.createElement('div');
    squares[i].classList.add("grid-item");
    board.appendChild(squares[i]);
}

squares.map( (square) => {
    square.addEventListener('mouseover', () => {
        let color;
        square.style = `background-color: ${(singleRandom) ? colorPick.value : random_hex_color_code()}`;
    })
})

colorPick.oninput = () => {
    if(!singleRandom) {
        singleRandom = true;
    }

}


randomColor.addEventListener('click', ()=>{
    singleRandom = false;
})

//color picker

const pencil = document.querySelector("#pencil");
// pencil.addEventListener('click', () => )

const eraser = document.querySelector("#eraser");

eraser.addEventListener('click', () => {

    squares.map((square) => {
        square.addEventListener('mouseover', () => {

            square.style = "#fcfcfc";
        })
    })});

pencil.addEventListener('click', () => {

    squares.map((square) => {
        square.addEventListener('mouseover', () => {

            square.style = `background-color: ${(singleRandom) ? colorPick.value : random_hex_color_code()}`;
        })
    })
});

const bucket = document.querySelector("#bucket");

bucket.addEventListener('click', () => {

    squares.map((square) => {
        square.style = `background-color: ${(singleRandom) ? colorPick.value : random_hex_color_code()}`;
    
    })
});

const reset = document.querySelector("#reset");

reset.addEventListener('click', () => {

    squares.map((square) => {
        square.style = "background-color: #fcfcfc";

    })
})

