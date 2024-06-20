import { Check } from "lucide-react";
import React, { ReactElement } from "react";

type TCheckbox = {
    checked: boolean;
    onClick: () => void;
    disabled?: boolean;
    children?: ReactElement;
};

const Checkbox = ({ checked, onClick, disabled, children }: TCheckbox) => {
    return (
        <div className="gap-2 [&>*]:text-sm [&>*]:text-slate-800 flex justify-start items-center">
            <button
                onClick={onClick}
                className={`rounded size-4 border-2 flex justify-center items-center ${
                    checked
                        ? "border-indigo-500 bg-indigo-500"
                        : "border-slate-300"
                } ${
                    disabled
                        ? "bg-slate-50 border-slate-300 pointer-events-none"
                        : "bg-white"
                }`}
            >
                {checked && (
                    <Check className="text-white size-3 stroke-white stroke-[3px]" />
                )}
            </button>
            {children}
        </div>
    );
};

export default Checkbox;
