import React from 'react';

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        // The border-t-0 class ensures the container seamlessly connects with the tab buttons above
        <section className="bg-carton-reciclado p-6 md:p-8 border-2 border-azul-pizarra/20 border-t-0">
            <div className="font-special-elite text-lg">
                {children}
            </div>
        </section>
    );
};

export default Section;
