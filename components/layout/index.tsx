"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type TLayoutComponent = {
  children: React.ReactNode;
};

function LayoutComponent({ children }: TLayoutComponent) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}

export default LayoutComponent;
