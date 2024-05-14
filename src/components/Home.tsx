

import { Card } from 'primereact/card';
import imMoneda from "../assets/image/moneda.png";
import imLogoTarjeta from "../assets/image/logo.svg";
import imChip from "../assets/image/chip.png";
import { Divider } from 'primereact/divider';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingOverlay from './common/LoadingOverlay';
import axios from 'axios';
import { Message } from 'primereact/message';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ErrorModal from './common/ErrorModal';

interface CampaignSummary {
    id_campana: string;
    campana: string;
    valor_total_campana: number;
    vin: string;
    serial_interno: string;
    socio_negocio: string;
    fecha_ultimo_mnto: string | null;
    fecha_proximo_mnto: string | null;
}

interface CampaignEntry {
    id_campana: string;
    campana: string;
    fecha_limite_vigencia: string;
    valor_campana: number;
    redimido: string;
}

interface CampaignDetail {
    HasEntries: boolean;
    TotalEntries: number;
    PageNumber: number;
    PageSize: number;
    TotalPages: number;
    Entries: CampaignEntry[];
}

interface CampaignObject {
    resumen: CampaignSummary;
    detalle: CampaignDetail;
}




const Home = () => {
    const welcomeRef = useRef<HTMLInputElement>(null);
    const { placa } = useParams<"placa">();
    const [loading, setLoading] = useState<boolean>(false);
    const [datos, setDatos] = useState<CampaignObject | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    
    useEffect(() => {
        
        welcomeRef.current?.focus();
        fetchData();
    }, [placa]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const url = import.meta.env.VITE_API_URL;
            
            await axios.get(url + '/' + placa, {
                headers: {
                    'X-API-Key': import.meta.env.VITE_API_KEY
                }
            })
            .then((response) => {
                const data = response.data;
                setDatos(data?.Objeto);
                // console.log(data, datos);
                
            })
            .catch((error) => {
                console.log();
                setError('Hubo un problema al cargar los datos: '+ error.response.data.Mensaje);
                setModalVisible(true);
            });
            
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setError(null);
    };

    const content = (
        <div className="flex align-items-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon p-inline-message-icon" aria-hidden="true" data-pc-section="icon"><path d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z" fill="currentColor"></path><path d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z" fill="currentColor"></path><path d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z" fill="currentColor"></path></svg>
            <div className="ml-2">No se encontraron datos para la placa {placa}</div>
        </div>
    );


    const formatNumber = (value: number | undefined): string => {
        if (value === undefined) return "—";  // Devuelve un guión si el valor es undefined

        // Usando Intl.NumberFormat para formatear el número
        const formatter = new Intl.NumberFormat('es-CO', {
            maximumFractionDigits: 2,  // Asegura hasta dos dígitos decimales
        });

        return formatter.format(value);
    };

  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function currencyTemplate(rowData: any, field: string) {

        const numberFormatted = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(rowData[field]);

        return numberFormatted;
    }

    const fechaTemplate = (rowData: CampaignEntry) => {

        const fechaRaw = rowData.fecha_limite_vigencia;
        const fechaFormatted = fechaRaw?.split('T')[0];

        return <span>{fechaFormatted}</span>;
    };

    const fechaFormat = (fecha: string | null) => {
        if (fecha != null) {
            const fechaFormatted = fecha?.split('T')[0];
            return <span>{fechaFormatted}</span>;
        }
        
    };


    return (
        <div className='w-full px-3 md:px-8 lg:px-8 pt-5 pb-8'>
            <ErrorModal visible={modalVisible} onClose={handleCloseModal} message={error || ''} />
            {loading ? (
                <LoadingOverlay visible={loading} />
            ) : (
                datos && datos?.resumen ? (
                    <Card className='p-0 border-round-3xl'>
                        <div className="grid">
                            <div className="col-12 p-5 pb-0">
                                <span className='text-titulo flex justify-content-center align-content-center'><span className='wellcome' ref={welcomeRef} tabIndex={-1}>¡Bienvenido!</span></span>
                                <p className='text-subtitulo flex justify-content-center align-content-center text-center'>Conozca los beneficios exclusivos que tenemos para ti</p>
                            </div>
                            <div className="col-12 md2:col-12 lg-xl:col-10 lg-xl:col-offset-1 sm-xl:col-10 sm-xl:col-offset-1 md:col-8 md:col-offset-2 md-xl:col-8 md:col-offset-2 lg:col-8 lg:col-offset-2 md:px-5 lg:px-5">
                                <div className='grid'>
                                    <div className='col-12 md-xl:col-12 md:col-4 lg:col-4'>
                                        <Card title="" className='card-items pl-2' style={{ background: '#121D37 0% 0% no-repeat padding-box', border: '1px solid #2D457F', borderRadius: '10px', color: '#ffffff', height: '40px' }}>
                                            <div className='grid flex justify-content-center align-content-center'>
                                                <div className='col-6 p-0 flex justify-content-star align-items-center'><span className='text-card-1-1'>TU BONO</span></div>
                                                <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap'><span className='text-card-1-2'>{formatNumber(datos?.resumen.valor_total_campana)}</span> <img alt="logo" src={imMoneda} height="20" className="mx-2"></img></div>
                                            </div>
                                        </Card>
                                    </div>
                                    <div className='col-12 md-xl:col-12 md:col-4 lg:col-4'>
                                        <Card title="" className='card-items px-2' style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', border: '1px solid #E5E5E5', borderRadius: '10px', height: '40px' }}>
                                            <div className='grid flex justify-content-center align-content-center'>
                                                <div className='col-6 p-0 flex justify-content-star align-items-center text-card-2-1'>Último Mnto.</div>
                                                <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap text-card-2-2'>{fechaFormat(datos?.resumen.fecha_ultimo_mnto)}</div>
                                            </div>
                                        </Card>
                                    </div>
                                    <div className='col-12 md-xl:col-12 md:col-4 lg:col-4'>
                                        <Card title="" className='card-items px-2' style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', border: '1px solid #E5E5E5', borderRadius: '10px', height: '40px' }}>
                                            <div className='grid flex justify-content-center align-content-center'>
                                                <div className='col-6 p-0 flex justify-content-star align-items-center text-card-2-1'>Próximo Mnto.</div>
                                                <div className='col-6 p-0 flex justify-content-end align-items-center flex-wrap text-card-2-2'>{fechaFormat(datos?.resumen.fecha_proximo_mnto)}</div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>

                            </div>
                            <div className='col-12 md::px-5 lg:px-5 flex justify-content-center align-content-center lg:pt-5'>
                                <Card title="" className='w-11 sm:w-11 sm-xl:w-5 md:w-8 lg:w-3 lg-xl:w-5 h-16rem md:h-18rem lg:h-18rem tarjeta'>
                                    <div className='grid pb-3 md:px-4 lg:px-4 h-full min-h-full'>
                                        <div className='col-12 flex justify-content-star align-items-center' style={{ height: '30%' }}><img alt="logotarjeta" src={imLogoTarjeta} className='img-height-tarjeta'></img></div>

                                        <div className='col-12' style={{ height: '35%' }}>
                                            <div className='grid h-full min-h-full'>
                                                <div className='col-6 flex justify-content-star align-items-center'><img alt="logo" src={imChip} height="50" className="mx-2"></img></div>
                                                <div className='col-6 flex justify-content-end align-items-center'><span className='text-card1'>{formatNumber(datos?.resumen.valor_total_campana)}</span></div>
                                            </div>
                                        </div>

                                        <div className='col-12 pt-4' style={{ height: '35%' }}>
                                            <div className='grid h-full min-h-full'>
                                                <div className='col-10 flex justify-content-star align-items-center'>
                                                    <div className='grid'>
                                                        <div className='col-12 p-0'><span className='text-card2'>{datos?.resumen.serial_interno}</span></div>
                                                        <div className='col-12 p-0'><span className='text-card3'>{datos?.resumen.socio_negocio}</span></div>
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

                            <div className="col-12 md:col-10 md:col-offset-1 md-xl:col-12 md-xl:col-offset-0 lg:col-10 lg:col-offset-1 md:px-5 lg:px-5 flex justify-content-center align-items-center">
                                <div className='grid w-full'>
                                    <div className='col-12'>
                                        <DataTable stripedRows paginator rows={10} rowsPerPageOptions={[10, 25, 50, 100]} value={datos?.detalle.Entries} className='informacion'>
                                            <Column field="id_campana" header="Código" ></Column>
                                            <Column field="campana" header="Campaña" ></Column>
                                            <Column field="valor_campana" header="Valor" body={(rowData) => currencyTemplate(rowData, 'valor_campana')}></Column>
                                            <Column field="fecha_limite_vigencia" header="Fecha vigencia" body={fechaTemplate}></Column>
                                            <Column field="redimido" header="Redimido" ></Column>
                                        </DataTable>
                                    </div>
                                    {/* <div className='col-12 md:col-12 lg:col-12 overflow-x-auto'>
                                        <Card title="" className='card-items' style={{ background: '#121D37 0% 0% no-repeat padding-box', border: '1px solid #2D457F', borderRadius: '10px', color: '#ffffff', minHeight: '36px', fontSize: '14px' }}>
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
                                        <Card title="" className='card-items' style={{ background: '#E9E9E9 0% 0% no-repeat padding-box', borderRadius: '10px', color: '#121D37', fontSize: '13px', minHeight: '50px' }}>
                                            {datos?.detalle.Entries.map((item: CampaignEntry, index: number) => (

                                                <div key={index} className='grid py-2 flex flex-column md:flex-row lg:flex-row justify-content-center align-content-center overflow-x-auto'>
                                                    <div className='col-12 md:col-2 lg:col-2 p-0 flex justify-content-star align-items-center overflow-x-auto'>{item.id_campana}</div>
                                                    <div className='col-12 md:col-6 lg:col-6 p-0 flex justify-content-star align-items-center overflow-x-auto'>{item.campana}</div>
                                                    <div className='col-12 md:col-1 lg:col-1 p-0 flex justify-content-star align-items-center overflow-x-auto'>{formatNumberMoney(item.valor_campana)}</div>
                                                    <div className='col-12 md:col-2 lg:col-2 p-0 flex justify-content-star align-items-center overflow-x-auto'>{fechaTemplate(item.fecha_limite_vigencia)}</div>
                                                    <div className='col-12 md:col-1 lg:col-1 p-0 flex justify-content-star align-items-center overflow-x-auto'>{item.redimido}</div>
                                                </div>
                                            ))}

                                        </Card>
                                    </div> */}
                                </div>

                            </div>
                        </div>
                    </Card>
                ) : (
                    <div className="card flex justify-content-center">
                        <Message
                            style={{
                                border: 'solid #cc8925',
                                borderWidth: '0 0 0 6px',
                                color: '#cc8925'
                            }}
                            className="border-yellow-300 justify-content-start"
                            severity="warn" content={content} />
                    </div>
                )

            )}


        </div>
    );
};

export default Home;