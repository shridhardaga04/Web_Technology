var btn = document.querySelectorAll("button");
var buttonKeys = [65,83,68,70,71,72,74,75,76];
var print = document.getElementById("display");
console.log(print);

document.addEventListener("keydown",function(e){
    for (let i=0; i<buttonKeys.length; i++) {
		if (event.keyCode === buttonKeys[i]) { 
			btn[i].style.boxShadow = "10px 5px 5px #010b13";
            btn[i].style.transform = "scale(1.1)";
            console.log("Key-Code of Pressed Key: " + buttonKeys[i]);

            print.innerHTML = ("Key-Code of Pressed Key: " + buttonKeys[i] + " ( " +String.fromCharCode(buttonKeys[i])+ " )");
            print.style.backgroundColor = "lightblue";
            print.style.padding = "3%"
		}
	}
	
})

document.addEventListener("keyup",function(e){
    for (let i=0; i<buttonKeys.length; i++) {
		if (event.keyCode === buttonKeys[i]) { 
			btn[i].style.boxShadow = "";
			btn[i].style.transform = "scale(1)";
		}
	}
	
})