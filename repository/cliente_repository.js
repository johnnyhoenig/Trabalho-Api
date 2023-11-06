let listaUsurarios = [];
let idGerador = 1;
function listar() {
    return listaUsurarios;
}

function geraId() {
    return idGerador++;
}

function inserir(Usuario) {
    Usuario.id = geraId();
    listaUsurarios.push(Usuario);
}
function buscarPorId(id){
    return listaUsurarios.find(function(Usuario) {
        return(Usuario.id === id);        
    })   
}
function buscarPorMatricula(matricula){
    return listaUsurarios.find(function(usuario){
        return(usuario.matricula === matricula)
    })
}

function deletarporMatricula(matricula) {
    for(let ind in listaUsurarios) {
        if(listaUsurarios[ind].matricula === matricula) {
            return listaUsurarios.splice(ind,1)[0];
        }
    }
}

function atualizar(id, Usuario) {
    for(let ind in listaUsurarios) {
        if(listaUsurarios[ind].id === id) {
            listaUsurarios[ind].nome = Usuario.nome;
            listaUsurarios[ind].email = Usuario.email;
            listaUsurarios[ind].senha = Usuario.senha;
            listaUsurarios[ind].id = id;
            return;
        }
    }
}
function atualizarNome(id,nome) {
    for(let ind in listaUsurarios) {
        if(listaUsurarios[ind].id === id) {
            listaUsurarios[ind].nome = nome;
            listaUsurarios[ind].id = id;
            return;
        }
    }
}
function atualizarSenha(id, senha) {
    for(let ind in listaUsurarios) {
        if(listaUsurarios[ind].id === id) {
            listaUsurarios[ind].senha = senha;
            listaUsurarios[ind].id = id;
            return;
        }
    }
}
function atualizarEmail(id, email) {
    for(let ind in listaUsurarios) {
        if(listaUsurarios[ind].id === id) {
            listaUsurarios[ind].email = email;
            listaUsurarios[ind].id = id;
            return;
        }
    }
}
function atualizarMatricula(id,matricula) {
    for(let ind in listaUsurarios) {
        if(listaUsurarios[ind].id === id) {
            listaUsurarios[ind].matricula = matricula;
            listaUsurarios[ind].id = id;
            return;
        }
    }
}

function deletar(id) {
    for(let ind in listaUsurarios) {
        if(listaUsurarios[ind].id === id) {
            return listaUsurarios.splice(ind,1)[0];
        }
    }
}

function pesquisarPorLikeNome(nome) {
    for(let ind in listaUsurarios) {
        if(listaUsurarios[ind].nome === nome) {
            let usuario = buscarPorId(listaUsurarios[ind].id)
            return usuario;
        }
    }
}

function pesquisarPorEmail(email) {
    return listaUsurarios.filter(
        (usuario) => {
            return usuario.email === email;
        }
    );
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorEmail,
    pesquisarPorLikeNome,
    buscarPorMatricula,
    deletarporMatricula,
    atualizarEmail,
    atualizarMatricula,
    atualizarNome,
    atualizarSenha

}