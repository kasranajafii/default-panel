type TRadioGroup = {
    onClick: (value: string | number) => void;
    selectedItem: string | number | undefined;
    list: { title: string; value: string | number; disabled?: boolean }[];
};

function RadioGroup({ selectedItem, onClick, list }: TRadioGroup) {
    return (
        <>
            <div className=" flex gap-6 ">
                {list.map((item, index) => (
                    <div
                        className="flex items-center gap-2 leading-[22px] [&>*]:text-sm font-normal [&>*]:text-[#475569]"
                        key={index}
                    >
                        <button
                            onClick={() => onClick(item.value)}
                            className={`rounded-lg size-4 border-2 flex justify-center items-center  ${
                                item.disabled
                                    ? "bg-slate-50 border-slate-300 pointer-events-none"
                                    : "bg-white"
                            } ${
                                selectedItem === item.value
                                    ? "border-indigo-500 border-4"
                                    : "border-slate-300"
                            }`}
                        ></button>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RadioGroup;
