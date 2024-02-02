import { Injectable } from '@nestjs/common';

interface Client {
    id: number;
    x: number;
    y: number;
}

@Injectable()
export class RotaService {
    private calcularDistancia(a: Client, b: Client): number {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }

    public encontrarRotaMaisCurta(clientes: Client[]): Client[] {
        let rota: Client[] = [];
        let atual: Client = { id: 0, x: 0, y: 0 };
        let totalClientes = clientes.length;

        while (rota.length < totalClientes) {
            let maisProximo: Client = null;
            let distanciaMaisProxima = Infinity;

            clientes.forEach(cliente => {
                if (!rota.includes(cliente)) {
                    let distancia = this.calcularDistancia(atual, cliente);
                    if (distancia < distanciaMaisProxima) {
                        maisProximo = cliente;
                        distanciaMaisProxima = distancia;
                    }
                }
            });

            rota.push(maisProximo);
            atual = maisProximo;
        }

        rota.push({ id: 0, x: 0, y: 0 });

        return rota;
    }
}
