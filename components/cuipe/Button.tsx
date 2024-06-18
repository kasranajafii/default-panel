import React from 'react'
type Tprops={
onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void,
children:React.ReactNode,
variant:"Primary"|"Secondary"|"Tertiary"|"Danger"|"DangerOutline"|"Success"|"SuccessOutline"|"disabled",
customClass?:string,
size:"sm"|"md"|"lg",
preIcon?:React.ReactNode,

}
function Button({
onClick,
children,
variant,
preIcon,
size,
customClass,
}:Tprops) {
  const variants = {
    Primary:
      "bg-indigo-500 hover:bg-indigo-600 text-white",
    Secondary:
      "border-slate-200 hover:border-slate-300 text-indigo-500",
    Tertiary:
      "border-slate-200 hover:border-slate-300 text-slate-600",
    Danger: "bg-rose-500 hover:bg-rose-600 text-white",
    DangerOutline:"border-slate-200 hover:border-slate-300 text-rose-500",
    Success:"bg-emerald-500 hover:bg-emerald-600 text-white",
    SuccessOutline:"border-slate-200 hover:border-slate-300 text-emerald-500",
    disabled:"disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none loading:animated-spin",
  };

  const sizes = {
    sm:"px-[8px] py-[4px] ",
    md:"px-[12px] py-[8px] ",
    lg:"px-[16px] py-[12px]",
  };
  return (
   
        <button
        className={`${variants[variant]} ${sizes[size]} rounded-lg flex flex-row gap-2 justify-center items-center text-center transition-all duration-400 ease-in-out ${customClass}`}
          onClick={onClick} 
        >
          {preIcon}
          <span className="">
            {children}
          </span>
        </button>
   
  );
}




export default Button;