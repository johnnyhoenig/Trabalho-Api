const clienteService = require('../service/cliente_service')

function listar(req, res) {
    const listaClientes = clienteService.listar();
    res.json(listaClientes);
}

function inserir(req, res) {
    let usuario= req.body;
    try {
      clienteService.inserir(usuario);
      res.status(201).json({msg:'Inserido com sucesso!'})
    }
    catch(err) {
      //id-> 400 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}
function buscarPorId(req, res) {
    const id = +req.params.id;
    try {
      const cli = clienteService.buscarPorId(id);
      res.json(cli);
    }
    catch(err) {
      //id-> 404 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}
function deletar(req, res) {
    const id = +req.params.id;
    try{ 
      const clienteDeletado= clienteService.deletar(id);
      res.json(clienteDeletado);
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }   
}
function atualizar (req, res) {
    const id = +req.params.id;
    let usuario = req.body;
  
    try{ 
      clienteService.atualizar(id, usuario);
      res.json({msg:'usuario atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}

function pesquisarPorLikeNome(req, res){
  const nome = req.body;
  try {
      cli = clienteService.pesquisarPorLikeNome(nome);
      res.json(cli);
  } catch (err) {
      res.status(err.id).json({msg: err.message});
  }
}

function buscarPorMatricual(req, res){
  const matricula = req.body;
  try {
    cli = clienteService.buscarPorMatricula(matricula);
    res.json(cli)
  } catch (err) {
    
  }
}
function atualizarNome(req, res){
  const user = req.body;
  matricula = user.matricula;
  nome = user.nome;
  try {
    clienteService.atualizarNome(matricula,nome);
    res.json({msg:'usuario atualizado com sucesso'});
  } catch (err) {
    res.status(err.id).json({msg: err.message});
  }
}
function atualizarSenha(req, res){
  const user = req.body;
  matricula = user.matricula;
  senha = user.senha;
  try {
    clienteService.atualizarSenha(matricula,senha);
    res.json({msg:'usuario atualizado com sucesso'});
  } catch (err) {
    res.status(err.id).json({msg: err.message});
  }
}
function atualizarEmail(req, res){
  const user = req.body;
  matricula = user.matricula;
  email = user.email;
  try {
    clienteService.atualizarEmail(matricula,email);
    res.json({msg:'usuario atualizado com sucesso'});
  } catch (err) {
    res.status(err.id).json({msg: err.message});
  }
}




module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorLikeNome,
    buscarPorMatricual,
    atualizarNome,
    atualizarEmail,
    atualizarSenha
}