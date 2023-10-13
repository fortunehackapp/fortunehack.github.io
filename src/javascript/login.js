function entrar() {
    usuario = "admin"
    senha = "admin01"

    var nome = document.querySelector("#usr");
    var usr = nome.value;

    var pass = document.querySelector("#pwd");
    var pwd = pass.value;
    
    if (usr != usuario || pwd != senha) {
        alert("Usuário ou senha incorreto!!!")
    } else {
        alert("Login Efetuado com Sucesso!!!")

        window.location = './src/sinais.html'
    }

}