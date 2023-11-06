const emprestimoRepository = require('../repository/emprestimo_repository');
const clienteService = require('./cliente_service');
const livrosService = require('./livros_service')


function listarEmprestimo(){
    return emprestimoRepository.listarEmprestimo();
}
function listardevolucao(){
    return emprestimoRepository.listardevoluçao();
}
function emprestimo(matricula,id){
    const cliente = clienteService.buscarPorMatricula(matricula);
    const livro = livrosService.buscarPorId(id);
    let nomelivro = emprestimoRepository.buscarNomelivro(livro.nome);
    if(nomelivro == false ){
        if (cliente && livro) {
        {const aluguel = new Object();
            aluguel.cliente = cliente;
            aluguel.livro = livro;
            emprestimoRepository.alugar(aluguel)}
        } else {
            throw {id:401 , message:"cliente ou livro nao encontrado"}
        }
    }else{
        throw {id:400, message:"livro ja alugado"}
    }
}
function devolucao(nome){
    let aluguel = emprestimoRepository.pesquisarPorLikeNomeEmprestimo(nome);
    if (aluguel) {
        emprestimoRepository.devolucao(aluguel.id);
        return emprestimoRepository.buscarNomelivroDevolucao(nome);
    } else {   
        throw {id:404 , message : "emprestimo nao encontrado"}
    }
}
function deletarEmprestimo(id) {
    const emprestimoDeletado = emprestimoRepository.deletar(id);
    if(emprestimoDeletado){
        return emprestimoDeletado;
    }
    else {
        throw {id: 404, message: "emprestimo nao encontrado"};
    }
}
// funçao criada para testar objeto alugar na busca no repositorio
// function buscarLivroEmprestados(nome){
//     return emprestimoRepository.pesquisarPorLikeNomeEmprestimo(nome);
// }
module.exports = {
    listarEmprestimo,
    listardevolucao,
    emprestimo,
    devolucao,
    deletarEmprestimo,
}