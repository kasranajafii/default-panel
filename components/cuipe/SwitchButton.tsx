type TSwitchButton = {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
  id?: string;
  status: boolean;
};

const SwitchButton = ({
  status,
  onClick,
  disabled,
  label,
  id,
}: TSwitchButton) => {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer">
        <label htmlFor={id} className="text-sm text-slate-400 italic ">
          {label}
        </label>
        <div
          onClick={onClick}
          className={`gap-2  flex items-center justify-start rounded-xl w-11 h-6 p-[1px] border ${
            status
              ? "bg-indigo-500 border-indigo-500"
              : "bg-slate-400 border-slate-400"
          } ${
            disabled
              ? "!bg-slate-100  !border-slate-200 pointer-events-none"
              : ""
          }`}
        >
          <button
            className={`size-5 rounded-xl  transition-all duration-300 ease-in-out shadow ${
              status ? "-translate-x-full ltr:translate-x-full" : ""
            }  ${disabled ? "bg-slate-400 " : "bg-white"}`}
          ></button>
        </div>
      </div>
    </>
  );
};

export default SwitchButton;
