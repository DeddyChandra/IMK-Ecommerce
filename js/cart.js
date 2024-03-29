let qty1 = document.getElementById("qty1");
let price1 = document.getElementById("price1");
let check1 = document.getElementById("check1");

let qty2 = document.getElementById("qty2");
let price2 = document.getElementById("price2");
let check2 = document.getElementById("check2");

let qty3 = document.getElementById("qty3");
let price3 = document.getElementById("price3");
let check3 = document.getElementById("check3");

let totalItem = document.getElementById("totalItem");
let totalPrice = document.getElementById("totalPrice");
let shipping = document.getElementById("shipping");
let subTotal = document.getElementById("subTotal");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");

let remove1 = document.getElementById("remove1");
let remove2 = document.getElementById("remove2");
let remove3 = document.getElementById("remove3");

let discount1 = document.getElementById("discount1");
let discount2 = document.getElementById("discount2");

let selectAll =  document.getElementById("selectAll");

selectAll.onchange = function(){
    if(selectAll.checked == true){
        check1.checked = true;
        check2.checked = true;
        check3.checked = true;
    }
    else{
        check1.checked = false;
        check2.checked = false;
        check3.checked = false;
    }
    checkSelected(check1,itemPrice1,qty1,remove1);
    checkSelected(check2,itemPrice2,qty2,remove2);
    checkSelected(check3,itemPrice3,qty3,remove3);
}

let price = 0;
let itemPrice1 = 90.30;
let itemDiscount1 = 106.30;
let itemPrice2 = 75.80;
let itemDiscount2 = 0;
let itemPrice3 = 127.00;
let itemDiscount3 = 130.00;
let shippingPrice = 48.00;
let item = 0;

totalItem.textContent = "Item (" + item + ")";
totalPrice.textContent = "$ 0.00";
shipping.textContent = formatDollar((shippingPrice),"$ ");
subTotal.textContent = formatDollar((shippingPrice+price),"$ ");

remove1.onclick = function() {
    item1.className += " w3-hide";
    qty1.value = 0
}

remove2.onclick = function() {
    item2.className += " w3-hide";
    qty2.value = 0;
}

remove3.onclick = function() {
    item3.className += " w3-hide";
    qty3.value = 0;
}

price1.textContent = formatDollar((qty1.value * itemPrice1),"$ ");
discount1.textContent = formatDollar((qty1.value * itemDiscount1),"$ ");

price2.textContent = formatDollar((qty1.value * itemPrice2),"$ ");

price3.textContent = formatDollar((qty1.value * itemPrice3),"$ ");
discount3.textContent = formatDollar((qty1.value * itemDiscount3),"$ ");

/* Fungsi formatDollar */
function formatDollar(angka, prefix){
	// var number_string = angka.toString(),
	// split   		= number_string.split('.'),
	// sisa     		= split[0].length % 2,
	// dollar     		= split[0].substr(0, sisa),
	// titik     		= split[0].substr(sisa).match(/\d{2}/gi);
 
	// // tambahkan titik jika yang di input sudah menjadi angka ribuan
	// if(titik){
	// 	separator = sisa ? '.' : '';
	// 	dollar += separator + titik.join('.');
	// }
 
	// dollar = split[1] != undefined ? dollar + '.' + split[1] : dollar;
    // return prefix == undefined ? dollar : (dollar ? '$  ' + dollar : '');
    return prefix + angka.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


qty1.onchange = function(){
    totalPrice1 = qty1.value * itemPrice1;
    price1.textContent = formatDollar(totalPrice1,"$ ");
    discount1.textContent = formatDollar((qty1.value * itemDiscount1),"$ ");
}

qty2.onchange = function(){
    totalPrice2 = qty2.value * itemPrice2;
    price2.textContent = formatDollar(totalPrice2,"$ ");
}

qty3.onchange = function(){
    totalPrice3 = qty3.value * itemPrice3;
    price3.textContent = formatDollar(totalPrice3,"$ ");
    discount3.textContent = formatDollar((qty3.value * itemDiscount3),"$ ");
}

check1.onchange = function(){
    checkSelected(check1,itemPrice1,qty1,remove1);
}

check2.onchange = function(){
    console.log(qty2.value);
    checkSelected(check2,itemPrice2,qty2,remove2);
}

check3.onchange = function(){
    checkSelected(check3,itemPrice3,qty3,remove3);
}

function checkSelected(check, itemPrice, qty, remove){
    if(check.checked == true){
        price += qty.value * itemPrice;
        item += parseInt(qty.value);
        qty.disabled = true;
        remove.disabled = true;
    }
    else{
        price -= qty.value * itemPrice;
        item -= qty.value;
        qty.disabled = false;
        remove.disabled = false;
    }
    if(price < 0){
        price = 0;
    }
    if(item < 0){
        item = 0;
    }
    totalItem.textContent = "Item (" + item + ")";
    totalPrice.textContent = formatDollar(price,"$ ");
    subTotal.textContent = formatDollar((price + shippingPrice), "$ ")
}

