import React, { useState, useMemo } from 'react';

const InteractiveCalculator: React.FC = () => {
    const [realMeasure, setRealMeasure] = useState('100');
    const [scaleNum, setScaleNum] = useState('1');
    const [scaleDen, setScaleDen] = useState('50');

    const { drawingMeasure, isValid } = useMemo(() => {
        const real = parseFloat(realMeasure);
        const num = parseFloat(scaleNum);
        const den = parseFloat(scaleDen);

        if (isNaN(real) || isNaN(num) || isNaN(den) || den === 0 || real <= 0) {
            return { drawingMeasure: 0, isValid: false };
        }

        const result = (real * num) / den;
        return { 
            drawingMeasure: result,
            isValid: true
        };
    }, [realMeasure, scaleNum, scaleDen]);
    
    // --- Visual Logic for the Drawing Table ---
    const paperWidthInCm = 25; // Virtual paper is 25cm wide
    const paperPaddingPx = 20; // Padding inside the SVG
    const svgWidth = 500;
    const svgHeight = 250;
    const pixelsPerCm = (svgWidth - 2 * paperPaddingPx) / paperWidthInCm;
    
    const lineLengthPx = drawingMeasure * pixelsPerCm;
    const isOutOfBounds = lineLengthPx > (svgWidth - 2 * paperPaddingPx);

    const inputClass = "w-full bg-papel-envejecido border-2 border-azul-pizarra text-texto-oscuro p-3 text-center text-xl focus:outline-none focus:border-rojo-tinta-sello";

    return (
        <div className="p-4 bg-papel-envejecido border border-dashed border-texto-oscuro/50">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* --- Input Controls --- */}
                <div className="flex-1 space-y-6">
                    <div>
                        <h3 className="font-special-elite font-bold text-rojo-tinta-sello text-xl mb-4 text-center">Introduce los Datos</h3>
                        <div className="space-y-2 mb-4">
                            <label className="block text-center font-bold text-lg">1. Medida Real (cm)</label>
                            <input
                                type="number"
                                value={realMeasure}
                                onChange={(e) => setRealMeasure(e.target.value)}
                                className={inputClass}
                                placeholder="Ej: 100"
                            />
                        </div>
                        <div className="space-y-2 mb-6">
                            <label className="block text-center font-bold text-lg">2. Escala</label>
                            <div className="flex items-center justify-center gap-2">
                                <input
                                    type="number"
                                    value={scaleNum}
                                    onChange={(e) => setScaleNum(e.target.value)}
                                    className={inputClass}
                                    placeholder="1"
                                />
                                <span className="font-bold text-2xl text-texto-oscuro/80">:</span>
                                <input
                                    type="number"
                                    value={scaleDen}
                                    onChange={(e) => setScaleDen(e.target.value)}
                                    className={inputClass}
                                    placeholder="50"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t-4 border-dotted border-rojo-tinta-sello/50 my-4"></div>

                     <div className="space-y-2">
                        <label className="block text-center font-bold text-lg text-azul-pizarra">3. Medida en Dibujo (cm)</label>
                        <div className={`${inputClass} bg-carton-reciclado select-none font-bold text-2xl`}>
                           {isValid ? drawingMeasure.toFixed(2) : '---'}
                        </div>
                    </div>
                </div>

                {/* --- Visual Representation: The Drawing Table --- */}
                <div className="flex-1 flex flex-col items-center justify-center bg-carton-reciclado p-4 border-2 border-azul-pizarra/20 min-h-[350px]">
                    <h3 className="font-special-elite font-bold text-rojo-tinta-sello text-xl mb-2">Mesa de Dibujo Virtual</h3>
                    
                    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full bg-white border-2 border-texto-oscuro/20 shadow-inner">
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                            </marker>
                        </defs>

                        <g transform={`translate(${paperPaddingPx}, 30)`} className="text-texto-oscuro/60 font-sans text-xs">
                            <line x1="0" y1="0" x2={svgWidth - 2 * paperPaddingPx} y2="0" stroke="currentColor" strokeWidth="1" />
                            {Array.from({ length: paperWidthInCm + 1 }).map((_, i) => (
                                <g key={`tick-${i}`}>
                                    <line x1={i * pixelsPerCm} y1="0" x2={i * pixelsPerCm} y2={i % 5 === 0 ? 10 : 5} stroke="currentColor" strokeWidth="1" />
                                    {i % 5 === 0 && <text x={i * pixelsPerCm} y="22" textAnchor="middle">{i}</text>}
                                </g>
                            ))}
                            <text x={svgWidth/2 - paperPaddingPx} y="-8" textAnchor="middle" className="text-sm font-special-elite fill-current text-azul-pizarra">Escalímetro (cm)</text>
                        </g>

                        <g transform={`translate(${paperPaddingPx}, ${svgHeight / 2})`}>
                            {isValid && lineLengthPx > 0 && (
                                <g className={isOutOfBounds ? 'text-rojo-tinta-sello/50' : 'text-rojo-tinta-sello'}>
                                    <line 
                                        x1="0" y1="20" x2={Math.min(lineLengthPx, svgWidth - 2 * paperPaddingPx)} y2="20" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        markerStart="url(#arrow)" 
                                        markerEnd="url(#arrow)"
                                        className="transition-all duration-300 ease-in-out"
                                    />
                                    <line x1="0" y1="-10" x2="0" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                                    <line 
                                        x1={Math.min(lineLengthPx, svgWidth - 2 * paperPaddingPx)} y1="-10" 
                                        x2={Math.min(lineLengthPx, svgWidth - 2 * paperPaddingPx)} y2="20" 
                                        stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"
                                        className="transition-all duration-300 ease-in-out"
                                    />
                                    <text 
                                        x={Math.min(lineLengthPx, svgWidth - 2 * paperPaddingPx) / 2} y="15" 
                                        textAnchor="middle" 
                                        className="font-special-elite text-lg fill-current"
                                    >
                                        {drawingMeasure.toFixed(2)} cm
                                    </text>
                                </g>
                            )}
                        </g>

                        {(!isValid || lineLengthPx <= 0) && (
                            <text x={svgWidth/2} y={svgHeight/2 + 20} textAnchor="middle" className="font-special-elite text-xl text-texto-oscuro/20">
                                La medida aparecerá aquí
                            </text>
                        )}
                    </svg>

                    {isOutOfBounds && (
                        <p className="font-bold text-rojo-tinta-sello mt-2 text-center text-sm">
                            ¡ADVERTENCIA! La medida es demasiado grande para esta hoja de papel.
                        </p>
                    )}
                </div>
            </div>
             <p className="text-center mt-8 text-texto-oscuro/80 text-base">
                Modifica los valores y observa cómo se dibuja la línea de cota a escala.
            </p>
        </div>
    );
};

export default InteractiveCalculator;
