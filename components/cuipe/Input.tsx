import { ChangeEvent } from "react";

export type Tprops = {
    id?: string;
    name?: string;
    type: "text" | "number" | "email" | "password";
    label?: string;
    value: string | number;
    placeholder?: string;
    tooltip?: string;
    error?: boolean;
    disabled?: boolean;
    preIcon?: React.ReactNode;
    postIcon?: React.ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    size: "sm" | "md" | "lg";
    supportingText: string;
    status?: "disabled" | "error" | "Success";
};
function Input({
    id,
    name,
    onChange,
    preIcon,
    postIcon,
    size,
    type,
    label,
    value,
    error,
    disabled,
    placeholder,
    supportingText,
}: Tprops) {
    const InputVariants = {
        type: {
            text: "block text-sm font-medium mb-1 ",
            number: " block text-sm font-medium mb-1",
            email: " block text-sm font-medium mb-1",
            password: "  block text-sm font-medium mb-1",
        },
        status: {
            disabled:
                "form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed",
            error: "form-input w-full border-rose-300",
            success: "form-input w-full border-emerald-300",
        },
    };
    const sizes = {
        sm: "w-full max-w-[288px]",
        md: "w-full max-w-[288px]",
        lg: "w-full max-w-[288px]",
    };
    return (
        <>
            <div className="pt-4">
                <label htmlFor={id}>{label}</label>
                {postIcon}
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={`form-input ${
                        sizes[size]
                    }  px-3 py-2 placeholder 
                        ${preIcon ? "ps-10" : postIcon ? "pe-10" : ""}
                        `}
                />
                {preIcon && (
                    <div className="absolute inset-0 end-auto flex items-center pointer-events-none">
                        {preIcon}
                    </div>
                )}
                {postIcon && (
                    <div className="absolute inset-0 start-auto flex items-center pointer-events-none">
                        {postIcon}
                    </div>
                )}
                {supportingText && (
                    <p
                        className={`text-xs mt-1 ${
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
