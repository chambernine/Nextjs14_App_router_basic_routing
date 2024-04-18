"use client";
import React from "react";

import CsrFetchData from "@/components/csrFetchData";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col px-10 gap-2">
      <CsrFetchData />
    </div>
  );
}
