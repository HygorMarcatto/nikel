const nome = "Hygor";
let nome2 = "";
let pessoaDefault = {
    nome: "Hygor",
    idade: "26",
    trabalho: "trabalho" 
}

let nomes = ["Hygor", "Gabriel Antunes","Covalski"]
let pessoas = [
    {
        nome: "Hygor",
        idade: "26",
        trabalho: "trabalho"  
    },
    {
        nome: "Gabriel Antunes",
        idade: "23",
        trabalho: "trabalho"
    },
    {
        nome: "Covalski",
        idade: "21",
        trabalho: "trabalho"
    }
]

function alterarnome() {
    nome2 = "João"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "teste",
    idade: "12",
    trabalho: "Teste"
});

imprimirPessoas();