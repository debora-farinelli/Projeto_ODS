import { Document } from "mongoose";

export class Doacao extends Document {
    doacao: String;
    tipo_doacao: String;
    qtd_doacao: Number;
    tamanho_kg: String;
    estado_validade: String;
    id_doador: String;
}
