const container = document.getElementById('container');
const button = document.querySelector('.reset');
let gridItems = 256;

window.addEventListener('load', createGrid(gridItems));

function createGrid(num) {
    for (let i = 1; i <= num; i++) {
        const div = document.createElement('div');
        container.append(div);
        div.classList.add('item', `item-${i}`);
    }
}

function changeOnHover(e) {
    console.log(e.target)
    e.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = "#516BEB";
    })
}

const divArray = Array.from(document.querySelectorAll('.item'));
divArray.forEach(e => changeOnHover(e));