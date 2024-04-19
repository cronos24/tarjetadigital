

import { Card } from 'primereact/card';
import imMoneda from "../assets/image/moneda.png";
import imLogoTarjeta from "../assets/image/logo.svg";
import imChip from "../assets/image/chip.png";
import { Divider } from 'primereact/divider';
import { useRef, useEffect } from 'react';

const Home = () => {
    const welcomeRef  = useRef<HTMLInputElement>(null);

    useEffect(() => {
        welcomeRef.current?.focus();
      }, []);

    return (
        <div className='w-full px-3 md:px-8 lg:px-8 pt-5 pb-8'>
            <Card className='p-0 border-round-3xl'>
                <div className="grid">
                    <div className="col-12 p-5 pb-0">
                        <span className='text-titulo flex justify-content-center align-content-center'><span className='wellcome' ref={welcomeRef} tabIndex={-1}>¡Bienvenido!</span></span>
                        <p className='text-subtitulo flex justify-content-center align-content-center text-center'>Conozca los beneficios exclusivos que tenemos para ti</p>
                    </div>
                    <div className="col-12 md:col-8 md:col-offset-2 lg:col-8 lg:col-offset-2 md:px-5 lg:px-5">
                        <div className='grid'>
                            <div className='col-12 md:col-4 lg:col-4'>
                                <Card title="" className='card-items pl-2' style={{ background: '#121D37 0% 0% no-repeat padding-box', border: '1px solid #2D457F', borderRadius: '10px', color: '#ffffff', height: '40px' }}>
                                    <div className='grid flex justify-content-center align-content-center'>
                                        <div className='col-6 p-0 flex justify-content-star align-items-center'><span className='text-card-1-1'>TU BONO</span></div>
                                        <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap'><span className='text-card-1-2'>250.000</span> <img alt="logo" src={imMoneda} height="20" className="mx-2"></img></div>
                                    </div>
                                </Card>
                            </div>
                            <div className='col-12 md:col-4 lg:col-4'>
                                <Card title="" className='card-items px-2' style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', border: '1px solid #E5E5E5', borderRadius: '10px', height: '40px' }}>
                                    <div className='grid flex justify-content-center align-content-center'>
                                        <div className='col-6 p-0 flex justify-content-star align-items-center text-card-2-1'>Último Mnto.</div>
                                        <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap text-card-2-2'>13 Mar 2024</div>
                                    </div>
                                </Card>
                            </div>
                            <div className='col-12 md:col-4 lg:col-4'>
                                <Card title="" className='card-items px-2' style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', border: '1px solid #E5E5E5', borderRadius: '10px', height: '40px' }}>
                                    <div className='grid flex justify-content-center align-content-center'>
                                        <div className='col-6 p-0 flex justify-content-star align-items-center text-card-2-1'>Próximo Mnto.</div>
                                        <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap text-card-2-2'>13 Jul 2024</div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 md::px-5 lg:px-5 flex justify-content-center align-content-center lg:pt-5'>
                        <Card title="" className='w-11 sm:w-11 md:w-8 lg:w-3 h-16rem md:h-18rem lg:h-18rem tarjeta'>
                            <div className='grid pb-3 md:px-4 lg:px-4 h-full min-h-full'>
                                <div className='col-12 flex justify-content-star align-items-center' style={{ height: '30%' }}><img alt="logotarjeta" src={imLogoTarjeta} className='img-height-tarjeta'></img></div>

                                <div className='col-12' style={{ height: '35%' }}>
                                    <div className='grid h-full min-h-full'>
                                        <div className='col-6 flex justify-content-star align-items-center'><img alt="logo" src={imChip} height="50" className="mx-2"></img></div>
                                        <div className='col-6 flex justify-content-end align-items-center'><span className='text-card1'>250.000</span></div>
                                    </div>
                                </div>

                                <div className='col-12 pt-4' style={{ height: '35%' }}>
                                    <div className='grid h-full min-h-full'>
                                        <div className='col-10 flex justify-content-star align-items-center'>
                                            <div className='grid'>
                                                <div className='col-12 p-0'><span className='text-card2'>IER 946</span></div>
                                                <div className='col-12 p-0'><span className='text-card3'>JOSE JUAQÍN ORJUELA</span></div>
                                            </div>
                                        </div>
                                        <div className='col-2 flex justify-content-end align-items-center'>
                                            <div className='grid'>
                                                <div className='col-12 p-0 flex justify-content-center align-items-center'><img alt="logo" src={imMoneda} height="30" className="mx-2"></img></div>
                                                <div className='col-12 p-0 pt-2 flex justify-content-center'><span className='text-card3 text-center'>TARJETA DIGITAL</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </Card>
                    </div>
                    <Divider />
                    <div className="col-12 md:col-8 md:col-offset-2 lg:col-8 lg:col-offset-2 md:px-5 lg:px-5 flex justify-content-center align-items-center">
                        <div className='grid w-full'>
                            <div className='col-12 md:col-12 lg:col-12 overflow-x-auto'>
                                <Card title="" className='card-items' style={{ background: '#121D37 0% 0% no-repeat padding-box', border: '1px solid #2D457F', borderRadius: '10px', color: '#ffffff', minHeight: '36px', fontSize:'14px' }}>
                                    <div className='grid flex flex-column md:flex-row lg:flex-row justify-content-center align-content-center'>
                                        <div className='col-12 md:col-2 p-0 flex justify-content-star align-items-center'>Código</div>
                                        <div className='col-12 md:col-6 p-0 flex justify-content-star align-items-center'>Campaña</div>
                                        <div className='col-12 md:col-1 lg:col-1 p-0 flex justify-content-star align-items-center'>Valor</div>
                                        <div className='col-12 md:col-2 p-0 flex justify-content-star align-items-center'>Fecha vigencia</div>
                                        <div className='col-12 md:col-1 lg:col-1 p-0 flex justify-content-star align-items-center'>Redimido</div>
                                    </div>
                                </Card>
                            </div>        
                            <div className='col-12 md:col-12 lg:col-12 pt-0 overflow-x-auto'>
                                <Card title="" className='card-items' style={{ background: '#E9E9E9 0% 0% no-repeat padding-box', borderRadius: '10px', color: '#121D37', fontSize:'13px', minHeight: '50px' }}>
                                    <div className='grid flex flex-column md:flex-row lg:flex-row justify-content-center align-content-center overflow-x-auto'>
                                        <div className='col-12 md:col-2 lg:col-2 p-0 flex justify-content-star align-items-center overflow-x-auto'>TDCP698316</div>
                                        <div className='col-12 md:col-6 lg:col-6 p-0 flex justify-content-star align-items-center overflow-x-auto'>TDCP698316 TARJETA DIGITAL BONOS POR COMPRAS <br /> POSTVENTA</div>
                                        <div className='col-12 md:col-1 lg:col-1 p-0 flex justify-content-star align-items-center overflow-x-auto'>$34.000</div>
                                        <div className='col-12 md:col-2 lg:col-2 p-0 flex justify-content-star align-items-center overflow-x-auto'>2024-07-10 00:00:00</div>
                                        <div className='col-12 md:col-1 lg:col-1 p-0 flex justify-content-star align-items-center overflow-x-auto'>No</div>
                                    </div>
                                </Card>
                            </div>                 
                        </div>

                    </div>
                </div>
            </Card>

        </div>
    );
};

export default Home;