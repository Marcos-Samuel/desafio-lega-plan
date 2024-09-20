import Image from 'next/image';
import './style.scss';
import Logo from '../../../public/images/logo.svg';
import { formatarData } from '@/utils/dataForm';

const Header = () => {

    const date = formatarData();
    return (
        <header>
            <div>
                <Image src={Logo} alt='logo' />
                
                <h1>
                    Bem-vindo de volta, Marcus
                </h1>

                <span>{date}</span>
            </div>
        </header>
    );
};

export default Header;

