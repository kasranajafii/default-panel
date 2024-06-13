"use client";
import { navigations } from "@/data/navigation";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

function LayoutSideBar() {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <>
            <div
                className={cn(
                    "transition-all duration-300 ease-in-out",
                    open ? "!max-w-40" : "!max-w-14"
                )}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <nav>
                    {navigations.map((navigation, i) => (
                        <div key={i}>{navigation.title}</div>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default LayoutSideBar;
