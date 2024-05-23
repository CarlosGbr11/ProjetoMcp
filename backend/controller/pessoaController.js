import { create, read, update, deletePes } from '../model/pessoaModel.js';

export async function createPessoa(req, res){
    const { nome, dataNascimento, genero, cpf, telefone } = req.body;
    console.log('Dados recebidos do frontend:', { nome, dataNascimento, genero, cpf, telefone });

    create(nome, dataNascimento, genero, cpf, telefone, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Pessoa criada com sucesso' });
    });
}

export async function getAllPessoas(req, res) {
    read((err, pessoas) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(pessoas);
    });
}

export async function updatePessoa(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome, dataNascimento, genero, cpf, telefone} = req.body;
    update(nome, dataNascimento, genero, cpf, telefone, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Pessoa atualizada com sucesso');
    });
}

export async function deletePessoa(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deletePes(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Pessoa excluida com sucesso');
    });
}