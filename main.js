let nome = document.getElementById("nome");
let telefone = document.getElementById("telefone");
let botaoAdicionar = document.querySelector("button");
let linhasTabela = [];

botaoAdicionar.addEventListener("click", function(e){
    e.preventDefault();

    if (nome.value === "" || telefone.value === "") {
        alert("Forneça um nome e um telefone");
    }
    else {
        incluiLinha();
    }

    elementoTabela = desenhaTabela();
    document.getElementById("corpo-tabela").innerHTML = elementoTabela;
    
    console.log(linhasTabela);
    console.log(elementoTabela);
})

function incluiLinha() {
    let linha = "<tr>";
        linha += `<td> ${nome.value} </td>`;
        linha += `<td> ${telefone.value} </td>`;
        linha += "</tr>"
        linhasTabela.push(linha);
}

function desenhaTabela() {

    let corpoTabela = "";

    for (let i = 0; i < linhasTabela.length; i++){
        corpoTabela += linhasTabela[i];
    }
    return corpoTabela
}