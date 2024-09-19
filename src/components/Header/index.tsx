import Image from 'next/image';
import './style.css';
import Logo from '../../../public/images/logo.svg';

const Header = () => {
    return (
        <header>
            <div>
                <Image src={Logo} alt='logo' />
                
                <h1>
                    Bem-vindo de volta, Marcus
                </h1>

                <span>Segunda, 01 de Dezembro de 2025</span>
            </div>
        </header>
    );
};

export default Header;

