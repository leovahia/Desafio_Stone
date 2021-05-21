// Validando usuário ou existe valor ou irá dar erro
const existsOrError = (value, msg) =>  {
    if(!value) throw msg
    if(Array.isArray(value) && value.length === 0)  throw msg
    if(typeof value === 'string' && !value.trim()) throw msg
}

const notExistsOrError = (value, msg) => {
    try {
        existsOrError(value, msg)
    } catch(msg) {
        return
    }
    throw msg
}

const equalsOrError = (valueA, valueB, msg) => {
    if(valueA !== valueB) throw msg
}

module.exports = { existsOrError,notExistsOrError,equalsOrError }