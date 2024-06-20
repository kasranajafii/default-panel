"use client";
import {
    ChangeEvent,
    HTMLInputTypeAttribute,
    useEffect,
    useState,
} from "react";
import Tooltip from "./Tooltip";

export type Tprops = {
    id?: string;
    name?: string;
    type: HTMLInputTypeAttribute;
    label?: string;
    value: string | number;
    placeholder?: string;
    tooltip?: string;
    error?: boolean;
    disabled?: boolean;
    prefix?: React.ReactNode | string;
    suffix?: React.ReactNode | string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    supportingText?: string;
    required?: boolean;
};
function Input({
    id,
    name,
    onChange,
    prefix,
    suffix,
    type,
    label,
    value,
    error,
    disabled,
    placeholder,
    supportingText,
    required,
    tooltip,
}: Tprops) {
    const [upperPadding, setUpperPadding] = useState(false);

    useEffect(() => {
        if (tooltip || label || required) setUpperPadding(true);
        else setUpperPadding(false);
    }, [tooltip, label, required]);

    return (
        <>
            <div className="pb-5 relative">
                {upperPadding ? (
                    <div className="flex justify-between items-center gap-2 mb-1 h-6">
                        <div className="flex justify-start items-center gap-2">
                            {label ? (
                                <label
                                    htmlFor={id}
                                    className="text-sm font-medium"
                                >
                                    {label}
                                </label>
                            ) : null}
                            {required && (
                                <div className="block text-sm font-medium text-rose-500">
                                    *
                                </div>
                            )}
                        </div>

                        {tooltip && (
                            <Tooltip
                                className="ml-2 mb-2 "
                                bg="dark"
                                size="md"
                                position="right"
                            >
                                <div className="text-sm text-slate-200  ">
                                    {tooltip}
                                </div>
                            </Tooltip>
                        )}
                    </div>
                ) : null}
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    required={required}
                    onChange={onChange}
                    disabled={disabled}
                    className={`relative text-sm text-slate-800 bg-white border rounded leading-5 py-2 px-3 border-slate-200 hover:border-slate-300 focus:border-indigo-300 shadow-sm w-full block font-medium placeholder-slate-400 transition-colors duration-100 h-10
                        ${prefix ? "ps-10" : ""} ${suffix ? "pe-10" : ""} ${
                        error ? "border-rose-500" : ""
                    }
                        `}
                />

                {prefix && (
                    <div
                        className={`absolute text-[#94A3B8] inset-3 ${
                            upperPadding ? "top-12" : "top-5"
                        } -translate-y-1/2 end-auto flex items-center pointer-events-none w-4 h-4`}
                    >
                        {prefix}
                    </div>
                )}
                {suffix && (
                    <div
                        className={`absolute text-[#94A3B8] inset-3 ${
                            upperPadding ? "top-12" : "top-5"
                        } -translate-y-1/2 start-auto flex items-center pointer-events-none w-4 h-4`}
                    >
                        {suffix}
                    </div>
                )}
                {supportingText && (
                    <p
                        className={`absolute start-0 bottom-0 text-xs mt-1 ${
                            error ? "text-rose-500" : ""
                        }`}
                    >
                        {supportingText}
                    </p>
                )}
            </div>
        </>
    );
}
export default Input;
