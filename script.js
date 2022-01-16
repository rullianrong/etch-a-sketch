const container = document.getElementById('container');
const button = document.querySelector('.reset');

window.addEventListener('load', createGrid(16));
changeHover();

function createGrid(num) {
    for (let i = 1; i <= num * num; i++) {
        const div = document.createElement('div');
        container.append(div);
        div.classList.add('item', `item-${i}`);
    }
}

function changeHover() {
    const divArray = Array.from(document.querySelectorAll('.item'));
    divArray.forEach(e =>
        e.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = "#516BEB";
        }));
}

function removeDivs() {
    const divs = Array.from(document.querySelectorAll('.item'));
    divs.forEach(e => e.remove());
}

function promptUser() {
    let input;
    while (isNaN(input) || input > 100 || input < 1) {
        input = prompt("What should be the size of the canvas? (1-100)");
        if (input == null) break;
        if (isNaN(input) || input > 100 || input < 1) {
            alert("Please only choose a number from 1-100");
        }
    }
    return input;
}
button.addEventListener('click', () => {
    const size = promptUser();

    document.getElementById('container').style.gridTemplateColumns =
        `repeat(${size}, 1fr)`;
    document.getElementById('container').style.gridTemplateRows =
        `repeat(${size}, 1fr)`;

    removeDivs();
    createGrid(size);
    changeHover();
});