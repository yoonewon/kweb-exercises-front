const probs = [ 100, 60, 36, 22, 13, 8, 5, 3, 2, 1 ];
let attempts = 0;
let level = 0;
const getRandomBinaryResult = ratio => {
    const randomNumber = Math.floor(Math.random() * 100);
    return (randomNumber < ratio);
};
const tryLevelUp = () => {
    const loopId = setInterval(() => {
        attempts++;
        const successed = getRandomBinaryResult(probs[level]);
        if (successed) {
            level++;
            document.getElementById('gauge-bar').style.width = level * 10 + '%';
            document.getElementById('current-level').innerText = level;
        }
        document.getElementById('attempts').innerText = attempts;
        if (level >= 10) clearInterval(loopId);
}, 50); };
