import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
    {
        variants: {
            variant: {
                primary:
                    "bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-700 border-blue-600 hover:border-blue-500 focus:border-blue-500 active:border-blue-700 text-white text-sm leading-snug disabled:text-black/25 disabled:bg-black/5 border disabled:border-zinc-300",
                secondary:
                    "bg-white shadow border border-zinc-300 text-black/90  font-normal leading-snug hover:bg-white hover:border-blue-500 hover:text-blue-500   active:bg-white active:border-blue-700 active:text-blue-700 active:text-sm focus:border-blue-500 focus:text-blue-500 disabled:text-black/25 disabled:bg-black/5 disabled:border-zinc-300 ",
                link: " text-blue-600 text-sm font-normal leading-snug hover:bg-black/0 hover:text-blue-500  active:text-blue-700 active:text-sm focus:text-blue-500 disabled:text-black/25 disabled:border-zinc-300 ",
                text: "  text-black/90 text-sm font-normal leading-snug hover:bg-black/5 active:bg-black/5  active:text-black/90 active:text-sm focus:bg-black/5 disabled:text-black/25 disabled:bg-black/5 disabled:border-zinc-300 ",
            },
            size: {
                default: "py-[7px] px-[15px]",
                sm: " h-6 px-[7px]",
                lg: " h-10 px-[15px]",
            },
        },
        defaultVariants: {
            variant: "secondary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
