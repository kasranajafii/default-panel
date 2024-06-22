"use client";
import Radio from "@/components/cuipe/RadioGroup";
import { useState } from "react";

export default function Home() {
    const [selected, setSelected] = useState<number | string | undefined>();
    const list = [
        { title: "Parham", value: "P" },
        { title: "Kasra", value: "K" },
        { title: "Reza", value: "R" },
    ];

    return (
        <main className="p-5">
            <Radio
                onClick={(value) => setSelected(value)}
                selectedItem={selected}
                list={list}
            />
        </main>
    );
}
