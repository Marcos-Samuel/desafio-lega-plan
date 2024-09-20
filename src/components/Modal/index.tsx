import './style.scss';
interface ModalProps {
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({children}) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
               {children}
            </div>
        </div>
    );
};

export default Modal;