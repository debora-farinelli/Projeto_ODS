import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doacao } from '../doacao/doacao';

@Injectable()
export class DoacaoService {
    constructor(@InjectModel('Doacao') private readonly doacaoModel: Model<Doacao>){}

    async getAll(){
        return await this.doacaoModel.find().exec();
    }

    async getById(id: string){
        return await this.doacaoModel.findById(id).exec();
    }

    async create(doacao: Doacao){
        const cratedDoacao = new this.doacaoModel(doacao);
        return await cratedDoacao.save();
    }

    async update(id: string, doacao: Doacao){
        await this.doacaoModel.updateOne({_id: id}, doacao).exec();
        return this.getById(id);
    }

    async delete(id: string){
        return await this.doacaoModel.deleteOne({_id: id}).exec();
    }
}
