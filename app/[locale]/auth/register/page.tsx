"use client";
import Checkbox from "@/components/cuipe/Checkbox";
import Dropdown from "@/components/cuipe/Dropdown";
import Input from "@/components/cuipe/Input";
import { FormEvent, useReducer, useState } from "react";
import Link from "next/link";
import { z } from "zod";
import Button from "@/components/cuipe/Button";
const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  full_name: z.string().min(3, "Name must be at least 3 characters"),
  role: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type TFormErrors = {
  email?: string;
  full_name?: string;
  role?: string;
  password?: string;
};

type TReducerState = {
  email: string;
  full_name: string;
  role: string;
  password: string;
};

type TSingleKey = keyof TReducerState;

type TReducerUpdatedState = {
  [key in TSingleKey]?: string;
};

const Register = () => {
  const [formData, dispatch] = useReducer(
    (state: TReducerState, update: TReducerUpdatedState): TReducerState => ({
      ...state,
      ...update,
    }),
    {
      email: "",
      full_name: "",
      role: "",
      password: "",
    }
  );
  const [formErrors, setFormErrors] = useState<TFormErrors>({});
  const data = [
    { label: "Most Popular", value: "most-popular" },
    { value: "newest", label: "Newest" },
    { value: "lowest-price", label: "Lowest Price" },
    { value: "highest-price", label: "Highest Price" },
  ];
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = registerSchema.safeParse(formData);
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

  const updateField = (_key: string, _value: string) => {
    dispatch({
      [_key]: _value,
    });
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit}>
      <h2 className="font-semibold md:font-bold text-xl md:text-3xl leading-10 pb-6">
        Create your Account ✨
      </h2>
      <div className="flex flex-col gap-4 md:font-medium text-sm md:text-sm text-[#475569]">
        <Input
          value={formData.email}
          onChange={(e) => updateField(e.target.name, e.target.value)}
          type="email"
          id="email"
          name="email"
          label="Email Address"
          error={!!formErrors.email}
          required
        />
        <Input
          value={formData.full_name}
          onChange={(e) => updateField(e.target.name, e.target.value)}
          type="text"
          id="full_name"
          name="full_name"
          label="Full Name"
          required
          error={!!formErrors.full_name}
        />
        <div className="w-full  max-w-[344px] max-h-[64px]">
          <Dropdown
            label="Your Role"
            options={data}
            value={formData.role}
            onClick={(option: string) => updateField("role", option)}
            required
          />
        </div>
        <Input
          value={formData.password}
          onChange={(e) => updateField(e.target.name, e.target.value)}
          type="password"
          id="password"
          name="password"
          label="Password"
          required
          error={!!formErrors.password}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between border-b border-[#E2E8F0] py-6">
        <div className="flex items-center gap-2">
          {" "}
          <Checkbox checked onClick={() => {}} />
          <p className="text-[#475569] text-sm leading-[22px]">
            Email me about product news.
          </p>
        </div>
        <div className="font-medium leading-5 text-sm shadow shadow-[#0F172A14]">
          <Button variant="primary" onClick={() => {}} size="md">
            Sign Up
          </Button>
        </div>
      </div>
      <div className="flex gap-1  text-sm leading-[22px] py-[20px]">
        <p className="text-[#475569]">Have an account?</p>
        <Link href={"/auth/login"} className="text-[#6366F1] font-medium">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default Register;
