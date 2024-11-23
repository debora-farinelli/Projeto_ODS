import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    cpf: String,
    telefone: String,
    uf: String,
    sexo: String,
})