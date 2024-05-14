import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

interface ErrorModalProps {
    visible: boolean;
    onClose: () => void;
    message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ visible, onClose, message }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
                navigate('/');
            }, 5000);

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [visible, onClose, navigate]);

    const handleClose = () => {
        onClose();
        navigate('/');
    };

    return (
        <Dialog header="Error" visible={visible} style={{ width: '30vw' }} closable={false} onHide={handleClose}>
            <div className="flex justify-content-center flex-wrap">
                <div className='grid'>
                    <div className='col-12 flex justify-content-center flex-wrap'> <p>{message}</p></div>
                    <div className='col-12 flex justify-content-center flex-wrap'> <Button label="OK" icon="pi pi-check" onClick={handleClose} style={{ background:'#ef4444', color:'#ffffff', border:'1px solid #ef4444'}} /> </div>
                </div>
                
                
            </div>
        </Dialog>
    );
};

export default ErrorModal;
