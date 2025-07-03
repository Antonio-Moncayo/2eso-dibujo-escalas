import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import InteractiveCalculator from './components/InteractiveCalculator';
import Quiz from './components/Quiz';

const GeneralScaleVisual: React.FC = () => (
    <div className="my-10 p-4 md:p-6 bg-carton-reciclado border-2 border-dashed border-azul-pizarra/30 flex flex-col md:flex-row items-center justify-around gap-6 text-center text-texto-oscuro">
        {/* Real Object */}
        <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <title>Objeto Real</title>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <p className="font-bold mt-2 text-lg">OBJETO REAL</p>
            <p className="text-base">(Ej: 10 metros)</p>
        </div>
        
        {/* The relationship / formula */}
        <div className="flex flex-col items-center font-special-elite text-azul-pizarra mx-4">
             <p className="text-2xl md:text-3xl font-bold mb-2">ESCALA =</p>
             <div className="text-center">
                <p className="text-xl font-bold">Medida Dibujo</p>
                <div className="border-t-2 border-texto-oscuro w-36 my-1"></div>
                <p className="text-xl font-bold">Medida Real</p>
            </div>
        </div>
        
        {/* Drawing */}
        <div className="flex flex-col items-center">
            <div className="relative w-[100px] h-[80px] bg-white border-2 border-texto-oscuro/50 flex items-center justify-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <title>Dibujo en Papel</title>
                   <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                   <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </div>
            <p className="font-bold mt-2 text-lg">DIBUJO EN PAPEL</p>
            <p className="text-base">(Ej: 10 cm)</p>
        </div>
    </div>
);


// Ruta SVG para un icono de engranaje, utilizada para 'Natural' y 'Ampliación'
const cogPath = "M19.14,12.94,18,11.8V10.2l1.14-1.14a1,1,0,0,0-1.41-1.41L16.6,8.79,15.21,7.4l.79-1.14a1,1,0,0,0-1.21-1.6L12.94,5.43,12,4.86,11.06,5.43,9.2,4.66a1,1,0,0,0-1.21,1.6L8.79,7.4,7.4,8.79,6.27,7.65A1,1,0,0,0,4.86,9.06L6,10.2v1.6L4.86,12.94a1,1,0,1,0,1.41,1.41L7.4,13.21l1.39,1.39-.79,1.14a1,1,0,0,0,1.21,1.6l1.86-.77.94.57.94-.57,1.86.77a1,1,0,0,0,1.21-1.6l-.79-1.14,1.39-1.39,1.13,1.14a1,1,0,0,0,1.41-1.41Z";

const ScaleReductionVisual: React.FC = () => (
    <div className="flex items-center justify-center gap-4 text-texto-oscuro my-4 h-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><title>Objeto Real</title><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><title>Dibujo</title><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    </div>
);

const ScaleNaturalVisual: React.FC = () => (
    <div className="flex items-center justify-center gap-4 text-texto-oscuro my-4 h-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><title>Objeto Real</title><path d={cogPath}></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><title>Dibujo</title><path d={cogPath}></path></svg>
    </div>
);

const ScaleEnlargementVisual: React.FC = () => (
     <div className="flex items-center justify-center gap-4 text-texto-oscuro my-4 h-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><title>Objeto Real</title><path d={cogPath}></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><title>Dibujo</title><path d={cogPath}></path></svg>
    </div>
);


const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('explanation');

    const tabs = [
        { id: 'explanation', label: '¿Qué son las Escalas?' },
        { id: 'calculator', label: 'Calculadora' },
        { id: 'quiz', label: 'Ponte a Prueba' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'explanation':
                return (
                    <div>
                        <p className="text-lg mb-4 text-center max-w-4xl mx-auto">
                            En dibujo técnico, una escala es la relación que existe entre las dimensiones de un objeto en el dibujo y sus dimensiones en la realidad. Nos permite representar objetos muy grandes en un espacio pequeño (como un mapa) o dibujar objetos muy pequeños con más detalle (como un microchip).
                        </p>
                        
                        <GeneralScaleVisual />

                        <h2 className="font-bungee text-2xl text-center text-azul-pizarra/90 mt-12 mb-8 tracking-wide">
                            TIPOS DE ESCALAS
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="border border-texto-oscuro/20 p-4 bg-papel-envejecido text-center">
                                <h3 className="font-special-elite font-bold text-rojo-tinta-sello text-xl mb-2">ESCALA NATURAL (1:1)</h3>
                                <ScaleNaturalVisual />
                                <p>El objeto se dibuja a su tamaño real. La medida en el papel es la misma que en la realidad.</p>
                            </div>
                            <div className="border border-texto-oscuro/20 p-4 bg-papel-envejecido text-center">
                                <h3 className="font-special-elite font-bold text-rojo-tinta-sello text-xl mb-2">ESCALA DE REDUCCIÓN (1:X)</h3>
                                <ScaleReductionVisual />
                                <p>Se usa para objetos más grandes que el papel. Ejemplo: 1:50 (1 cm en el dibujo son 50 cm reales).</p>
                            </div>
                            <div className="border border-texto-oscuro/20 p-4 bg-papel-envejecido text-center">
                                <h3 className="font-special-elite font-bold text-rojo-tinta-sello text-xl mb-2">ESCALA DE AMPLIACIÓN (X:1)</h3>
                                <ScaleEnlargementVisual />
                                <p>Se usa para piezas muy pequeñas. Ejemplo: 5:1 (5 cm en el dibujo son 1 cm en la realidad).</p>
                            </div>
                        </div>
                    </div>
                );
            case 'calculator':
                return <InteractiveCalculator />;
            case 'quiz':
                return <Quiz />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen container mx-auto p-4 md:p-8">
            <Header />
            <main className="mt-8">
                {/* Tab buttons */}
                <div className="flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 font-special-elite font-bold text-lg md:text-xl uppercase py-3 px-2 border-2 border-b-0 border-azul-pizarra/20 transition-colors duration-200
                                ${activeTab === tab.id 
                                    ? 'bg-carton-reciclado text-rojo-tinta-sello' 
                                    : 'bg-papel-envejecido text-azul-pizarra hover:bg-carton-reciclado/50'
                                }
                            `}
                            aria-current={activeTab === tab.id ? 'page' : undefined}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                
                {/* Tab content */}
                <Section>
                    {renderContent()}
                </Section>
            </main>
             <footer className="text-center py-8 mt-12 text-texto-oscuro/70">
                <p>Aplicación de Tecnología - "Tecnolog-IA"</p>
                <p>Diseño inspirado en manuales técnicos retro.</p>
            </footer>
        </div>
    );
};

export default App;