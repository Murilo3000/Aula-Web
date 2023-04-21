function validar(){
    let usuário = document.getElementById("usuário").value
    let senha = document.getElementById("senha").value

    if(usuário == "" && senha == ""){
        alert("PREENCHA TODOS OS CAMPOS!")
    } else{
        alert("ACESSO PERMITIDO")
        window.open('menu.html')
    }
}
function calc(){
    let n1 = Number(prompt("Digite o primeiro número"))
    let n2 = Number(prompt("Digite o segundo número"))
    let op = Number(prompt(`Escolha uma opção: ${num1} e ${num2}. \n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir`))


}