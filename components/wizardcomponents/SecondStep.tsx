import Button from "@/components/cuipe/Button";
import SwitchButton from "@/components/cuipe/SwitchButton";
import IndivitualIcon from "@/components/icons/IndivitualProfile";
import OrganizationProfile from "@/components/icons/OrganizationProfile";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React, { useState } from "react";

interface SecondStepProps {
  currentStep: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const Second = ({ currentStep, handlePrev, handleNext }: SecondStepProps) => {
  const options = [
    {
      title: "Individual",
      subTitle: "Lorem ipsum is place text commonly used.",
      value: "Individual",
      icon: <IndivitualIcon />,
    },
    {
      title: "Organization",
      subTitle: "Lorem ipsum is place text commonly used.",
      value: "Organization",
      icon: <OrganizationProfile />,
    },
  ];
  const [secondStep, setSecondStep] = useState("");
  const [active, setActive] = useState(false);

  const handleOptionClick = (value: string) => {
    setSecondStep(value);
  };

  return (
    <>
      <div className="font-bold text-lg md:text-2xl leading-10 pb-12 ">
        Tell us about your company✨
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-4 pb-8">
        {options.map((item) => (
          <div
            key={item.value}
            className={`flex flex-col items-center px-4 py-6 shadow-[0_1px_2px_0_#0F172A0A] rounded cursor-pointer ${
              secondStep === item.value
                ? "border-2 border-indigo-400"
                : "border border-blueGray-200"
            }`}
            onClick={() => handleOptionClick(item.value)}
          >
            <span className="size-10 pb-2">{item.icon}</span>
            <h2 className="font-semibold text-sm md:text-base leading-6 text-[#1E293B] pb-1">
              {item.title}
            </h2>
            <p className="text-sm leading-[22px] text-[#475569] text-center">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>
      <div className="flex pb-8">
        <div className="flex flex-col gap-1">
          <p className="text-xs  md:text-sm text-[#1E293B] leading-3">
            Lorem ipsum is place text commonly?
          </p>
          <p className="text-xs text-[#475569] leading-[20px]">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts.
          </p>
        </div>
        <div
          className="flex   
 items-center"
        >
          <SwitchButton onClick={() => setActive(!active)} status={active} />
        </div>
      </div>
      <div className="flex justify-between ">
        <Button
          onClick={handlePrev}
          size="lg"
          variant="tertiary-text"
          Preicon={<ArrowBigLeft className="size-5" />}
          customClass=" leading-[22px] text-xs md:text-sm"
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          size="md"
          variant="primary"
          Posticon={<ArrowBigRight className="size-5" />}
          customClass="font-medium leading-[22px] text-xs md:text-sm"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Second;
