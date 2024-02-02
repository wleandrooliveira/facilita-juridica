const baseUrl = 'http://localhost:3000/clientes';

export const addCliente = async (cliente) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente),
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar cliente');
        }

        return await response.json();
    } catch (error) {
        console.error('Falha ao adicionar cliente:', error);
    }
};

export const getClientes = async () => {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Erro ao buscar clientes');
        }
        return await response.json();
    } catch (error) {
        console.error('Falha ao buscar clientes:', error);
    }
};

