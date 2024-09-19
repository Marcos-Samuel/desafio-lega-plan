'use client'
import Header from '@/components/Header';
import './style.css';
import FormBox from '@/components/FormBox';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { addHabit, getHabits } from './actions';

export default function Home() {

  const { register, handleSubmit } = useForm();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenAndCloseModal = () => { 
    setIsOpenModal(props => props = !isOpenModal);
  }

  const onSubmit: SubmitHandler<any> = async (data) => {
    await addHabit(data)
  }

  return (
    <div>
      <Header/>
      <main>
        {isOpenModal &&
          <Modal>
            <h1>Nova Tarefa</h1>
            <form className='modal-form'>
              <div
                onSubmit={handleSubmit(onSubmit)}
              >
                <label>Título</label>
                <input
                  placeholder="Digite"
                  type='text'
                  {...register('habit')}
                />
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
                <Button color="primary" size="medium">
                  Adicionar
                </Button>
              </div>
            </form>
          </Modal>
        }
        <FormBox />
        <Button
          type='button'
          onClick={handleOpenAndCloseModal}
          size='large'
          color='primary'>
          Adicionar nova tarefa
        </Button>
      </main>
    </div>
  );
}
