const cliente_repository = require ('./cliente_repository')


let listaEmprestimo = []
let listadevolucao = []
let idGerador = 1;
const dataAtual = new Date();
const ano = dataAtual.getFullYear();  // Obtém o ano (ex: 2023)
const mes = dataAtual.getMonth() + 1; // Obtém o mês (0 a 11, portanto, adicione 1 para obter o mês atual)
const dia = dataAtual.getDate();       // Obtém o dia do mês
const dataAluguel = (dia+"/"+mes+"/"+ano);
const dataDevolucao = (dia+"/"+mes+"/"+ano);

function listarEmprestimo() {
    return listaEmprestimo;
}
function listardevoluçao() {
    return listadevolucao;
}

function geraId() {
    return idGerador++;
}

function buscarPorId(id){
    return listaEmprestimo.find(function(aluguel) {
        return(aluguel.id === id);        
    })   
}

function alugar(aluguel) {
    aluguel.id = geraId();
    aluguel.status = true ;
    aluguel.dataAluguel = dataAluguel;
    listaEmprestimo.push(aluguel);
}
function devolucao(id) {
    let aluguel =listaEmprestimo.find(function(aluguel) {
        return(aluguel.id === id);        
    }) 
    aluguel.status = false;
    aluguel.dataDevolucao = dataDevolucao;
    listadevolucao.push(aluguel)
    return deletar(id)
};
function deletar(id) {
    for(let ind in listaEmprestimo) {
        if(listaEmprestimo[ind].id === id) {
            return listaEmprestimo.splice(ind,1)[0];
        }
    }
}

function buscarNomeCliente(nome){
    return listaEmprestimo.filter(
        (aluguel) => {
            return aluguel.cliente.nome === nome;
        }
    );
}

function buscarNomelivro(nome){
    return listaEmprestimo.filter(
        (aluguel) => {
            return aluguel.livro.nome === nome;
        }
    );
}
function buscarNomelivroDevolucao(nome){
    return listadevolucao.filter(
        (aluguel) => {
            return aluguel.livro.nome === nome;
        }
    );
}
function buscarNomeClienteDevolucao(nome){
    return listadevolucao.filter(
        (aluguel) => {
            return aluguel.cliente.nome === nome;
        }
    );
}
function pesquisarPorLikeNomeEmprestimo(nome) {
    for(let ind in listaEmprestimo) {
        if(listaEmprestimo[ind].livro.nome === nome) {
            let usuario = listaEmprestimo[ind];
            return usuario;
        }
    }
}







module.exports={
    listarEmprestimo,
    listardevoluçao,
    alugar,
    devolucao,
    deletar, 
    buscarNomeCliente,
    buscarNomelivro,
    buscarPorId,
    buscarNomelivroDevolucao,
    buscarNomeClienteDevolucao,
    pesquisarPorLikeNomeEmprestimo
};