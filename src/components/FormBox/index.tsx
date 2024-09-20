'use client';
import { Habit } from '@/app/actions';
import TaskBox from '../TaskBox';
import './style.scss';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { toggleHabitStatus } from '@/app/actions';
interface FormBoxProps {
  isHabits: Habit[];
}

const FormBox: React.FC<FormBoxProps> = ({ isHabits }) => {
  const { control } = useForm();
  const [habits, setHabits] = useState<Habit[]>(isHabits);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setHabits(isHabits);
  }, [isHabits]);

  const handleTaskCompletion = async (habitId: string) => {
    setLoading(true);
    try {
      await toggleHabitStatus(habitId);
      setHabits(prevHabits =>
        prevHabits.map(habit =>
          habit.id === habitId ? { ...habit, done: !habit.done } : habit
        )
      );
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const renderTasks = (isDone: boolean) => {
    return habits.map((habit) => (
      habit.done === isDone && (
        <TaskBox
          key={habit.id}
          control={control}
          habitId={habit.id}
          habitName={habit.habit}
          onTaskComplete={handleTaskCompletion}
          done={habit.done}
        />
      )
    ));
  };

  return (
    <div className='container-task'> 
      <p>Suas tarefas de hoje</p>
      {loading ? <p>Carregando...</p> : renderTasks(false)}

      <p>Tarefas finalizadas</p>
      {renderTasks(true)}
    </div>
  );
};

export default FormBox;
