"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Select, { GroupBase } from "react-select";
import spending from "@/compnents/others/spending_types";
import "../datepicker.css";

export default function AddExpense() {
  interface optiopShape {
    value: string;
    label: string;
  }
  const formatGroupLabel = (
    data: GroupBase<{ value: string; label: string }>
  ) => (
    <div>
      <span>{data.label}</span>
      {/* <span >{data.options.length}</span> */}
    </div>
  );

  const options = spending();
  const [option, setOption] = useState(options[0]);

  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];
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
              <div className="flex flex-col w-[40vw] lg:w-[30vw] m-1">
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
              <div className="w-[40vw] lg:w-[15vw] flex flex-col relative m-1">
                <span> Price</span>
                <span className="absolute left-[4%] top-[47%] font-bold text-lg">
                  $
                </span>
                <input
                  className="p-4 pl-8 bg-[#f0ffcf]"
                  placeholder="Price"
                  type="number"
                />
              </div>
              <div className="w-[20vw] lg:w-[8vw] mt-2 lg:mt-0 pl-1 lg:pl-2">
                <p
                  className="p-4 bg-[#f0ffcf] flex justify-between items-center"
                  placeholder=""
                >
                  <span> USD</span>
                  <span className="text-2xl rotate-90 "> {">"}</span>
                </p>
              </div>
            </div>

            {/**
             * second row
             */}

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
              <div>
                <span>Dates</span>
                <div className="bg-[#f0ffcf] w-[40vw] lg:w-[20vw] h-[7vh]  pl-2 flex items-center">
                  <DatePicker
                    className={"w-[20vw] outline-none h-[5vh]"}
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </div>

              <div>
                <span>Type</span>
                <span>
                  <Select
                    formatGroupLabel={formatGroupLabel}
                    className="bg-[#ffffff] w-[30vw] h-[7vh] py-4"
                    options={options}
                    defaultValue={option}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </span>
              </div>
            </div>

            {/**
             * Third row
             */}
          </div>

          <div className="flex flex-row justify-between cursor-pointer">
            <div
              className="bg-[#454545] w-[50%] flex justify-center items-center text-white"
              onClick={(e) => {
                window.location.href = "/";
              }}
            >
              Back
            </div>
            <button
              type="submit"
              className="bg-[#7ba322] w-[50%]  self-end  p-4 rounded-sm "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

AddExpense;
