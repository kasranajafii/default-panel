"use client";
import Button from "@/components/cuipe/Button";
import Dropdown from "@/components/cuipe/Dropdown";
import Input from "@/components/cuipe/Input";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React, { FormEvent, useReducer, useState } from "react";
import { z } from "zod";
const registerSchema = z.object({
  company: z.string().email("Invalid email address"),
  city: z.string().min(3, "Name must be at least 3 characters"),
  role: z.string(),
  postal: z.string().min(6, "Password must be at least 6 characters"),
  street: z.string().min(6, "Password must be at least 6 characters"),
});
type ThirdStepProps = {
  currentStep: number;
  handlePrev: () => void;
  handleNext: () => void;
};

type TFormErrors = {
  company?: string;
  city?: string;
  role?: string;
  postal?: string;
  street?: string;
};

type TReducerState = {
  company: string;
  city: string;
  role: string;
  postal: string;
  street: string;
};

type TSingleKey = keyof TReducerState;

type TReducerUpdatedState = {
  [key in TSingleKey]?: string;
};

const Third = ({ currentStep, handlePrev, handleNext }: ThirdStepProps) => {
  const [formData, dispatch] = useReducer(
    (state: TReducerState, update: TReducerUpdatedState): TReducerState => ({
      ...state,
      ...update,
    }),
    {
      company: "",
      city: "",
      postal: "",
      street: "",
      role: "",
    }
  );
  const data = [
    { value: "Iran", label: "Iran" },
    { value: "Netherland", label: "Netherland" },
    { value: "Brazil", label: "Brazil" },
    { value: "Italy", label: "Italy" },
  ];
  const [formErrors, setFormErrors] = useState<TFormErrors>({});
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
    <form onSubmit={handleSubmit}>
      <div>
        <div className="font-bold text-lg md:text-2xl leading-10 pt-4 pb-12">
          Company information ✨
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-4 pb-8">
          <div className="col-span-2 row-start-1">
            <Input
              value={formData.company}
              onChange={(e) => updateField(e.target.name, e.target.value)}
              type="text"
              id="text"
              name="company"
              label="Company Name"
              required
              error={!!formErrors.company}
            />
          </div>
          <div className="col-span-1 row-start-2">
            <Input
              value={formData.city}
              onChange={(e) => updateField(e.target.name, e.target.value)}
              type="text"
              id="city"
              name="city"
              label="City"
              required
              error={!!formErrors.city}
            />
          </div>
          <div className="col-span-1 row-start-2">
            <Input
              value={formData.postal}
              onChange={(e) => updateField(e.target.name, e.target.value)}
              type="text"
              id="postal-code"
              name="postal"
              label="Postal Code"
              required
              error={!!formErrors.postal}
            />
          </div>
          <div className="col-span-2 row-start-3">
            <Input
              value={formData.street}
              onChange={(e) => updateField(e.target.name, e.target.value)}
              type="text"
              id="street-address"
              name="street"
              label="Street Address"
              required
              error={!!formErrors.street}
            />
          </div>
          <div className="col-span-2 row-start-4">
            <Dropdown
              label="Country"
              options={data}
              value={formData.role}
              onClick={(option: string) => updateField("role", option)}
              required
            />
          </div>
        </div>
        <div className="flex justify-between ">
          <Button
            onClick={handlePrev}
            size="lg"
            variant="tertiary-text"
            Preicon={<ArrowBigLeft className="size-5" />}
            customClass=" leading-[22px] text-sm"
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            size="md"
            variant="primary"
            Posticon={<ArrowBigRight className="size-5" />}
            customClass="font-medium leading-[22px] text-sm"
          >
            Next Step
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Third;
