
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center py-4">
            <h1 className="font-bungee text-4xl md:text-6xl text-azul-pizarra tracking-wider">
                Las Escalas
            </h1>
            <h2 className="font-bungee text-2xl md:text-3xl text-azul-pizarra/80 tracking-wide mt-2">
                en Dibujo Técnico
            </h2>
             <div className="w-2/3 mx-auto mt-4 border-b-4 border-dotted border-rojo-tinta-sello"></div>
        </header>
    );
};

export default Header;
