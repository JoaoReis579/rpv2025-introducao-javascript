const form = document.getElementById("form-login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (username.value.length > 6 && password.value.length > 8) {
        mensagem.textContent = "Validações corretas";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "As informações estão erradas";
        mensagem.style.color = "red";
    }
});
