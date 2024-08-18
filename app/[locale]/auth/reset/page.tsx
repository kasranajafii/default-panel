"use client";
import Button from "@/components/cuipe/Button";
import Input from "@/components/cuipe/Input";
import React, { FormEvent, useReducer, useState } from "react";
import { z } from "zod";
const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
});
type TFormErrors = {
  email?: string;
};

type TReducerState = {
  email: string;
  password: string;
};

type TSingleKey = keyof TReducerState;

type TReducerUpdatedState = {
  [key in TSingleKey]?: string;
};

const Reset = () => {
  const [formReset, dispatch] = useReducer(
    (state: TReducerState, update: TReducerUpdatedState): TReducerState => ({
      ...state,
      ...update,
    }),
    {
      email: "",
      password: "",
    }
  );
  const updateField = (_key: string, _value: string) => {
    dispatch({
      [_key]: _value,
    });
  };
  const [formErrors, setFormErrors] = useState<TFormErrors>({});
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = registerSchema.safeParse(formReset);
    if (result.success) {
      console.log("correct formdata", result.data);
    } else {
      const errors: TFormErrors = result.error.issues.reduce(
        (acc: any, error: any) => {
          acc[error.path[0]] = error.message;
          return acc;
        },
        {}
      );
      console.log(result.error.issues);
      console.log(errors);
      setFormErrors(errors);
    }
  };
  return (
    <div>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <h2 className="font-bold text-xl md:text-3xl leading-10 pb-[24px]">
          Reset your Password ✨
        </h2>
        <div className="flex flex-col gap-4 pb-6  md:font-medium text-xs md:text-sm leading-[22px] text-[#475569]">
          <Input
            value={formReset.email}
            onChange={(e) => updateField(e.target.name, e.target.value)}
            type="email"
            id="email"
            name="email"
            label="Email Address"
            error={!!formErrors.email}
          />
        </div>

        <div className="flex justify-end shadow-[#0F172A14] font-medium text-sm leading-[22px] ">
          <Button variant="primary" onClick={() => {}} size="md">
            Send Reset Link
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reset;
