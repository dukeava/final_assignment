function calculateNewPrice() {
    let price = parseFloat(document.getElementById('price').value);
    let discountCode = document.getElementById('discountCode').value.trim().toUpperCase();
    let discount = 0;

    if (discountCode === "SAVE20") {
        discount = 0.20;
    } else if (discountCode === "JOLLYDAYS") {
        discount = 0.15;
    } else if (discountCode === "HOLIDAY10") {
        discount = 0.10;
    } else {
        alert("Invalid Discount Code");
        return;
    }

    let discountedPrice = price * (1 - discount);
    let totalPrice = discountedPrice * 1.07;  // adding 7% tax
    let savings = price - discountedPrice;

    document.getElementById('total').textContent = `Your Total: $${totalPrice.toFixed(2)}\nYou saved $${savings.toFixed(2)}!`;
}
