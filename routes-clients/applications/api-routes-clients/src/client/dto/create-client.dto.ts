import { ApiProperty } from '@nestjs/swagger';
export class CreateClientDto {
    @ApiProperty()
    nome: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    telefone: string;
    @ApiProperty()
    x: number;
    @ApiProperty()
    y: number;
}
