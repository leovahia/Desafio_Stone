const fetch = require('node-fetch')
const api = 'https://viacep.com.br/ws/'

async function verifyZipcode(zipCode) {
    const resp = await fetch(`${api}/${zipCode}/json`)
    const data = await resp.json()
        console.log(data);
    
}

verifyZipcode('09090640')