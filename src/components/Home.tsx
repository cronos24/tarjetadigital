

import { Card } from 'primereact/card';
import imMoneda from "../assets/image/moneda.png";
import imLogoTarjeta from "../assets/image/logo.svg";
import imChip from "../assets/image/chip.png";

const Home = () => {

    return (
        <div className='w-full p-3'>
            <div className="grid">
                <div className="col-12">
                    <div className='grid'>
                        <div className='col-12 md:col-4 lg:col-4'>
                            <Card title="" className='card-items pl-2' style={{ background: '#121D37', border: '1px solid #2D457F', borderRadius: '15px', color: '#ffffff', height: '58px' }}>
                                <div className='grid flex justify-content-center align-content-center'>
                                    <div className='col-6 p-0 flex justify-content-star align-items-center'>TU BONO</div>
                                    <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap'>250.000 <img alt="logo" src={imMoneda} height="30" className="mx-2"></img></div>
                                </div>
                            </Card>
                        </div>
                        <div className='col-12 md:col-4 lg:col-4'>
                            <Card title="" className='card-items px-2' style={{ border: '1px solid #E5E5E5', borderRadius: '10px', height: '58px' }}>
                                <div className='grid flex justify-content-center align-content-center pt-2'>
                                    <div className='col-6 p-0 flex justify-content-star align-items-center'>Último Mnto.</div>
                                    <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap'>13 Mar 2024</div>
                                </div>
                            </Card>
                        </div>
                        <div className='col-12 md:col-4 lg:col-4'>
                            <Card title="" className='card-items px-2' style={{ border: '1px solid #E5E5E5', borderRadius: '10px', height: '58px' }}>
                                <div className='grid flex justify-content-center align-content-center pt-2'>
                                    <div className='col-6 p-0 flex justify-content-star align-items-center'>Próximo Mnto.</div>
                                    <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap'>13 Jul 2024</div>
                                </div>
                            </Card>
                        </div>
                    </div>

                </div>
                <div className='col-12 flex justify-content-center align-content-center lg:pt-5'>
                    <Card title="" className='w-11 md:w-7 lg:w-3 h-16rem md:h-18rem lg:h-18rem tarjeta'>
                        <div className='grid px-3 md:px-4 lg:px-4 h-full min-h-full'>
                            <div className='col-12 flex justify-content-star align-items-center' style={{ height: '30%' }}><img alt="logotarjeta" src={imLogoTarjeta} className='img-height-tarjeta'></img></div>

                            <div className='col-12' style={{ height: '35%' }}>
                                <div className='grid h-full min-h-full'>
                                    <div className='col-6 flex justify-content-star align-items-center'><img alt="logo" src={imChip} height="50" className="mx-2"></img></div>
                                    <div className='col-6 flex justify-content-end align-items-center'><span className='text-card1'>250.000</span></div>
                                </div>
                            </div>

                            <div className='col-12' style={{ height: '35%' }}>
                                <div className='grid h-full min-h-full'>
                                    <div className='col-6 flex justify-content-star align-items-center'>
                                        <div className='grid'>
                                            <div className='col-12 p-0'><span className='text-card2'>IER 946</span></div>
                                            <div className='col-12 p-0'><span className='text-card3'>JOSE JUAQÍN ORJUELA</span></div>
                                        </div>
                                    </div>
                                    <div className='col-6 flex justify-content-end align-items-center'>
                                        <div className='grid'>
                                            <div className='col-12 p-0 flex justify-content-center align-items-center'><img alt="logo" src={imMoneda} height="20" className="mx-2"></img></div>
                                            <div className='col-12 p-0 pt-2 flex justify-content-center'><span className='text-card3'>TARJETA DIGITAL</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;