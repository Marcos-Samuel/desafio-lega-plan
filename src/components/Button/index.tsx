import './style.scss';

interface ButtonProps {
    children: React.ReactNode;
    color: 'primary' | 'secondary' | 'danger';
    size: 'medium' | 'large';
    onClick?: () => void;
    type?:string;
}

const Button: React.FC<ButtonProps> = ({ children, color, size, onClick,}) => {
    
    const sizeButton = size === 'medium' ? 'medium-btn' : 'large-btn';

    return (

        <button
            onClick={onClick}
            className={`${sizeButton} ${color}`}
        >
                {children}
            </button>
  );
};

export default Button;