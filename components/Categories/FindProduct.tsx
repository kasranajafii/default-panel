"use client";
import Input from "@/components/cuipe/Input";
import SearchIcon from "@/components/icons/SearchIcon";
import React, { useState } from "react";

type TFindProduct = {
    searchQuery: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FindProduct = ({ searchQuery, handleSearch }: TFindProduct) => {
    return (
        <div className="flex flex-col gap-5 pb-8 ">
            <p className="font-bold text-3xl leading-10 text-[#1E293B] ">
                Find the right product for you ✨
            </p>
            <div className="max-w-[640px]">
                <Input
                    prefix={<SearchIcon svgProps={{ fill: "#94A3B8" }} />}
                    type="search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};

export default FindProduct;
