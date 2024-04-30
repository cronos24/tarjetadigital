

import { Card } from 'primereact/card';
import { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import reindustrias from "../assets/image/reindustrias.png";
import { Dialog } from 'primereact/dialog';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const Login = () => {
    const [condiciones, setCondiciones] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current?.focus();
        }
    }, []);
    const validate = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const regex = /^[a-zA-Z0-9]+$/;
        if (event.key.length === 1 && !regex.test(event.key)) {
            event.preventDefault();
        }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value.toUpperCase();
        if (/^[a-zA-Z0-9]*$/.test(val)) {
            setValue(val.slice(0, 6));
        }
    };
    const handleSearchClick = () => {       

        if (value) { // Asegurarse de que `value` no esté vacío
            navigate(`/Home/${value}`);
        } else {          
            confirm1();
        }
    };

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" style={{ background: '#121D37' }} onClick={() => setCondiciones(false)} autoFocus />
        </div>
    );


    const confirm1 = () => {
        confirmDialog({
            message: 'Por favor ingresa el número de placa antes de verificar.',
            header: 'Error',
            icon: 'pi p-inline-message-icon',       
        });
    };

    return (
        <div className='w-full p-3'>
            <div className="grid">
                <div className='col-12 md-xl:col-12 md-xl:col-offset-0 md:col-6 md:col-offset-3 lg:col-8 lg:col-offset-2 flex justify-content-center align-content-center lg:pt-8'>
                    
                    <Card title="" className='card-login w-full' style={{ border: '1px solid #DBDBDB', borderRadius: '25px' }}>
                        <div className='grid pt-2'>
                            <div className='col-12 md-xl:col-12 md:col-5 lg:col-5 flex align-items-center justify-content-center'>
                                <div className='md:p-5 lg:p-5'>
                                    <img alt="ic_location" src={reindustrias} className='md:py-3 lg:py-3 h-15rem lg-xl:h-14rem md:h-18rem lg:h-18rem xl:h-18'></img>
                                </div>
                            </div>
                            <Divider layout="vertical" className='m-0' />
                            <div className='col-12 md-xl:col-12 md:col-7 lg:col-7'>
                                <div className='grid flex flex-column text-black-alpha-90 lg:pt-5'>
                                    <div className='col-12 text-xl font-bold lg:text-4xl flex align-items-center justify-content-center text-center'><span className='titulo-login'>Consulta <br /> el saldo de tu tarjeta digital</span></div>
                                    <div className='col-12 pt-2 text-sm lg:text-base flex align-items-center justify-content-center'><span className='subtitulo-login'>Ingresa aquí el número de tu placa</span></div>
                                    <div className='col-12 flex align-items-center justify-content-center'>
                                        <InputText value={value} ref={inputRef} className='w-6 h-5rem md:w-4 lg:w-4 lg:h-4rem text-4xl text-center' style={{ backgroundColor: '#FFBF2A', border: '1px solid #E0E0E0', color: '#121D37', font: 'normal normal bold 25px/30px Helvetica Neue' }} onChange={handleChange}
                                            onKeyPress={validate}
                                            maxLength={6} />
                                    </div>
                                    <div className='col-12 lg:pt-2 flex align-items-center justify-content-center'>
                                        <Button label="VERIFICAR" onClick={handleSearchClick} className='w-5 md:w-4 lg:w-4' style={{ backgroundColor: '#121D37', height: '50px' }} />
                                    </div>
                                    <div className='col-12 flex align-items-center justify-content-center'>
                                        <span className='text-condiciones' style={{ cursor: 'pointer', textDecoration:'underline' }} onClick={() => setCondiciones(true)}>*Aplican términos y condiciones*</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <ConfirmDialog
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div className="flex flex-column align-items-center p-5 surface-overlay border-round">
                        <div className="border-circle bg-yellow-300 inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                            <i className="pi pi-info text-5xl"></i>
                        </div>
                        <span className="font-bold text-2xl block mb-2 mt-4" ref={headerRef as React.Ref<HTMLSpanElement>}>
                            {message.header}
                        </span>
                        <p className="mb-0" ref={contentRef as React.Ref<HTMLParagraphElement>}>
                            {message.message}
                        </p>
                        <div className="flex align-items-center gap-2 mt-4" ref={footerRef as React.Ref<HTMLDivElement>}>
                            <Button
                                label="Ok"
                                outlined
                                onClick={(event) => {
                                    hide(event);
                                }}
                                className="w-8rem"
                            ></Button>
                        </div>
                    </div>
                )}
            />

            <Dialog header="Términos y condiciones" closable={false} visible={condiciones} style={{ width: '90%' }} onHide={() => setCondiciones(false)} footer={footerContent}>
                <p className="m-0">
                    <ol>
                        <li>Por cada factura realizada de los servicios y productos de Posventa y Serviteca recibe una recarga equivalente al 8% del valor de la compra antes de IVA, con fecha de vigencia de 6 meses y pueden ser redimidos en productos y servicios en los talleres y servitecas en Neiva, Ibagué y Villavicencio.</li>
                        <li>Por la compra de un vehículo nuevo recibe siete (7) recargas por valor de $30.000 cada una, con fecha de vigencia de 6 meses y puede ser redimida en los servicios: lavado sencillo, Alineación, Revisión de viaje, o calibraciones en nuestras servitecas Neiva, Ibagué y Villavicencio.</li>
                        <li>A nuestros clientes que cumplan 3 años de haber comprado un vehículo de nuestras marcas, recibirá una recarga de $500.000, con fecha de vigencia de 1 año, para la compra auto nuevo de nuestras marcas. Si la compra que realiza el cliente es de una camioneta se otorgará un bono a $1.000.000.</li>
                        <li>Cada recarga debe ser usada en su totalidad en una única compra, no se puede redimir parcialmente.</li>
                        <li>Este plan de fidelización no es acumulable con otras promociones o descuentos y es intransferibles.</li>
                        <li>Todas las recargas se aplican a una placa y no se podrá redimir en otros vehículos.</li>
                        <li>Para redimir cada recarga, se cobrará un valor de $5.000 por cada recargar redimida.</li>
                        <li>El cliente debe agendar al call center +(57) 333 6025 006.</li>
                        <li>No es redimible en dinero.</li>
                    </ol>
                </p>
            </Dialog>
        </div>
    );
};

export default Login;