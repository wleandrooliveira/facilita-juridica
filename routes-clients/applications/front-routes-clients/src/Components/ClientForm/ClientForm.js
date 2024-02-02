import React, { useEffect, useState } from 'react';
import * as clienteService from '../../Services/ClienteService';
import './ClientForm.css';

const ClientForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [coordX, setCoordX] = useState('');
    const [coordY, setCoordY] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const cliente = {
            nome,
            email,
            telefone,
            x: parseFloat(coordX),
            y: parseFloat(coordY)
        };
        const data = await clienteService.addCliente(cliente);
        if (data) {
            const updatedClientes = await clienteService.getClientes();
            setNome('');
            setEmail('');
            setTelefone('');
            setCoordX('');
            setCoordY('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="client-form">
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Telefone"
                    required
                />
                <input
                    type="number"
                    value={coordX}
                    onChange={(e) => setCoordX(e.target.value)}
                    placeholder="Coordenada X"
                    required
                />
                <input
                    type="number"
                    value={coordY}
                    onChange={(e) => setCoordY(e.target.value)}
                    placeholder="Coordenada Y"
                    required
                />
                <button type="submit">Adicionar Cliente</button>
            </form>
        </div>
    );
};

export default ClientForm;
