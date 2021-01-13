document.getElementById("btn1").addEventListener("click",function(){showCont("content1","triangle1")});
document.getElementById("btn2").addEventListener("click",function(){showCont("content2","triangle2")});
document.getElementById("btn3").addEventListener("click",function(){showCont("content3","triangle3")});
document.getElementById("btn4").addEventListener("click",function(){showCont("content4","triangle4")});
document.getElementById("btn5").addEventListener("click",function(){showCont("content5","triangle5")});
document.getElementById("btn6").addEventListener("click",function(){showCont("content6","triangle6")});

function showCont(id,tri){
    let content = document.getElementById(id);
    let triangle = document.getElementById(tri); 
    if(content.className.indexOf("w3-show") == -1){
        content.className += " w3-show";
        triangle.className = triangle.className.replace(" fa-caret-down"," fa-caret-up");
	}
	else{
        triangle.className = triangle.className.replace(" fa-caret-up"," fa-caret-down");
		content.className = content.className.replace(" w3-show"," ");
	}
}