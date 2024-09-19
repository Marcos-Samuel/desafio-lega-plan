
import React from 'react';
import './style.css';
import Image from 'next/image';
import TrashIcon from '../../../public/images/trash.svg';

const TaskBox: React.FC = () => {
    return (
        <div className='conteine-check-box'>
            <input
            type="checkbox"
            className="hidden-checkbox"
            />
            <label className="custom-checkbox"> testes</label>
            <div>
                <Image src={TrashIcon} alt='Lixeira'/>
            </div>
        </div>
    );
};

export default TaskBox;