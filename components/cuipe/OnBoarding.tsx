"use client";
import WizardIcon from "@/components/icons/WizardIcon";
import First from "@/components/wizardcomponents/FirstStep";
import Forth from "@/components/wizardcomponents/ForthStep";
import Second from "@/components/wizardcomponents/SecondStep";
import Third from "@/components/wizardcomponents/ThirdStep";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type TAuthLayout = {
  imageSrc: string;
  itemsCount: number;
};
type StepComponent = React.FC<any>;

const OnBoarding = ({ imageSrc, itemsCount }: TAuthLayout) => {
  const [currentStep, setCurrentStep] = useState(0);
  const components: StepComponent[] = [First, Second, Third, Forth];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-between items-center w-full h-screen">
          <div className="w-full flex justify-between py-4 px-4 md:px-8">
            <span className="size-8">
              <WizardIcon />
            </span>
            <div className="flex gap-1 items-center">
              <p className="text-sm leading-[22px] text-blueGray-600">
                Have an account?
              </p>
              <Link
                href={"/auth/register"}
                className="font-medium text-sm leading-[22px] text-indigo-500"
              >
                {" "}
                Sign In
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[444px] flex items-center mx-auto pt-12 px-4">
            {[...Array(itemsCount).keys()].map((item) => (
              <React.Fragment key={item}>
                <button
                  className={`rounded-full size-6 font-semibold text-xs leading-5 ${
                    currentStep >= item
                      ? "bg-indigo-500 text-white"
                      : "bg-blueGray-100 text-blueGray-500"
                  }`}
                >
                  {item + 1}
                </button>
                <div
                  className={`flex-1 h-1 rounded-full last:hidden ${
                    currentStep > item ? "bg-indigo-500 " : "bg-blueGray-200"
                  }`}
                ></div>
              </React.Fragment>
            ))}
          </div>
          <div className="w-full max-w-[444px] my-auto px-4">
            <div>
              {React.createElement(components[currentStep], {
                currentStep,
                handleNext,
                handlePrev,
              })}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src={imageSrc}
            alt="authantication banner"
            height={1024}
            width={920}
            className="h-screen object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default OnBoarding;
