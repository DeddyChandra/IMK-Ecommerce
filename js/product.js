function formatRupiah(angka, prefix){
	
	return new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(angka);
}

$(function(){
    let field = document.getElementById("quantity-field");
    let minus = document.getElementById("button-minus");
    let plus = document.getElementById("button-plus");
    let discount = document.getElementById("discount");
    discount.textContent = "$ 106.31";
    let price = document.getElementById("price");
    price.textContent = "$ 90.36";
    let dp = 106.31;
    let p = 90.36;
    minus.addEventListener("click", function() {
        if(field.value > 1){
            field.value = field.value - 1;
            price.textContent = formatRupiah((field.value * p), "$ ");
            discount.textContent = formatRupiah((field.value * dp), "$ ");
        }
    });
    plus.addEventListener("click", function() {
        field.value = parseInt(field.value) + 1;
        discount.textContent = formatRupiah((field.value * dp), "$ ");
        price.textContent = formatRupiah((field.value * p), "$ ");
    });
});