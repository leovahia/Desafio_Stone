const fetch = require('node-fetch')
const api = 'https://viacep.com.br/ws/'

async function verificarCep(cep) {
    const resp = await fetch(`${api}/${cep}/json`)
    const data = await resp.json()
        console.log(data);
    
}

verificarCep('09090640')