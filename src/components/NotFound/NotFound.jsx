import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="container text-center my-5">
        <h1 className="display-4 text-danger">404</h1>
        <p className="lead mb-4">¡Página no encontrada!</p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
);

export default NotFound;