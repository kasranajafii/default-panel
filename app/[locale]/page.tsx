"use client";
import Input from "@/components/cuipe/Input";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [gmail, setGmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    return (
        <main className="p-5">
            <Input
                name="text"
                type="text"
                size="sm"
                value={name}
                supportingText=""
                placeholder="name"
                status="error"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <Input
                name="text"
                type="text"
                size="md"
                value={""}
                supportingText=""
                placeholder="disable"
                status="error"
                disabled
                onChange={() => {}}
            />
            <Input
                name=""
                type="email"
                size="lg"
                value={gmail}
                supportingText=""
                placeholder="inter your gmail"
                onChange={(e) => {
                    setGmail(e.target.value);
                }}
            />
            <Input
                name="password"
                type="password"
                size="lg"
                value={password}
                supportingText=""
                placeholder="inter your password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <Input
                name="phone"
                value={phone}
                type="number"
                size="sm"
                status="Success"
                supportingText=""
                placeholder="inter your phone"
                onChange={(e) => {
                    setPhone(e.target.value);
                }}
            ></Input>
        </main>
    );
}
