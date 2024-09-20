import React, { useState } from 'react';
import './style.scss';
import Image from 'next/image';
import TrashIcon from '../../../public/images/trash.svg';
import { Control, Controller, FieldValues } from 'react-hook-form';
import Modal from '../Modal';
import Button from '../Button';
import { deleteHabit } from '@/app/actions';

interface TaskBoxProps {
  control: Control<FieldValues> | undefined;
  habitId: string;
  habitName: string;
  onTaskComplete: (habitId: string) => void;
  done: boolean;
}

const TaskBox: React.FC<TaskBoxProps> = ({ control, habitId, habitName, onTaskComplete, done }) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenAndCloseModal = () => { 
        setIsOpenModal(prevState => !prevState);
    };
    
    const handleIsDeleted = async (habitId : string) => { 
       await deleteHabit(habitId);
    };

  return (
      <div className='conteine-check-box'>
          {isOpenModal &&
              <Modal>
                  <form className='modal-form' >
                      <h1>Deletar tarefa</h1>
                      <div>
                          <label>Tem certeza que você deseja deletar essa tarefa?</label>
                      </div>
                      <div className="content-button-modal">
                          <Button
                              type='button'
                              color="secondary"
                              size="medium"
                              onClick={handleOpenAndCloseModal}
                          >
                              Cancelar
                          </Button>
                          <Button color="danger" size="medium" type='button' onClick={ () => handleIsDeleted(habitId)}>
                              Deletar
                          </Button>
                      </div>
                  </form>
              </Modal>
          }
      <Controller
        control={control}
        name={`habit_${habitId}`}
        render={({ field }) => (
          <>
            <input
              type="checkbox"
              className="hidden-checkbox"
              checked={done} 
              onChange={(e) => {
                field.onChange(e.target.checked); 
                onTaskComplete(habitId); 
              }}
            />
                <label className={`custom-checkbox ${done ? 'isDone ' : ''} `}>{habitName}</label>
          </>
        )}
      />
      <div>
        <Image src={TrashIcon} alt='Lixeira' onClick={handleOpenAndCloseModal} />
      </div>
    </div>
  );
};

export default TaskBox;
