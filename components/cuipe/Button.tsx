import Loading from "@/components/icons/Loading";
import React from "react";
type Tprops = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "danger-outline"
    | "success"
    | "success-outline"
    | "tertiary-text";
  customClass?: string;
  size?: "sm" | "md" | "lg";
  Preicon?: React.ReactNode;
  Posticon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
};
function Button({
  onClick,
  children,
  variant,
  Preicon,
  Posticon,
  size = "md",
  customClass,
  loading,
  disabled,
}: Tprops) {
  const variants = {
    primary: "bg-indigo-500 hover:bg-indigo-600 text-white",
    secondary: "border-slate-200 hover:border-slate-300 text-indigo-500",
    tertiary: "border-slate-200 hover:border-slate-300 text-slate-600",
    "tertiary-text":
      "border-0 border-b border-slate-600 rounded-none text-slate-600",
    danger: "bg-rose-500 hover:bg-rose-600 text-white",
    "danger-outline": "border-slate-200 hover:border-slate-300 text-rose-500",
    success: "bg-emerald-500 hover:bg-emerald-600 text-white",
    "success-outline":
      "border-slate-200 hover:border-slate-300 text-emerald-500",
  };

  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-3",
  };

  return (
    <button
      className={`${variants[variant]} ${sizes[size]} ${
        Preicon && !children ? "size-9" : "p-[10px]"
      } font-medium rounded-[4px] flex gap-2 justify-center items-center text-center transition-all duration-400 ease-in-out border disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none shadow-sm ${customClass}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <Loading
            svgProps={{ className: "animate-spin size-4 fill-current" }}
          />
          Loading
        </>
      ) : (
        <>
          {" "}
          {Preicon && <span className="size-4 fill-current">{Preicon}</span>}
          {children}
          {Posticon && <span className="size-4 fill-current">{Posticon}</span>}
        </>
      )}
    </button>
  );
}

export default Button;
