import React, { useEffect, useState } from 'react';
import * as clienteService from '../../Services/ClienteService';
import { RotaModal } from "../Modal/RotaModal";
import './ListClients.css';

const ListClients = () => {
    const [clientes, setClientes] = useState([]);
    const [rota, setRota] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const fecharModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchClientes = async () => {
            const fetchedClientes = await clienteService.getClientes();
            setClientes(fetchedClientes);
        };

        fetchClientes();
    }, []);

    const abrirModalEObterRota = async () => {
        setIsModalOpen(true);
        try {
            const resposta = await fetch('http://localhost:3000/rota');
            const dadosDaRota = await resposta.json();
            setRota(dadosDaRota);
        } catch (error) {
            console.error('Erro ao buscar rota:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button className="botao-azul" onClick={abrirModalEObterRota}>Calcular Rota</button>
                <RotaModal isOpen={isModalOpen} onClose={fecharModal}>
                    <ul>
                        {rota.map((cliente, index) => (
                            <li key={index}>{cliente.nome} - {cliente.x}, {cliente.y}</li>
                        ))}
                    </ul>
                </RotaModal>
            </div>
        </div>
    );
};

export default ListClients;
