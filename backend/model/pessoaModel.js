import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from pessoas_dados', callback);
}
export function create(nome,dataNascimento,genero,cpf,telefone,callback){
    connection.query('INSERT INTO pessoas_dados (nome, dataNascimento, genero, cpf, telefone) VALUES (?, ?, ?, ?, ?)', [nome,dataNascimento,genero,cpf,telefone], callback);
}
export function update(id, novoDados, callback) {
    connection.query('UPDATE pessoas_dados set ? where id = ?', [novoDados,id], callback);
}
export function deletePes(id, callback) {
    connection.query('DELETE from pessoas_dados where id_pessoa = ?', [id], callback);
}