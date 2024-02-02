import { Controller, Get } from '@nestjs/common';
import { RotaService } from './route.service';
import { ClientService } from './client.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('Rota')
@Controller('Rota')
export class RotaController {
    constructor(
        private readonly rotaService: RotaService,
        private readonly clientService: ClientService
    ) {}

    @Get()
    @ApiOperation({ summary: 'Calcular rotas dos clientes' })
    async calcularRota(): Promise<any> {
        const clientes = await this.clientService.obterTodos();
        const rota = this.rotaService.encontrarRotaMaisCurta(clientes);
        return rota;
    }
}
