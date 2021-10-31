function Entrar(){
    var email = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if(email.value === 'paulo' || senha.value === '112233'){
        localStorage("acesso", true);
        alert("Usuário autenticado!")
        window.location.href = "pagina1.html"
    }else{
        alert("Usuário ou senha inválidos!")
    }
}