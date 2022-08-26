const listaClientes = () =>{
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar o cliente')
    })
}

const criaCliente = (nome, email) =>{
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar o cliente')
    })
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }).then( resposta => {
        if(!resposta.ok){
        throw new Error('Não foi possível excluir o cliente')
        }
    })
}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível exibir os detalhes do cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'aplication/json'
        },
        body : JSON.stringify({
            nome: nome,
            email: email
        })
        .then(resposta => {
            if(resposta.ok){
                return resposta.json()
            }
            throw new Error('Não foi possível editar o cliente')
        })
    })

}


export const clienteService = {
    listaClientes,
    criaCliente,
    deletaCliente,
    detalhaCliente,
    atualizaCliente
}