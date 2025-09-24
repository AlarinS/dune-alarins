"use client"

import * as React from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "2024-04-01", desktop: 186, mobile: 80 },
  { date: "2024-04-02", desktop: 305, mobile: 200 },
  { date: "2024-04-03", desktop: 237, mobile: 120 },
  { date: "2024-04-04", desktop: 73,  mobile: 190 },
  { date: "2024-04-05", desktop: 209, mobile: 130 },
  { date: "2024-04-06", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: { label: "Десктоп",  color: "var(--chart-1)" },
  mobile:  { label: "Мобильные", color: "var(--chart-2)" },
} as const

export default function ChartAreaInteractive() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{ left: 0, right: 12 }}
      >
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="var(--color-desktop)" stopOpacity={0.6} />
            <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="var(--color-mobile)" stopOpacity={0.6} />
            <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value: string) => {
            const d = new Date(value)
            return d.toLocaleDateString("ru-RU", { month: "short", day: "numeric" })
          }}
        />

        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />

        <Area
          type="natural"
          dataKey="mobile"
          stroke="var(--color-mobile)"
          fill="url(#fillMobile)"
          fillOpacity={0.6}
          stackId="a"
        />
        <Area
          type="natural"
          dataKey="desktop"
          stroke="var(--color-desktop)"
          fill="url(#fillDesktop)"
          fillOpacity={0.4}
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
