"use client";

import Input from "@/components/cuipe/Input";
import Link from "next/link";
import React, { FormEvent, useReducer, useState } from "react";
import { z } from "zod";
const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type TFormErrors = {
  email?: string;
  password?: string;
};

type TReducerState = {
  email: string;
  password: string;
};

type TSingleKey = keyof TReducerState;

type TReducerUpdatedState = {
  [key in TSingleKey]?: string;
};

const Login = () => {
  const [formLogin, dispatch] = useReducer(
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
    const result = registerSchema.safeParse(formLogin);
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
    <form className="flex flex-col mx-2 md:mx-0" onSubmit={handleSubmit}>
      <h2 className="font-semibold md:font-bold text-xl md:text-3xl leading-10 pb-6">
        Welcome back! ✨
      </h2>
      <div className="flex flex-col md:font-medium text-xs md:text-sm leading-[22px] gap-4">
        <Input
          value={formLogin.email}
          onChange={(e) => updateField(e.target.name, e.target.value)}
          type="email"
          id="email"
          name="email"
          label="Email Address"
          error={!!formErrors.email}
        />
        <Input
          value={formLogin.password}
          onChange={(e) => updateField(e.target.name, e.target.value)}
          type="password"
          id="password"
          name="password"
          label="Password"
          error={!!formErrors.password}
        />
      </div>

      <div className="flex justify-between border-b border-[#E2E8F0] py-6">
        <div className="flex items-center gap-2">
          {" "}
          <Link
            href={"/auth/reset"}
            className="text-[#475569] text-sm leading-[22px] underline"
          >
            Forgot Password?
          </Link>
        </div>
        <button className="bg-[#6366F1] px-3 py-2 text-white rounded shadow-[#0F172A14] font-medium text-sm leading-[22px]">
          Sign Up
        </button>
      </div>
      <div className="flex text-sm gap-1 leading-[22px] py-[20px]">
        <p className="text-[#475569]">Don’t you have an account? </p>
        <Link href={"/auth/register"} className="text-[#6366F1] font-medium">
          Sign In
        </Link>
      </div>
      <div className="bg-[#FEF3C7]  py-2 px-3">
        <p className="text-sm leading-[22px] text-[#D97706]">
          ✓ To support you during the pandemic super pro features are free until
          March 31st.
        </p>
      </div>
    </form>
  );
};

export default Login;
