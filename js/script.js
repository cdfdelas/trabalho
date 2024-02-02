//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    })
}
    
//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    if(usuario == "admin" && senha == "123456"){
    window.location = "index.html";
    logado = 1;
    }
    if(usuario == "admin" && senha !== "123456"){
    alert("Senha Incorreta");
    }

    if(usuario !== "admin" && senha == "123456"){
    alert("Nome de Usuário Incorreto");
    }

    if(usuario == "admin" && senha == "123456"){
        alert("Bem-Vindo de Volta")
    }

}

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";

}

//Botão de ver a Senha 

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('senha');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }