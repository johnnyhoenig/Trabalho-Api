const clienteRepository = require('../repository/cliente_repository')

function listar() {
    return clienteRepository.listar();
}

function inserir(cliente) {
    let user = clienteRepository.pesquisarPorLikeNome(cliente.nome);
    if (user) {
        throw {id:400, message:"user ja existe"}
    };
    if(cliente) {// cliente != undefined
        if (cliente.nome) {
            if (cliente.email) {
                if (cliente.senha) {
                    if (cliente.matricula) {
                        clienteRepository.inserir(cliente);
                    } else {
                        throw {id:400, message:"cliente sem matricula"}
                    }
                } else {
                    throw {id:400, message:"cliente sem senha"};
                }
            } else {
                throw {id:400, message:"cliente sem email"};
            }
        } else {
            throw {id:400, message:"cliente sem nome"};
        }
    }
    else {
        throw {id:400, message:"erro cliente"};
    }
}

function buscarPorId(id) {
    const cliente = clienteRepository.buscarPorId(id);
    if(cliente) {
        return cliente;
    }
    else {
        throw {id:404, message:"cliente nao encontrado"};
    }
}
function pesquisarPorLikeNome(nome) {
    const cliente = clienteRepository.pesquisarPorLikeNome(nome);
    if(cliente) {
        return cliente;
    }
    else {
        throw {id:404, message:"cliente nao encontrado"};
    }
}


function atualizar(id, user) {
    const cliente = clienteRepository.buscarPorId(id);
    if(!cliente) {
        throw {id: 404, message: "cliente nao encontrado"};
    }
    
    if(user && user.nome && user.email && user.senha) {
        clienteRepository.inserir(id,user);
    }
    else {
        throw {id: 400, message: "cliente nao possui nome, email ou senha"};
    }
}
function buscarPorMatricula(matricula){
    const cliente = clienteRepository.buscarPorMatricula(matricula);
    if(cliente) {
        return cliente;
    }else{
        throw {id: 404, message: "cliente nao encontrado"};
    }
}
function atualizarNome(matricula, nome) {
    const cliente = clienteRepository.buscarPorMatricula(matricula);
    if(!cliente) {
        throw {id: 404, message: "cliente nao encontrado"};
    }
    
    if(nome) {
        id = cliente.id
        clienteRepository.atualizarNome(id,nome);
    }
    else {
        throw {id: 400, message: "nome nao aceito"};
    }
}
function atualizarSenha(matricula, senha) {
    const cliente = clienteRepository.buscarPorMatricula(matricula);
    if(!cliente) {
        throw {id: 404, message: "cliente nao encontrado"};
    }
    
    if(senha) {
        id = cliente.id
        clienteRepository.atualizarSenha(id,senha);
    }
    else {
        throw {id: 400, message: "senha nao aceita"};
    }
}
function atualizarEmail(matricula, email) {
    const cliente = clienteRepository.buscarPorMatricula(matricula);
    if(!cliente) {
        throw {id: 404, message: "cliente nao encontrado"};
    }
    
    if(email) {
        id = cliente.id
        clienteRepository.atualizarEmail(id,email);
    }
    else {
        throw {id: 400, message: "email nao aceito"};
    }
}
function atualizarMatricula(id, matricula) {
    const cliente = clienteRepository.buscarPorId(id);
    if(!cliente) {
        throw {id: 404, message: "cliente nao encontrado"};
    }
    
    if(!matricula) {
        clienteRepository.atualizarMatricula(id,matricula);
    }
    else {
        throw {id: 400, message: "cliente nao possui nome, email ou senha"};
    }
}
function deletar(id) {
    const clienteDeletado = clienteRepository.deletar(id);
    if(clienteDeletado){
        return clienteDeletado;
    }
    else {
        throw {id: 404, message: "cliente nao encontrado"};
    }
}
function deletarlikematricula(matricula){
    const clienteDeletado = clienteRepository.deletarporMatricula(matricula);
    if(clienteDeletado){
        return clienteDeletado
    }
    else {
        throw {id: 404, message: "cliente nao encontrado"};
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    deletarlikematricula,
    atualizarNome,
    atualizarSenha,
    atualizarEmail,
    atualizarMatricula,
    pesquisarPorLikeNome,
    buscarPorMatricula
}