import * as mongoose from 'mongoose';
import { User } from 'src/users/shared/user/user';

export const DoacaoSchema = new mongoose.Schema({
    doacao: String,
    tipo_doacao: String,
    qtd_doacao: Number,
    tamanho_kg: String,
    estado_validade: String,
    id_doador: String
})