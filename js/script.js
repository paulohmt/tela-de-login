const usuarios = [
    { "login": "pedro", "senha": "34970994" },
    { "login": "paulo", "senha": "112233" },
    { "login": "sarah", "senha": "teamopedro" },
];

function Entrar(){
    const usuario = document.getElementsByName('username')[0].value.toLowerCase();
    const senha = document.getElementsByName('password')[0].value;
    //const mudar = document.getElementById('mudar')

    for (const u in usuarios) {
        const us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            localStorage.setItem("acesso", true);
            alert("usuário autenticado!");
            window.location = "./pagina1/pagina1.html"
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