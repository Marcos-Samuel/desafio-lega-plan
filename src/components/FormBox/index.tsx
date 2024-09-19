'use client';
import TaskBox from '../TaskBox';
import './style.css';

const FormBox: React.FC = () => {

  return (
    <>
      <form className='conteiner-task'>
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
      </form>
    </>
  );
};

export default FormBox;
