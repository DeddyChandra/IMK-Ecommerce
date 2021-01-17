window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementsByClassName("navigationcontainer")[0];
console.log(navbar);
// Get the offset position of the navbar
let sticky = 92;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
