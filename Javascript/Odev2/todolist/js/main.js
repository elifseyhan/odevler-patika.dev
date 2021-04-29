//Create li element function
function createLi(text) {
    const ul = document.getElementById("list");
    const li = document.createElement('li');
    li.innerHTML = text;
    ul.appendChild(li);
}

//localStorage
let liArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem("items", JSON.stringify(liArray));

const data = JSON.parse(localStorage.getItem('items'));
data.forEach(item => {
    createLi(item);
});


//Add Close Button For Li Items
let closeButton = `<button type="button" class="close li-close" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`;
let liDOM = document.querySelectorAll("#list li");
for (i = 0; i < liDOM.length; i++) {
    liDOM[i].innerHTML += closeButton;
}

// Create a new element
function newElement() {
    var getTodo = document.getElementById("task").value;
    if (getTodo == "" || getTodo.replace(/^\s+|\s+$/g, "").length === 0) {
        $('.error').toast('show');
    } else {
        $('.success').toast('show');
        liArray.push(getTodo);
        createLi(getTodo += closeButton);
        localStorage.setItem("items", JSON.stringify(liArray));
        document.getElementById("task").value = "";
    }
}

//Remove Todo Item with Close Button
var liClose = document.getElementsByClassName("li-close");
for (let i = 0; i < liDOM.length; i++) {
    liClose[i].addEventListener("click", function () {
        liDOM[i].remove();
        let removedItem = liDOM[i].textContent.split("\n")[0];
        //Delete localstage item
        if (liArray.includes(removedItem)) {
            let item = liArray.indexOf(removedItem);
            console.log(item);
            liArray.splice(item);
            localStorage.setItem("items", JSON.stringify(liArray));
        }
    })
    //Completed Todo Items
    liDOM[i].addEventListener("click", function(){
        liDOM[i].classList.toggle("checked");
    })
}


