import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-dark text-white p-3 text-center" style={{ background: '#990100', width: '100%' }}>
            <div className='grid text-sm'>
                <div className='col-12 lg:col-3 flex justify-content-center align-content-center'>
                    Neiva - Huila <br />
                    Cra 16 No 20a-35
                </div>
                <div className='col-12 lg:col-2 flex justify-content-center align-content-center'>
                    Bogotá - Cundinamarca <br />
                    Cra 47 No. 12A-07
                </div>
                <div className='col-12 lg:col-2 flex justify-content-center align-content-center'>
                    Villavicencio - Meta <br />
                    Carrera 21b No. 8 - 50
                    Barrio La Primavera
                </div>
                <div className='col-12 lg:col-2 flex justify-content-center align-content-center'>
                    Ibagué - Tolima <br />
                    Cra 10 Sur No. 66-67
                </div>
                <div className='col-12 lg:col-3 flex justify-content-center align-content-center'>
                    Florencia - Caquetá <br />
                    Cra11 No. 14-33 km3 vía aeropuerto <br />
                    Complejo santa elena
                </div>
            </div>
        </footer>
    );
};

export default Footer;
