var addbtn = document.getElementById("add");
var input = document.getElementById("ip");
var list = document.getElementById("list");
var text = "";

// Taking input from input-box
input.addEventListener("input", function (e) {
  text = e.target.value;
});

// Creating node fo add and update
function createNewNode() {
  var newListElement = document.createElement("li");
  var textnode = document.createTextNode(text);
  newListElement.innerHTML =
    " <i title='Delete' id='delete' onclick='deleteListItem(this)'class='fa fa-trash'></i><i title='Edit' id='edit' onclick='updateListItem(this)'class='fa fa-pencil'></i>";
  newListElement.appendChild(textnode);
  newListElement.id = "item" + (list.childElementCount + 1);
  
  // To mark as complete
  newListElement.addEventListener("dblclick", function(){
    console.log("double click ");
    newListElement.style.color = "green";
    newListElement.innerHTML = 
    '&#10004; ' + textnode.data + "<i title='Delete' id='delete' onclick='deleteListItem(this)'class='fa fa-trash'></i>";
  });
  return newListElement;
}

// Adding create item in list
function addListItem() {
  if (text !== undefined && text !== null && text !== "") {
    var newListElement = createNewNode();
    list.appendChild(newListElement);
    // console.log(newListElement);
    input.value = "";
    text = "";
  } else {
    alert("Please Enter TODOList!");
  }
}

// Updating item in list
function updateListItem(ele) {
  if (list.childElementCount + 1 > 1) {
    var newListElement = createNewNode();
    // console.log(newListElement.textContent);
    temp = newListElement.textContent;
    if(temp !== undefined && temp !== null && temp !== "" && temp !== " ")
       list.replaceChild(newListElement, ele.parentNode)
    else alert("Please enter updated list");
    input.value = "";
    text = "";
  } else {
    alert("No List Item is Present!");
  }
}

// Deleting item in list
function deleteListItem(ele) {
  if (list.childElementCount + 1 > 1) {
    console.log(ele.parentNode);
    list.removeChild(ele.parentNode);
    // console.log(list);
  } else {
    alert("No List Item is Present!");
  }
}

// Working code for enter key
input.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addListItem();
  }
});

// Working code for add button
addbtn.addEventListener("click", addListItem);