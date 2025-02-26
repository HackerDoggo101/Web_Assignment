window.onload = setForm;

function setForm() {
    document.forms[0].onsubmit = function () {
        if (this.checkValidity()) alert("Submitted! Please wait for a call from us for confirmation!");
        return true;
 
    };
}
const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", () => {
    allInput.forEach(input => {
        if (input.value != "") {
            form.classList.add('secActive');
        } else {
            form.classList.remove('secActive');
            
        }
    });
});

backBtn.addEventListener("click", () => form.classList.remove('secActive'));





