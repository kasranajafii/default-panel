"use client";
import Input from "@/components/cuipe/Input";
import { Star } from "lucide-react";
import React, { useState } from "react";

type TStarRating = {
    totalStars: number;
    handleRating: (rate: number) => void;
};
const StarRating = ({ totalStars, handleRating }: TStarRating) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const handleClick = (rate: number) => {
        setRating(rate);
        handleRating(rate);
    };
    return (
        <div className="flex gap-1">
            {[...Array(totalStars)].map((_, index) => {
                const currentRating = index + 1;
                return (
                    <label
                        key={index}
                        onClick={() => handleClick(currentRating)}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(0)}
                    >
                        <Input
                            customClass="hidden"
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onChange={() => setRating(currentRating)}
                        />
                        <Star
                            className="cursor-pointer"
                            fill={
                                currentRating <= (hover || rating) && rating
                                    ? "#F59E0B"
                                    : "#e4e5e9"
                            }
                            stroke={
                                currentRating <= (hover || rating) && rating
                                    ? "#F59E0B"
                                    : "#e4e5e9"
                            }
                            size={16}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
