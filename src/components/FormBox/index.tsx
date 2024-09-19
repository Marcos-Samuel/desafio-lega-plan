"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import TaskBox from "../TaskBox";
import "./style.css";
import Modal from "../Modal";
import Button from "../Button";

const FormBox: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <>
      
      <form className="conteiner-task" onSubmit={handleSubmit(onSubmit)}>
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
      </form>
    </>
  );
};

export default FormBox;
