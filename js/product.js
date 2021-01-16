function formatRupiah(angka, prefix){
	var number_string = angka.toString(),
	split   		= number_string.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}
 
	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == undefined ? rupiah : (rupiah ? 'Rp  ' + rupiah + ',00' : '');
}

$(function(){
    let field = document.getElementById("quantity-field");
    let minus = document.getElementById("button-minus");
    let plus = document.getElementById("button-plus");
    let discount = document.getElementById("discount");
    discount.textContent = "Rp 100.000,00";
    let price = document.getElementById("price");
    price.textContent = "Rp 88.888,00";
    let dp = 100000;
    let p = 88888;
    minus.addEventListener("click", function() {
        if(field.value > 1){
            field.value = field.value - 1;
            price.textContent = formatRupiah((field.value * p), "Rp ");
            discount.textContent = formatRupiah((field.value * dp), "Rp ");
        }
    });
    plus.addEventListener("click", function() {
        field.value = parseInt(field.value) + 1;
        discount.textContent = formatRupiah((field.value * dp), "Rp ");
        price.textContent = formatRupiah((field.value * p), "Rp ");
    });
});