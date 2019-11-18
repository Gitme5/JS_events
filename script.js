

console.log("Fonctionnalité 1")

// 1. Find and store the element we want to listen to events on.
var clickerFooter = document.getElementsByTagName("footer");
var count = 0;
// 2. Define the function that will respond to the event.
// callback 

var onFooterClick = function(){
    count += 1
    console.log(`Clique ${count}`);
}
// 3. Add the event listener for the element and function
for(let i = 0;i < clickerFooter.length;i++){
  	clickerFooter[i].addEventListener("click", onFooterClick);
}

/*
for(var i = 0;i < clickerFooter.length;i++){
  clickerFooter[i].addEventListener("click", function() {
  	count += 1
  	console.log(`Clique ${count}`);
  });
};
*/

// ********************************************************************************** //

console.log("Fonctionnalité 2")


var clickerHamburger = document.getElementsByClassName("navbar-toggler");

// On parcourt l'élément clickerHamburger
for(let i = 0;i < clickerHamburger.length;i++){
	clickerHamburger[i].addEventListener("click", onMenuClick);
}

var onMenuClick = function(){
    var element = document.getElementById("navbarHeader")
    element.classList.toggle("collapse");
}

// ********************************************************************************** //


console.log("Fonctionnalité 3")


var edit1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary");

edit1[0].addEventListener("click",onEditClick1);

function onEditClick1(){
	//console.log(document.getElementsByClassName("card-text"));
	document.getElementsByClassName("card-text")[0].style.color = 'red';
}

// ********************************************************************************** //


console.log("Fonctionnalité 4")


var edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
edit2[1].addEventListener("click",onEditClick2);

function onEditClick2(){
	//console.log(document.getElementsByClassName("card-text"));
	var editColor = document.getElementsByClassName("card-text")[1];
	editColor.classList.toggle("text-success");
}

// ********************************************************************************** //


console.log("Fonctionnalité 5")


var nav = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow");
nav[0].addEventListener("dblclick",onDoubleClick, true);
document.body.addEventListener("dblclick",recover, true);

function onDoubleClick(){
	document.styleSheets[0].disabled = true;
}

function recover(){
	document.styleSheets[0].disabled = false;
}


// ********************************************************************************** //


console.log("Fonctionnalité 6")


var viewBtn = document.getElementsByClassName("btn btn-sm btn-success");
var cardText = document.getElementsByClassName("card-text")
var cardImage = document.getElementsByClassName("card-img-top")
let reducedCards = [false, false, false, false, false, false]

console.log(viewBtn);

for (let i = 0; i < viewBtn.length; i++) {
	viewBtn[i].addEventListener("mouseover",function(){cardReduce(i)});
}

function cardReduce(i){
	if (reducedCards[i] === false) {
	    cardText[i].style.display = "none";
		cardImage[i].style.width = "20%";
		reducedCards[i] = true;
	} 
	else {
	    cardText[i].style.display = "block";
		cardImage[i].style.width = "100%";
		reducedCards[i] = false;
	}
} 


// ********************************************************************************** //


console.log("Fonctionnalité 7")


var rowSelect = document.getElementsByClassName("row")[1];
var cardSelect = document.getElementsByClassName('col-md-4');
document.getElementsByClassName('my-2')[1].addEventListener("click", rotate)


function rotate(){ 
	rowSelect.insertBefore(cardSelect[cardSelect.length-1], cardSelect[0]);
}










