const botaoLogin = document.querySelector('.login__botao');
const loginInput = document.getElementById('user');
const senhaInput = document.getElementById('senha');
botaoLogin.addEventListener("click", () => {
    if (loginInput.value == "" || senhaInput.value == "") {
        alert("Usuário e Senha devem ser preenchidos.")
    }
    else {
        location.replace("../index.html");
    }
})

// http://127.0.0.1:5500/assets/html/login.html