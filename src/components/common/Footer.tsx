import React from 'react';
import { Divider } from 'primereact/divider';
import ic_location from "../../assets/image/icons/location-company.svg";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className='grid px-5 text-sm flex justify-content-center align-content-center'>
                <div className='col-12 lg:col-2 flex align-items-center justify-content-center align-content-center'>
                    <img alt="ic_location" src={ic_location} height="20" className='mr-3'></img>
                    Neiva - Huila <br />
                    Cra 16 No 20a-35
                </div>
                <Divider layout="vertical" className='m-0 mt-3 footer-divider' />
                <div className='col-12 lg:col-2 flex align-items-center justify-content-center align-content-center'>
                    <img alt="ic_location" src={ic_location} height="20" className='mr-3'></img>
                    Bogotá - Cundinamarca <br />
                    Cra 47 No. 12A-07
                </div>
                <Divider layout="vertical" className='m-0 mt-3 footer-divider' />
                <div className='col-12 lg:col-3 flex align-items-center justify-content-center align-content-center'>
                    <img alt="ic_location" src={ic_location} height="20" className='mr-3'></img>
                    Villavicencio - Meta <br />
                    Carrera 21b No. 8 - 50
                    Barrio La Primavera
                </div>
                <Divider layout="vertical" className='m-0 mt-3 footer-divider' />
                <div className='col-12 lg:col-2 flex align-items-center justify-content-center align-content-center'>
                    <img alt="ic_location" src={ic_location} height="20" className='mr-3'></img>
                    Ibagué - Tolima <br />
                    Cra 10 Sur No. 66-67
                </div>
                <Divider layout="vertical" className='m-0 mt-3 footer-divider' />
                <div className='col-12 lg:col-3 flex align-items-center justify-content-center align-content-center'>
                    <img alt="ic_location" src={ic_location} height="20" className='mr-3'></img>
                    Florencia - Caquetá <br />
                    Cra11 No. 14-33 km3 vía aeropuerto <br />
                    Complejo santa elena
                </div>
                <Divider className='m-0 mt-3 footer-divider' style={{ border: '1px solid #313E5D' }} />
                <div className='col-12 p-3 flex align-items-center justify-content-center align-content-center' style={{ color: '#F8FAFF' }}>
                    Power by Neduga Tech
                </div>
            </div>

        </footer>
    );
};

export default Footer;
