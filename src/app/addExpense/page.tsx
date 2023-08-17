"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "../datepicker.css";
import ExpenseNameInput from "../../compnents/ui/AddExpense/ExpenseNameInput";
import PriceInput from "@/compnents/ui/AddExpense/priceInput";
import CurrencyPicker from "@/compnents/ui/AddExpense/CurrencyPicker";
import Datepicker from "@/compnents/ui/AddExpense/Datepicker";
import spending from "@/compnents/others/spending_types";
import SelectType from "@/compnents/ui/AddExpense/selectType";
import NotesForm from "@/compnents/ui/AddExpense/NotesForm";
import BackButton from "@/compnents/ui/AddExpense/Back";
import SubmitForm from "@/compnents/ui/AddExpense/SubmitForm";

const options = spending();

const [option, setOption] = useState(options[0]);

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function AddExpense() {
  const [value, onChange] = useState<Value>(new Date());
  // Capitalized component name
  const formSchema = z.object({
    name: z
      .string()
      .min(8, "please enter at least 8 characters") // Updated error message
      .max(15, "too long"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className=" text-black min-h-screen Addelement flex justify-center items-center font-san font-medium">
      <div className="w-[50vw] md:w-[60vw]  bg-white m-4 pb-0 pt-4  rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col justify-between"
        >
          <span className="self-center"> Add a new expense</span>
          <div className="min-h-[40vh] px-6">
            {/**
             * first row
             */}

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
              <ExpenseNameInput register={register} errors={errors} />
              <PriceInput />
              <CurrencyPicker />
            </div>

            {/**
             * second row
             */}

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
              <Datepicker value={value} onChange={onChange} />
              <SelectType options={options} option={option} />
            </div>

            {/**
             * Third row
             */}

            <NotesForm />
          </div>

          <div className="flex flex-row justify-between cursor-pointer">
            <BackButton />

            <SubmitForm />
          </div>
        </form>
      </div>
    </div>
  );
}

AddExpense;
