emprestimoService = require('../service/emprestimo.service')


function listarEmprestimo(req, res) {
    const listaEmprestimo = emprestimoService.listaEmprestimo();
    res.json(listaEmprestimo);
}
function listarDevolucao(req, res) {
    const listaDevolucao = emprestimoService.listaDevolucao();
    res.json(listaDevolucao);
}

function NovoEmprestimo(req, res) {
    const id = +req.params.id;
    let user = req.body;
    let matricula = user.matricula;
    try {
      emprestimoService.emprestimo(matricula,id);
      res.status(201).json({msg:'Emprestimo Realizado'})
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}
function devolucao(req, res) {
    const livro = req.body;
    let nome = livro.nome;
    try {
        emprestimoService.devolucao(nome);
        res.status(201).json({msg:'Devolucao Realizado'})
    } catch (err) {
        res.status(err.id).json({msg: err.message});
    }
}
function deletar(req, res) {
    const id = +req.params.id;
    try{ 
      const EmpreDeletado = emprestimoService.deletarEmprestimo(id);
      res.json(EmpreDeletado);
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }   
}
function buscarNomelivro(res, res){
  const livro = req.body;
  const livroNome = livro.nome;
  try {
      livro = emprestimoService.buscarLivroEmprestados(livroNome);
      res.json(livro);
  } catch (err) {
      res.status(err.id).json({msg: err.message});
  }
}

module.exports={
    listarEmprestimo,
    listarDevolucao,
    NovoEmprestimo,
    devolucao,
    deletar,
    buscarNomelivro
}