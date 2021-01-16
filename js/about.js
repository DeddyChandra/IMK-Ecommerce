let gm = document.getElementsByClassName("container-about");

let b = document.getElementsByClassName("badgesa");
let idx=0;
gm[idx].style.display="block";
b[idx].className+= " color1";
function changePage(page){
	gm[idx].style.display="none";
	b[idx].classList.remove("color1");
	
	idx=page;
	gm[idx].style.display="block";
	b[idx].className+= " color1";
}