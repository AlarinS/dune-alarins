import * as React from "react";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <SectionCards />
      <div className="mt-6">
        <ChartAreaInteractive />
      </div>
    </>
  );
}
