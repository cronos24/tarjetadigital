import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';

interface LoadingOverlayProps {
    visible: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ visible }) => {
    return (
        <Dialog modal={true} visible={visible} onHide={() => { }} dismissableMask={false} showHeader={false} className='loading-overlay' contentStyle={{ background: 'transparent' }}>
            <div className="flex align-items-center justify-content-center">
                <ProgressSpinner strokeWidth="5" />
                <div className="fadein animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3">
                    Cargando ...
                </div>
            </div>

        </Dialog>
    );
};

export default LoadingOverlay;
