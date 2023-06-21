const ROW_MIN = 0;
const ROW_MAX = 6;
const COL_MIN = 0;
const COL_MAX = 7;
const currentPos = { row: 5, col: 0 };
const getElementByPosition = pos => {
    const cellsEl = document.getElementsByClassName('cells')[pos.row];
    return cellsEl.getElementsByClassName('cell')[pos.col];
};
const getNewPositionByKey = key => {
    const pos = {
        row: currentPos.row,
        col: currentPos.col,
    }
    switch (key) {
        case 'ArrowUp': pos.row--; break;
        case 'ArrowDown': pos.row++; break;
        case 'ArrowLeft': pos.col--; break;
        case 'ArrowRight': pos.col++; break;
}
    return pos;
};
const isPositionInRange = pos => (pos.row >= ROW_MIN)
    && (pos.row <= ROW_MAX) && (pos.col >= COL_MIN) && (pos.col <= COL_MAX);
const isPositionWall = pos => getElementByPosition(pos).classList.contains('wall');
document.addEventListener('keyup', event => {
    getElementByPosition(currentPos).classList.remove('current');
    const newPos = getNewPositionByKey(event.code);
    if (isPositionInRange(newPos) && !isPositionWall(newPos)) {
        currentPos.row = newPos.row;
        currentPos.col = newPos.col;
    }
    const newElmt = getElementByPosition(currentPos);
    newElmt.classList.add('current');
    if (newElmt.classList.contains('target')) alert('You escaped!');
});
