"use client";
import StarRating from "@/components/Categories/StarRating";
import Checkbox from "@/components/cuipe/Checkbox";
import { Star } from "lucide-react";
import React, { useState } from "react";

type TProductsGridFilters = {
    filters: { id: number; label: string; slug: string }[];
};
const ProductsGridFilters = ({ filters }: TProductsGridFilters) => {
    const [price, setPrice] = useState(100);
    const [checkedItems, setCheckedItems] = useState<number[]>([]);
    const [rating, setRating] = useState<number>(0);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };
    const handleCheckboxClick = (id: number) => {
        setCheckedItems((prevSelectedFilters) =>
            prevSelectedFilters.includes(id)
                ? prevSelectedFilters.filter((filterId) => filterId !== id)
                : [...prevSelectedFilters, id]
        );
    };
    const handleRating = (rate: number) => {
        setRating(rate);
    };
    return (
        <>
            <div className="p-5  border  border-[#E2E8F0] shadow-[0px_10px_15px_-3_#0F172A14] bg-white  rounded-sm">
                <div className="flex flex-col">
                    <p className="font-semibold text-sm leading-[22px] text-[#1E293B] pb-3">
                        Price Range
                    </p>
                    <input
                        className="input-Range-Primary"
                        type="range"
                        value={price}
                        onChange={changeHandler}
                        style={
                            {
                                background: `linear-gradient(to right, #6366F1 ${price}%, #E2E8F0 ${price}%)`,
                            } as React.CSSProperties
                        }
                    />
                    <div className="flex justify-between pt-2">
                        <span className="text-sm leading-[22px] text-[#64748B] italic">
                            $0
                        </span>
                        <span className="text-sm leading-[22px] text-[#64748B] italic">
                            ${price}
                        </span>
                    </div>
                </div>
                <div className="py-6 flex flex-col gap-2">
                    {filters.map((item) => (
                        <div key={item.id} className="flex gap-2 items-center">
                            <Checkbox
                                checked={checkedItems.includes(item.id)}
                                onClick={() => handleCheckboxClick(item.id)}
                            />
                            <p className="font-medium text-sm leading-[22px] text-[#475569]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="pb-3">
                        <p className="font-semibold text-sm leading-[22px] text-[#1E293B]">
                            Sort By Rating
                        </p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2">
                            <StarRating
                                totalStars={5}
                                handleRating={handleRating}
                            />
                            <p className="text-[#64748B] text-sm leading-[22px] italic ">
                                And up
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <StarRating
                                totalStars={5}
                                handleRating={handleRating}
                            />
                            <p className="text-[#64748B] text-sm leading-[22px] italic ">
                                And up
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <StarRating
                                totalStars={5}
                                handleRating={handleRating}
                            />
                            <p className="text-[#64748B] text-sm leading-[22px] italic ">
                                And up
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <StarRating
                                totalStars={5}
                                handleRating={handleRating}
                            />
                            <p className="text-[#64748B] text-sm leading-[22px] italic ">
                                And up
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsGridFilters;
