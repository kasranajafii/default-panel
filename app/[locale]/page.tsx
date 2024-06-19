import Input from "@/components/cuipe/Input";
import { Calendar } from "lucide-react";

export default function Home() {
    return (
        <main className="p-5">
            <Input
                type="text"
                value={"d"}
                tooltip="sss"
                required
                label="soxom mehdiya"
                suffix={<Calendar />}
                prefix="UD"
                supportingText="soxom mehdiya"
            />
        </main>
    );
}
