"use client";
import { I18nProviderClient } from "@/locales/client";
import React, { ReactElement } from "react";

type TClientLayoutProps = {
    locale: "fa" | "en";
    children: ReactElement;
};
function ClientLayout({ locale, children }: TClientLayoutProps) {
    return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}

export default ClientLayout;
