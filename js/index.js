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
    dots[i].className = dots[i].className.replace(" color1", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " color1";
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

let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

var countDownDate = new Date("Jan 25, 2021 00:00:00").getTime();

// Update the count down every 1 second
var count = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  day.textContent = days + "d ";
  hour.textContent = hours + "h";
  minute.textContent = minutes + "m";
  second.textContent = seconds + "s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(count);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

let isicont = document.getElementById("isicont");
let classcont=document.getElementsByClassName("contentcar");

let posidx=0;
let pos=0;
let interval;
function moveRight(){
  posidx--;
  if(posidx==-classcont.length+1){
    buttonright.setAttribute("disabled", "disabled");
    


  }
  let targetpos=posidx*216;
  if(interval!=null){
    clearInterval(interval);
  }
  interval = setInterval(animateLeft,0.1)
  isicont.style.left=pos;
  function animateLeft(){
   
    if(pos>targetpos){
      
      pos-=4;
      isicont.style.left=pos+'px';
      
    }else{
      isicont.style.left=targetpos+'px';
      clearInterval(interval);
    }
  }
 
  buttonleft.removeAttribute("disabled");
  
  
  
  
}
function moveLeft(){
  posidx++;
  if(posidx==0){
   
    buttonleft.setAttribute("disabled", "disabled");
  }
  if(interval!=null){
    clearInterval(interval);
  }
  let targetpos=posidx*216;
  interval = setInterval(animateRight,0.1)
  isicont.style.left=pos;
  function animateRight(){
   
    if(pos<targetpos){
      
      pos+=4;
      isicont.style.left=pos+'px';
      
    }else{
      isicont.style.left=targetpos+'px';
      clearInterval(interval);
    }
  }
   
    buttonright.removeAttribute("disabled");
  
  
}

if(posidx==0){
  buttonleft.setAttribute("disabled", "disabled");
}

let btnleft = document.getElementById("buttonleft");
let btnright= document.getElementById("buttonright");

btnleft.addEventListener("click",moveLeft);
btnright.addEventListener("click",moveRight);




