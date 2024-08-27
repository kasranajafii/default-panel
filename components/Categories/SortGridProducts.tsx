import React from "react";

type TSortGridProducts = {
    sortTypes: { [key: string]: string | number }[];
    activeSort: {
        id: number;
        title: string;
    };
    onChange: (_sortOption: any) => void;
};
const SortGridProducts = ({
    sortTypes,
    activeSort,
    onChange,
}: TSortGridProducts) => {
    return (
        <>
            <div className="pb-5">
                <div className="flex  items-center gap-2">
                    {sortTypes.map((sortType) => (
                        <div
                            key={sortType.id}
                            className={` rounded-2xl  ${
                                sortType.id === activeSort.id
                                    ? "bg-[#6366F1] shadow-[0px_1px_2px_0px_#0F172A14]"
                                    : "bodrer border-[#E2E8F0] bg-white "
                            }`}
                        >
                            <button
                                onClick={() => {
                                    onChange(sortType);
                                }}
                                className={` px-3 py-1  font-medium text-sm leading-[22px] ${
                                    sortType.id === activeSort.id
                                        ? "text-white"
                                        : " text-[#64748B]"
                                }`}
                            >
                                {sortType.title}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SortGridProducts;
