"use client";

import { createContext, useContext } from "react";

interface EnquiryContextValue {
  openEnquiry: (propertyName?: string) => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: EnquiryContextValue;
}) {
  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return ctx;
}
