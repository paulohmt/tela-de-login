var usuarios = [
    { "login": "pedro", "senha": "34970994" },
    { "login": "paulo", "senha": "112233" },
    { "login": "sarah", "senha": "teamopedro" },
];

function Entrar(){
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            localStorage.setItem("acesso", true);
            alert("usuário autenticado!")
            window.location = ""
            return true;
        }
    }
}




/*function Entrar(){
    const email = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if(email.value === 'paulo' && senha.value === 'admin'){
        localStorage("acesso", true);
        alert("Usuário autenticado!")
        window.location.href = "https://www.google.com/"
    }else{
        alert("Usuário ou senha inválidos!")
        
    }
}
*/