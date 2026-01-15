"use client"

import React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  type LabelProps,
} from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

/* =============================
   Data Types
============================= */

interface PlayerRatingData {
  month: string
  desktop: number
}

/* =============================
   Custom Label (Fully Typed)
============================= */

const CustomBarLabel: React.FC<LabelProps> = ({
  x,
  y,
  width,
  value,
}) => {
  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    typeof width !== "number" ||
    typeof value !== "number"
  ) {
    return null
  }

  return (
    <foreignObject
      x={x + width / 2 - 18}
      y={y - 28}
      width={36}
      height={24}
    >
      <div className="flex items-center justify-center rounded-[4px] bg-primary px-2 py-1 text-xs font-normal leading-[150%] text-white">
        {value}
      </div>
    </foreignObject>
  )
}

/* =============================
   Chart Data
============================= */

const chartData: PlayerRatingData[] = [
  { month: "15/05/2025", desktop: 9 },
  { month: "17/05/2025", desktop: 5.8 },
  { month: "19/05/2025", desktop: 7.3 },
  { month: "20/05/2025", desktop: 8 },
  { month: "25/05/2025", desktop: 9.2 },
]

/* =============================
   Chart Config
============================= */

const chartConfig = {
  desktop: {
    label: "Rating",
    color: "#4674B7",
  },
} satisfies ChartConfig

/* =============================
   Component
============================= */

const PlayerRating: React.FC = () => {
  return (
    <div className="bg-white shadow-[0px_4px_16px_0px_#00000014] rounded-[16px] p-5">
      <h4 className="text-xl md:text-3xl lg:text-4xl font-normal leading-[120%] text-[#131313] pb-4">
        PLAYER RATINGS FROM LAST 5 GAMES
      </h4>

      <Card>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-[288px]">
            <BarChart data={chartData} margin={{ top: 20 }}>
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value: string) => value.slice(0, 10)}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />

              <Bar
                dataKey="desktop"
                fill="var(--color-desktop)"
                radius={8}
              >
                <LabelList content={CustomBarLabel} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default PlayerRating














// "use client"
// import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card"
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   type ChartConfig,
// } from "@/components/ui/chart"


// const CustomBarLabel = (props: any) => {
//   const { x, y, width, value } = props

//   if (value === undefined) return null

//   return (
//     <foreignObject
//       x={x + width / 2 - 18}
//       y={y - 28}
//       width={36}
//       height={24}
//     >
//       <div className="flex items-center justify-center rounded-[4px] bg-primary px-2 py-1 text-xs font-normal leading-[150%] text-white">
//         {value}
//       </div>
//     </foreignObject>
//   )
// }

// export const description = "A bar chart with a label"
// const chartData = [
//   { month: "January", desktop: 9 },
//   { month: "February", desktop: 5.8 },
//   { month: "March", desktop: 7.3 },
//   { month: "April", desktop: 8 },
//   { month: "May", desktop: 9.2 }
// ]
// const chartConfig = {
//   desktop: {
//     label: "Rating",
//     color: "#4674B7",
//   },
// } satisfies ChartConfig

// const PlayerRating = () => {
//   return (
//     <div className='bg-white shadow-[0px_4px_16px_0px_#00000014] rounded-[16px] p-5 '>
//         <h4 className='text-xl md:text-3xl lg:text-4xl font-normal leading-[120%] text-[#131313] pb-4'>PLAYER RATINGS FORM LAST 5 Games</h4>

//         <Card>
//       <CardContent>
//         <ChartContainer config={chartConfig} className="w-full h-[288px]">
//           <BarChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               top: 20,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
//                 <LabelList content={<CustomBarLabel />} />
//             </Bar>
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//     </div>
//   )
// }

// export default PlayerRating