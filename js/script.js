var usuarios = [
    { "login": "pedro", "senha": "34970994" },
    { "login": "paulo", "senha": "112233" },
    { "login": "sarah", "senha": "teamopedro" },
];

function Entrar(){
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    //const mudar = document.getElementById('mudar')

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            localStorage.setItem("acesso", true);
            window.location.href = "https://www.youtube.com/watch?v=eMEZTl-7Vvw"
            alert("usuário autenticado!");
           return true;
        }
    }
    alert("Usuário ou senha inválidos!");
    //mudar.innerHTML = '<br><center style="font-size:17px"> Usuário ou Senha inválidos!</center>'
    //mudar.innerHTML += '<center style="font-size:17px">Tente novamente.</center>'
    return false;
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