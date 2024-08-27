"use client";
import Checkbox from "@/components/cuipe/Checkbox";
import React from "react";

const ProductsGridFilters = () => {
    return (
        <>
            <div className="p-5  border  border-[#E2E8F0] shadow-[0px_10px_15px_-3_#0F172A14] bg-white  rounded-sm">
                <div className="flex flex-col">
                    <p className="font-semibold text-sm leading-[22px] text-[#1E293B]">
                        Price Range
                    </p>
                    <input className="" type="range" />
                    <div className="flex justify-between">
                        <p className="text-sm leading-[22px] text-[#64748B] italic">
                            $20
                        </p>
                        <p className="text-sm leading-[22px] text-[#64748B] italic">
                            $299
                        </p>
                    </div>
                </div>
                <div className="py-6">
                    <div className="pb-3">
                        <p className="font-semibold text-sm leading-[22px] text-[#1E293B]">
                            Multi Select
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <div className="flex gap-2 items-center ">
                            <Checkbox checked onClick={() => {}} />
                            <p className="font-medium text-sm leading-[22px] text-[#475569]">
                                Apps / Software
                            </p>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <Checkbox checked onClick={() => {}} />
                            <p className="font-medium text-sm leading-[22px] text-[#475569]">
                                Education
                            </p>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <Checkbox checked onClick={() => {}} />
                            <p className="font-medium text-sm leading-[22px] text-[#475569]">
                                Books & Writing
                            </p>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <Checkbox checked onClick={() => {}} />
                            <p className="font-medium text-sm leading-[22px] text-[#475569]">
                                Drawing / Painting
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pb-3">
                        <p className="font-semibold text-sm leading-[22px] text-[#1E293B]">
                            Sort By Rating
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsGridFilters;
