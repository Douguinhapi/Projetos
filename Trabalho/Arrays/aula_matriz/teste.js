function crialogin(){
    let usuario = document.getElementById("user").value
    let senha = document.getElementById("pass").value

    localStorage.setItem("user", usuario)
    localStorage.setItem("senha", senha)
}

function efetuelogin(){
    let usuario = document.getElementById("user").value
    let senha = document.getElementById("pass").value
    let usuario2 = localStorage.getItem("user")
    let senha2 = localStorage.getItem("senha")
    if(usuario2 == usuario && senha == senha2){
        alert("login efetuado com sucesso!!!")
    }
    else{
        alert("Não pode ser efetuado")
    }
}