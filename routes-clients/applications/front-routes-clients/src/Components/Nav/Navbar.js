import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Cadastro de Clientes</h1>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Cadastrar Cliente</Link>
                <Link to="/lista-clientes" className="nav-link">Lista de Clientes</Link>
            </div>
        </nav>
    );
};
export default Navbar;


