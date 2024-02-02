import React, { useEffect, useState } from 'react';
import * as clienteService from '../../Services/ClienteService';

const ClienteForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            const fetchedClientes = await clienteService.getClientes();
            setClientes(fetchedClientes);
        };

        fetchClientes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cliente = { nome, email, telefone };
        const data = await clienteService.addCliente(cliente);
        if (data) {
            const updatedClientes = await clienteService.getClientes();
            setClientes(updatedClientes);
            setNome('');
            setEmail('');
            setTelefone('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Adicionar Cliente</button>
            </form>

            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        {cliente.nome} - {cliente.email} - {cliente.telefone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClienteForm;
