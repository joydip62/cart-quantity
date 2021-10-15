const cartItem1 = document.querySelector('#cart-item1');
const alertMessage1 = document.querySelector('#alert-message1');
const alertLink1 = document.querySelector('#alert-link1');
const close1 = document.querySelector('#close1');
const decrement1 = document.querySelector('#decrement1');
const increment1 = document.querySelector('#increment1');
const quantityBox1 = document.querySelector('#quantity-box-1');
const price1 = document.querySelector('#price1');
const rvmBtn1 = document.querySelector('#rvm-btn1');

const cartItem2 = document.querySelector('#cart-item2');
const alertMessage2 = document.querySelector('#alert-message2');
const alertLink2 = document.querySelector('#alert-link2');
const close2 = document.querySelector('#close2');
const decrement2 = document.querySelector('#decrement2');
const increment2 = document.querySelector('#increment2');
const quantityBox2 = document.querySelector('#quantity-box-2');
const price2 = document.querySelector('#price2');
const rvmBtn2 = document.querySelector('#rvm-btn2');

const cartTotal = document.querySelector('#cart-total');
const subtotal = document.querySelector('#subtotal');
const total = document.querySelector('#total');
const shipping = document.querySelector('#shipping');
const payable = document.querySelector('#payable');


//  functionality for increment, decrement

function incrementDecremnt(bookOne, bookTwo) {
    let sub = Number(bookOne) + Number(bookTwo);
    let totalAmt = sub + 50 + 'Tk.';
    cartTotal.innerText = sub;
    subtotal.innerText = sub + 'Tk.';
    total.innerText = totalAmt;
    payable.innerText = totalAmt;
};
//  functionality for remove and undo book.
function removeBook(subtotalPrice, price) {
    let totalAmt = Number(subtotalPrice) - Number(price);
    let sub = totalAmt + 50;
    cartTotal.innerText = totalAmt;
    subtotal.innerText = totalAmt + 'Tk.';
    total.innerText = sub + 'Tk.';
    payable.innerText = sub + 'Tk.';
}
function undoBook(subtotalPrice, price) {
    let totalAmt = Number(subtotalPrice) + Number(price);
    let sub = totalAmt + 50;
    cartTotal.innerText = totalAmt;
    subtotal.innerText = totalAmt + 'Tk.';
    total.innerText = sub + 'Tk.';
    payable.innerText = sub + 'Tk.';
}



// functionality for book one
rvmBtn1.addEventListener('click', function () {
    cartItem1.style.display = 'none';
    alertMessage1.style.display = 'block';
    removeBook(cartTotal.innerText, price1.innerText);
});

alertLink1.addEventListener('click', function () {
    cartItem1.style.display = 'block';
    alertMessage1.style.display = 'none';
    undoBook(cartTotal.innerText, price1.innerText);
});

close1.addEventListener('click', function () {
    alertMessage1.remove();
    cartItem1.remove();
});

// for incriment bookOne quantiy
increment1.addEventListener('click', function () {
    let itemPrice = 204;
    quantityBox1.value = Number(quantityBox1.value) + 1;
    price1.innerText = itemPrice * Number(quantityBox1.value);
    incrementDecremnt(price1.innerText, price2.innerText);
});

// for decrement bookOne quantiy
decrement1.addEventListener('click', function () {
    if(quantityBox1.value > 1){
        let itemPrice = 204;
        quantityBox1.value = Number(quantityBox1.value) - 1;
        price1.innerText = itemPrice * Number(quantityBox1.value);
        incrementDecremnt(price1.innerText, price2.innerText);
    }else{
        alert('minimum 1 item need in your cart quantity');
    }
});



// functionality for book one
rvmBtn2.addEventListener('click', function () {
    cartItem2.style.display = 'none';
    alertMessage2.style.display = 'block';
    removeBook(cartTotal.innerText, price2.innerText);
});

alertLink2.addEventListener('click', function () {
    cartItem2.style.display = 'block';
    alertMessage2.style.display = 'none';
    undoBook(cartTotal.innerText, price2.innerText);
});

close2.addEventListener('click', function () {
    alertMessage2.remove();
    cartItem2.remove();
});

// for incriment bookOne quantiy
increment2.addEventListener('click', function () {
    let itemPrice = 128;
    quantityBox2.value = Number(quantityBox2.value) + 1;
    price2.innerText = itemPrice * Number(quantityBox2.value);
    incrementDecremnt(price1.innerText, price2.innerText);
});

// for decrement bookOne quantiy
decrement2.addEventListener('click', function () {
    if(quantityBox2.value > 1){
        let itemPrice = 128;
        quantityBox2.value = Number(quantityBox2.value) - 1;
        price2.innerText = itemPrice * Number(quantityBox2.value);
        incrementDecremnt(price1.innerText, price2.innerText);
    }else{
        alert('minimum 1 item need in your cart quantity');
    }
});