let count1 = 9;
let count2 = 12;
let count3 = 3;
let countElement1 = document.querySelector(".cantidad-1");
let button1 = document.querySelector(".btn-1");
let countElement2 = document.querySelector(".cantidad-2");
let button2 = document.querySelector(".btn-2");
let countElement3 = document.querySelector(".cantidad-3");
let button3 = document.querySelector(".btn-3");

function addLike1() {
    count1 ++;
    countElement1.innerText = count1;
}
function addLike2() {
    count2 ++;
    countElement2.innerText = count2;
}
function addLike3() {
    count3 ++;
    countElement3.innerText = count3;
}

button1.addEventListener("click", addLike1);
button2.addEventListener("click", addLike2);
button3.addEventListener("click", addLike3);