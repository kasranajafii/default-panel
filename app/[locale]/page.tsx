"use client";
import SwitchButton from "@/components/cuipe/SwitchButton";
import { useState } from "react";

export default function Home() {
    const [home, setHome] = useState(true);
    return (
        <main className="p-5 ">
            <SwitchButton
                onClick={() => setHome((prev) => !prev)}
                status={home}
                label="kasra "
            />
        </main>
    );
}
