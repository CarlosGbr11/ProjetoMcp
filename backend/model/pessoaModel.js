import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from pessoas_dados', callback);
}
export function create(nome,dataNascimento,genero,cpf,telefone,callback){
    connection.query('INSERT INTO pessoas_dados (nome, dataNascimento, genero, cpf, telefone, ativo_pessoa) VALUES (?, ?, ?, ?, ?,1)', [nome,dataNascimento,genero,cpf,telefone], callback);
}
export function update(nome, dataNascimento, genero, cpf, telefone, id, callback) {
    connection.query("UPDATE pessoas_dados SET nome = ?, dataNascimento = ?, genero = ?, cpf = ?, telefone = ?, ativo_pessoa = 1 WHERE idpessoa = ?", [nome, dataNascimento, genero, cpf, telefone, id], callback);
}
export function deletePes(id, callback) {
    connection.query('DELETE from pessoas_dados where idpessoa = ?', [id], callback);
}