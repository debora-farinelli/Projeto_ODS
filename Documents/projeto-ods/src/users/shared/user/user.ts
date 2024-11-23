import { Document } from "mongoose";

export class User extends Document {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    telefone: string;
    uf: string;
    sexo: string;
}
