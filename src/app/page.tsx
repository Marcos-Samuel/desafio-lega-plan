'use client';
import Header from '@/components/Header';
import FormBox from '@/components/FormBox';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { addHabit, getHabits, Habit } from './actions';
import './style.scss';
interface HabitFormData {
  habit: string;
}

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isHabits, setIsHabits] = useState<Habit[]>([]);

  const handleOpenAndCloseModal = () => {
    setIsOpenModal(prevState => !prevState);
    reset();
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm<HabitFormData>();

  const onSubmit: SubmitHandler<HabitFormData> = async (data) => {
    await addHabit(data.habit); 
    handleOpenAndCloseModal();
    reset();
  };

  async function fetchHabits() {
    const habits = await getHabits();
    setIsHabits(habits);
  }

  useEffect(() => {
    fetchHabits();
  }, [isOpenModal]);

  return (
    <div>
      <Header />
      <main>
        {isOpenModal && (
          <Modal>
            <form className='modal-form' onSubmit={handleSubmit(onSubmit)}>
              <h1>Nova Tarefa</h1>
              <div>
                <label>Título</label>
                <input
                  autoFocus
                  placeholder='Digite'
                  type='text'
                  {...register('habit', { required: true, minLength: { value: 3, message: 'A tarefa deve ter no mínimo 3 caracteres' } })}
                />
                {errors.habit && <span style={{ color: 'red' }}>{errors.habit.message}</span>}
              </div>
              <div className='content-button-modal'>
                <Button color='primary' size='medium' type='submit'>
                  Adicionar
                </Button>
                <Button
                  type='button'
                  color='secondary'
                  size='medium'
                  onClick={handleOpenAndCloseModal}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Modal>
        )}

        <FormBox isHabits={isHabits} />

        <Button
          type='button'
          color='primary'
          size='large'
          onClick={handleOpenAndCloseModal}
        >
          Adicionar nova tarefa
        </Button>
      </main>
    </div>
  );
}
