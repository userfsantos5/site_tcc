import mysql from 'mysql2/promise'

const conexao = await mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "tcc"
})

console.log("FUNCIONANDO A CONEXÃO")

export default conexao