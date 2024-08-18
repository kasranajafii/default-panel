import Button from "@/components/cuipe/Button";
import SecondSituationIcon from "@/components/icons/SecondSituationIcon";
import SituationIcon from "@/components/icons/SituationIcon";
import ThirdSituationIcon from "@/components/icons/ThirdSituationIcon";
import { ArrowBigRight, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface FirstStepProps {
  currentStep: number;
  handleNext: () => void;
}

const First = ({ currentStep, handleNext }: FirstStepProps) => {
  const [firstStep, setFirstStep] = useState("");

  const options = [
    {
      title: "I have a company",
      value: "company_owner",
      icon: <SituationIcon />,
    },
    {
      title: "I’m a freelance / contractor",
      value: "freelancer",
      icon: <SecondSituationIcon />,
    },
    {
      title: "I’m just getting started",
      value: "none",
      icon: <ThirdSituationIcon />,
    },
  ];

  const handleOptionClick = (value: string) => {
    setFirstStep(value);
  };

  return (
    <>
      <div className="font-bold text-lg md:text-2xl leading-10 pb-12">
        Tell us what’s your situation ✨
      </div>
      <div className="flex flex-col gap-3 ">
        {options.map((item) => (
          <div
            key={item.value}
            onClick={() => handleOptionClick(item.value)}
            className={`flex gap-3 p-3 items-center border cursor-pointer shadow-[0_1px_2px_0_#0F172A0A] ${
              firstStep === item.value
                ? "border-indigo-400 border-2"
                : "border-blueGray-200"
            }`}
          >
            <span className="size-8">{item.icon}</span>
            <p className="font-medium text-xs md:text-sm leading-[22px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end pt-8 font-medium text-sm leading-[22px]">
        <Button
          onClick={() => {
            if (currentStep < options.length - 1) {
              handleNext();
            }
          }}
          size="lg"
          variant="primary"
          Posticon={<ArrowBigRight className="size-5" />}
          disabled={currentStep === options.length - 1}
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default First;
