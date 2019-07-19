function validateAccount(){
    let account = document.getElementById("validate").value;
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(account)) {
        document.getElementById("kq").innerText = "TRUE";
    } else {
        document.getElementById("kq").innerText = "FALSE";
    }
}