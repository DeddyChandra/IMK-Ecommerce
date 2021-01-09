var slideIndex = 1;
var x = document.getElementsByClassName("imagescar");
var time;
//console.log(x);
function showDivs(n) {
  var i;
  
  var dots = document.getElementsByClassName("demo");
  slideIndex=n;
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-yellow", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-yellow";
  if(time!=null){
  	clearTimeout(time);
  }
  time=setTimeout(carousel, 5000);

}
function carousel(){
	if(slideIndex==x.length){
		slideIndex=1;
		
	}else{
		slideIndex++;
	
	}
	showDivs(slideIndex);
	if(time!=null){
  		clearTimeout(time);
	}
	time=setTimeout(carousel, 5000);
	
}

carousel();