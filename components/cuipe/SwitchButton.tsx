type TSwitchButton = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
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
            <div className="flex gap-2 items-center">
                <label htmlFor={id} className="text-sm text-slate-400 ">
                    {label}
                </label>
                <div
                    onClick={onClick}
                    className={`gap-2  flex items-center justify-end rounded-xl w-11 h-6 pe-[2px]  ${
                        status ? "bg-slate-400" : "bg-indigo-500 "
                    }${
                        disabled
                            ? "bg-slate-100 border border-slate-300 pointer-events-none"
                            : ""
                    }`}
                >
                    <button
                        className={`size-5 rounded-xl  transition-all duration-300 ease-in-out  ${
                            status
                                ? "translate-x-full ltr:-translate-x-full"
                                : ""
                        }  ${
                            disabled
                                ? "bg-slate-400 border-slate-300 pointer-events-none"
                                : "bg-white"
                        }`}
                    ></button>
                </div>
            </div>
        </>
    );
};

export default SwitchButton;
