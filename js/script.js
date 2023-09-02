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
}

let isDrawing = false;

for (let i= 0; i < slider.value*slider.value ; i++)
{
    squares[i] = document.createElement('div');
    squares[i].classList.add("grid-item");
    board.appendChild(squares[i]);
}

let isPencilTool = true;

board.addEventListener('mousedown', () => {
        isDrawing = true;
})

board.addEventListener('mouseup', () => {
        isDrawing = false;
    })


board.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;

        if (e.target != board)
        {
        if (isPencilTool)
            e.target.style = `background-color: ${(singleRandom) ? colorPick.value : random_hex_color_code()}`;
        else
            e.target.style = "#fcfcfc";
        }
})

let isTouched = false;
board.addEventListener("touchstart", () => {
    isTouched = true;
});

board.addEventListener("touchend", () => {
    isTouched = false;
});

board.addEventListener("touchcancel", () => {
    isTouched = false;
});

board.addEventListener("touchmove", (e) => {
    if (!isTouched) return;

    if (e.target != board)
    {
    if (isTouched)
        e.target.style = `background-color: ${(singleRandom) ? colorPick.value : random_hex_color_code()}`;
    else
        e.target.style = "#fcfcfc";
    }
});




colorPick.oninput = () => {
    if(!singleRandom) {
        singleRandom = true;
    }

    colorPick.classList.toggle('button-33_toggle_state');
    if (randomColor.classList.contains('button-33_toggle_state'))
    {
        randomColor.classList.remove('button-33_toggle_state');
    }
}

randomColor.addEventListener('click', ()=>{
    singleRandom = false;
    randomColor.classList.toggle('button-33_toggle_state');
    if (colorPick.classList.contains('button-33_toggle_state'))
    {
        colorPick.classList.remove('button-33_toggle_state');
    }
})


const pencil = document.querySelector("#pencil");

pencil.addEventListener('click', () => {
    pencil.classList.toggle('button-33_toggle_state');
    isPencilTool = true;
    if (eraser.classList.contains('button-33_toggle_state') || bucket.classList.contains('button-33_toggle_state'))
       {
        eraser.classList.remove('button-33_toggle_state');
        bucket.classList.remove('button-33_toggle_state');
       }
})

const eraser = document.querySelector("#eraser")

eraser.addEventListener('click', () => {
    eraser.classList.toggle('button-33_toggle_state');
    isPencilTool = false;
    if (pencil.classList.contains('button-33_toggle_state') || bucket.classList.contains('button-33_toggle_state'))
    {
        pencil.classList.remove('button-33_toggle_state');
        bucket.classList.remove('button-33_toggle_state');
    }
});



const bucket = document.querySelector("#bucket");

bucket.addEventListener('click', () => {
    bucket.classList.toggle('button-33_toggle_state');
    squares.map((square) => {
        square.style = `background-color: ${(singleRandom) ? colorPick.value : random_hex_color_code()}`;

    })
    if (eraser.classList.contains('button-33_toggle_state') || pencil.classList.contains('button-33_toggle_state'))
    {
     eraser.classList.remove('button-33_toggle_state');
     pencil.classList.remove('button-33_toggle_state');
    }
});

const reset = document.querySelector("#reset");

reset.addEventListener('click', () => {

    squares.map((square) => {
        square.style = "background-color: #fcfcfc";

    })
})

