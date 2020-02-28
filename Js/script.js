let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let btnNext1 = document.getElementById("next1");
let btnNext2 = document.getElementById("next2");
let btnBack1 = document.getElementById("back1");
let btnBack2 = document.getElementById("back2");
let btnClear = document.getElementById("clear");

let current = 0;
showForm(current);

function showForm(num) {
    let form = document.getElementsByClassName("form-div");
    form[num].style.display = "block";
}

function next(num) {
    let form = document.getElementsByClassName("form-div");
    form[num].style.display = "none";
    current = current + 1;
    showForm(current);
}

function prev(num) {
    let form = document.getElementsByClassName("form-div");
    form[num].style.display = "none";
    current = current - 1;
    showForm(current);
}

btnNext1.addEventListener("click", () => {
    if (nameInput.value) {
        next(current);
    } else {
        alert("Please, fill out the form before continuing.");
    }
});

btnNext2.addEventListener("click", () => {
    if (emailInput.value) {
        next(current);
    } else {
        alert("Please, fill out the form before continuing.");
    }
});

btnBack1.addEventListener("click", () => {
    prev(current);
});

btnBack2.addEventListener("click", () => {
    prev(current);
});

btnClear.addEventListener("click", () => {
    nameInput.value = "";
    emailInput.value = "";
    let form = document.getElementById("form3");
    form.style.display = "none";
    current = 0;
    showForm(current);
});
