"use client";
import OnBoarding from "@/components/cuipe/OnBoarding";
import Sidebar from "@/components/cuipe/Sidebar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <main className="">
      <OnBoarding
        imageSrc="/assets/images/onboarding/onboarding_banner.png"
        itemsCount={4}
      />
    </main>
  );
}
