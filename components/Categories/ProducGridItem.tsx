"use client";
import StarRating from "@/components/Categories/StarRating";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
type TProducGridItem = {
    data: {
        id: number;
        title: string;
        subTitle: string;
        price: number;
        image: string;
        score: number;
        route: string;
    }[];
};
const ProducGridItem = ({ data }: TProducGridItem) => {
    const [rating, setRating] = useState<number>(0);
    const [scores, setScores] = useState(data.map((product) => product.score));

    const handleRating = (index: number, rate: number) => {
        const newScores = [...scores];
        newScores[index] = rate;
        setScores(newScores);
        setRating(rate);
    };
    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(302px,_1fr))] gap-6 ">
                {data.map((data, i) => (
                    <div key={i} className=" w-full">
                        <Image
                            src={`${data.image}`}
                            width={302}
                            height={226}
                            alt="Picture of the author"
                            className="w-full rounded-sm"
                            quality={100}
                        />
                        <div className=" border border-[#E2E8F0] px-5 pt-4 pb-6 bg-white rounded-sm shadow-[0px_10px_15px_-3_#0F172A14]">
                            <p className="font-semibold text-lg leading-7 text-[#1E293B]">
                                {data.title}
                            </p>
                            <div className="pt-1 pb-3">
                                <p className=" text-sm leading-[22px] text-[#475569] max-w-[262px]">
                                    {data.subTitle}
                                </p>
                            </div>
                            <div className=" flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <StarRating
                                            totalStars={5}
                                            handleRating={(rate) =>
                                                handleRating(i, rate)
                                            }
                                        />
                                    </div>
                                    <p className="text-[#D97706] font-medium text-sm leading-[22px]">
                                        {scores[i].toFixed(1)}
                                    </p>
                                </div>
                                <div
                                    className={` rounded-2xl ${
                                        data.price > 40
                                            ? "bg-[#D1FAE5]"
                                            : "bg-[#FFE4E6]"
                                    }`}
                                >
                                    <p
                                        className={`text-sm font-medium leading-[22px] px-2 py-[2px] ${
                                            data.price > 40
                                                ? "text-[#059669]"
                                                : "text-[#F43F5E]"
                                        } `}
                                    >
                                        ${data.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProducGridItem;
