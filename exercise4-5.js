const itemPrice = {
    apple: 700,
orange: 800,
    lemon: 900,
};
let totalPrice = 0;
for (const buttonEl of document.getElementsByClassName('add-to-cart')) {
    buttonEl.addEventListener('click', event => {
        const itemName = event.target.parentNode.parentNode.getAttribute('id');
        totalPrice += itemPrice[itemName];
        document.getElementById('cost').innerText = totalPrice;
}); }
