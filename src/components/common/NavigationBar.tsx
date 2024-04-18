import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import imLogo from "../../assets/image/logo.svg";
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Messages } from 'primereact/messages';
import { useRef, useEffect } from 'react';
import { useMountEffect } from 'primereact/hooks';
import { Toast } from 'primereact/toast';
import { useLocation } from 'react-router-dom';
import imMoneda from "../../assets/image/moneda.png";
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const msgs = useRef<Messages>(null);
    const location = useLocation();
    const isHomeRoute = location.pathname === '/Home';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const itemRenderer = function (item: any) {
        return (
            <a className="flex align-items-center p-menuitem-link" style={{ color: '#ffffff' }}>
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        );
    };
    const navigate = useNavigate();
    const toast = useRef<Toast>(null);

    useMountEffect(() => {
        toast.current?.show({ severity: 'info', summary: 'Mounted', sticky: true });
    });

    useEffect(() => {
        msgs.current?.clear();
        msgs.current?.show([
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content' },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content' },
            { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content' },
            { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content' }
        ]);
    }, []);

    const items = [
        {
            label: '',
            icon: 'pi pi-fw pi-home',
            visible: false,
            template: itemRenderer,
            command: () => { window.location.hash = "/"; }
        },
    ];

    const logOut = () => {
        navigate('/');
    };

    const start = <img alt="logo" src={imLogo} height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            {isHomeRoute ? (
                <>
                <Button icon="pi pi-bell" rounded text severity="warning" aria-label="Notification" className='p-button p-component p-button-icon-only p-button-text p-button-rounded p-button-warning' badge="8" onClick={() => setVisibleRight(true)} />
                <Button icon="pi pi-power-off" rounded text severity="warning" aria-label="Notification" className='p-button p-component p-button-icon-only p-button-text p-button-rounded p-button-warning' onClick={() => logOut()} />
                </>
            ) : (
                <img alt="Otra Imagen" src={imMoneda}  height="35"/>
            )}
        </div>
    );

    return (
        <div>
            <Menubar model={items} start={start} end={end} className='pt-3 px-3 menubarcustom' />
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} showCloseIcon={false}>
                <div className='grid'>
                    <div className='col-12'><h2>Notificaciones</h2></div>
                    <div className='col-12'>
                        <Messages ref={msgs} />
                    </div>
                    <div className='col-12'>
                        <Card title="Alerta 1">
                            <div className='grid'>
                                <div className='col-12 p-0'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='col-12'>
                        <Card title="Alerta 2">
                            <div className='grid'>
                                <div className='col-12 p-0'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='col-12'>
                        <Card title="Alerta 3">
                            <div className='grid'>
                                <div className='col-12 p-0'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='col-12'>
                        <Card title="Alerta 4">
                            <div className='grid'>
                                <div className='col-12 p-0'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default NavigationBar;
