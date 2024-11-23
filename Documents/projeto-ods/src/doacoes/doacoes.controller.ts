import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DoacaoService } from './shared/doacao.service/doacao.service';
import { Doacao } from './shared/doacao/doacao';

@Controller('doacoes')
export class DoacoesController {
    constructor(
        private doacaoService: DoacaoService
    ){}

    @Get()
    async getAll() : Promise<Doacao[]>{
        return this.doacaoService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Doacao>{
        return this.doacaoService.getById(id);
    }

    @Post()
    async create(@Body() doacao: Doacao): Promise<Doacao> {
        return this.doacaoService.create(doacao);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() doacao: Doacao): Promise<Doacao>{
        return this.doacaoService.update(id, doacao);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.doacaoService.delete(id);
    }
}
