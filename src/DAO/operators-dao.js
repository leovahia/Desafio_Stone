module.exports = class OperatorsDAO {
    
    constructor(pool) {
        this.pool = pool
    }
    
    getOperators() {
        return new Promise((res, rej) => {
            this.pool.query('SELECT id, name, email FROM operators',
            (err, operators) => {
                if(err) rej(err) 
                else res(operators) 
            })
        } 
    )}

    getOperatorById(id) {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM operators WHERE id = $1',
            [id],
            (err, operator) => {
                if(err) rej(err)
                else res(operator)
            })
        })
    }

    insertOperator(operator) {
        return new Promise((res, rej) => {
            this.pool.query('INSERT INTO operators (name, email, password) VALUES ($1, $2, $3)'
            , [operator.name, operator.email, operator.password]
            , (err) => {
                if(err) rej('Falha ao inserir o operador')
                else res('Operador inserido com sucesso')
            })
        })
    }

    deleteOperator(operator) {
        return new Promise((res, rej) => {
            this.pool.query('DELETE FROM operators WHERE id = $1'
            , [operator]
            , (err) => {
                if(err) rej('Falha ao deletar o operador')
                else res('Operador deletado com sucesso')
            })
        })
    }
}