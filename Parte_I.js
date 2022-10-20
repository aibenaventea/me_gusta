let count = 3;
let countElement = document.querySelector(".cantidad");
let button = document.querySelector(".btn");


function addLike() {
    count ++;
    countElement.innerText = count;
}

button.addEventListener("click", addLike);