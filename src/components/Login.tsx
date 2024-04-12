

import { Card } from 'primereact/card';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();
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
        navigate('/Home');
    };

    return (
        <div className='w-full p-3'>
            <div className="grid">
                <div className='col-12 flex justify-content-center align-content-center lg:pt-8'>
                    <Card title="" className='w-11 sm:w-11 md:w-11 lg:w-5 h-18rem md:h-18rem lg:h-30rem' style={{ border: '1px solid black' }}>
                        <div className='grid flex flex-column text-black-alpha-90 lg:pt-6'>
                            <div className='col-12 text-xl font-bold lg:text-4xl flex align-items-center justify-content-center'>Consulta el saldo de tu tarjeta digital</div>
                            <div className='col-12 text-sm lg:text-base flex align-items-center justify-content-center'>Ingresar Número de Placa:</div>
                            <div className='col-12 flex align-items-center justify-content-center'>
                                <InputText value={value} className='w-6 h-5rem lg:w-3 lg:h-5rem border-2 border-900 text-5xl text-900' style={{ backgroundColor: '#fcdc14' }} onChange={handleChange}
                                    onKeyPress={validate}
                                    maxLength={6} />
                            </div>
                            <div className='col-12 lg:pt-6 flex align-items-center justify-content-center'>
                                <Button label="Buscar" onClick={handleSearchClick} style={{ backgroundColor: 'red' }} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;