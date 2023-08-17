import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props  {
    register: UseFormRegister<{ name: string }>;
    errors: FieldErrors<{ name: string }>;
  };

  
export default function ExpenseNameInput({register, errors}: Props){
    return   <div className="flex flex-col w-[40vw] lg:w-[30vw] m-1">
    <span>Enpense name </span>
    <input
      placeholder="Enpense name"
      {...register("name")}
      className="p-4 bg-[#f0ffcf]"
    />
    {errors.name && (
      <p className="text-[0.7em] text-red-700 capitalize">
        * {errors.name.message}
      </p>
    )}
  </div>
}