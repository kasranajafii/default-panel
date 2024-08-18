import { Check, ChevronDown } from "lucide-react";
import React, { useState } from "react";
type TDropdown = {
  options: { value: string; label: string }[];
  value: string;
  onClick: (option: string) => void;
  label?: string;
  id?: string;
  required?: boolean;
};
const Dropdown = ({
  options,
  value,
  onClick,
  label,
  required,
  id,
}: TDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-10"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}

      <div className="flex flex-col">
        <div>
          <div className="flex justify-between items-center mb-1 h-6">
            <div className="flex justify-start items-center gap-2">
              {label ? (
                <label htmlFor={id} className="text-sm font-medium">
                  {label}
                </label>
              ) : null}
              {required && (
                <div className="block text-sm font-medium text-rose-500">*</div>
              )}
            </div>
          </div>
          <div>
            <div className="relative  flex flex-col items-center w-full rounded z-[11] transition-all transform duration-700 ease-in-out ">
              <div
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
                className="relative z-10 flex cursor-pointer justify-between border bg-white border-blueGray-200 py-2 px-3 w-full rounded items-center"
              >
                <button
                  type="button"
                  className="flex text-sm text-blueGray-800 "
                >
                  {options.find((option) => option.value === value)?.label ||
                    ""}
                </button>
                <span
                  className={`transform duration-500 ease-in-out ${
                    isOpen ? "rotate-180 " : ""
                  }`}
                >
                  <ChevronDown className="stroke-blueGray-400 size-5" />
                </span>
              </div>

              <div
                className={`absolute z-[1] bg-[white] -bottom-1 flex flex-col w-full  border  rounded overflow-hidden duration-300 ease-in transition-[transform,_opacity] ${
                  isOpen
                    ? "translate-y-full max-h-96 border-blueGray-200 opacity-100"
                    : "max-h-0 translate-y-[70%] border-transparent opacity-0"
                } `}
              >
                {options.map((item, index) => (
                  <button
                    type="button"
                    className={`flex py-2 px-3 border border-blueGray-200 hover:bg-blueGray-100 justify-between items-center text-sm ${
                      item.value === value
                        ? "bg-indigo-50 hover:bg-indigo-50"
                        : ""
                    }`}
                    key={index}
                    onClick={() => onClick(item.value)}
                  >
                    <p
                      className={`${
                        item.value === value
                          ? "text-indigo-500 font-medium"
                          : "text-blueGray-600"
                      }`}
                    >
                      {item.label}
                    </p>
                    <span className="justify-center items-center">
                      {item.value === value ? (
                        <Check
                          className={` size-5 ${
                            item.value === value ? "stroke-indigo-400" : ""
                          }`}
                        />
                      ) : null}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
