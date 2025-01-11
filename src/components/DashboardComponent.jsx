import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SquareChevronDown,
  ChartNoAxesCombined,
  ClockAlert,
  GitCompareArrows,
  MoveUp,
  Sparkles,
  Waypoints,
  MessageSquareWarning,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Accuracy",
    color: "hsl(var(--chart-2))",
  },
};

const data = [
  { slot: 1, accuracy: 85 },
  { slot: 2, accuracy: 45 },
  { slot: 3, accuracy: 35 },
  { slot: 4, accuracy: 65 },
  { slot: 5, accuracy: 55 },
  { slot: 6, accuracy: 45 },
  { slot: 7, accuracy: 65 },
];

// dummy data graph 2 down
const chartData = [
  { month: "2024", desktop: 58 },
  { month: "2023", desktop: 36 },
];

const chartSideConfig = {
  desktop: {
    label: "Time Taken",
    color: "hsl(var(--chart-3))",
  },

  label: {
    color: "hsl(var(--background))",
  },
};
// dummy data graph 2 up

const subjects = [
  "Geography",
  "Politics",
  "Current Affairs",
  "General Studies",
  "Mathematics",
  "Social Studies",
  "English Literature",
  "Indian History",
  "Economics",
];

function DashboardComponent() {
  return (
    <div className="flex-1 space-y-4 p-4 md:space-y-6 md:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="text-sm font-medium flex items-center gap-1">
                <SquareChevronDown className="size-5" />{" "}
                <p className="text-sm font-medium">Compare Accuracy</p>
              </div>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg flex items-center gap-1 font-semibold">
              <ChartNoAxesCombined />
              <p>Improvement</p>
            </h3>
            <h1 className="font-bold">Subject Understanding</h1>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Badge
                  key={subject}
                  className="rounded-full px-3 py-1 text-xs sm:text-sm"
                >
                  {subject}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold flex items-center gap-1">
              <ClockAlert />
              <p className="text-lg font-semibold">Response Time</p>
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge className="bg-blue-700">Std Time - 2min</Badge>
              </div>
              <div className="flex items-center justify-between border-dotted border-2 border-blue-500 rounded-lg p-2 bg-gray-100">
                {/* <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: "60%" }}
                ></div> */}
                <h1 className="font-medium text-gray-800">
                  <span className="text-[30px]  font-bold text-cyan-500">
                    60
                  </span>
                  % Ans took
                </h1>
                <h1 className=" text-lg font-bold flex items-center">
                  <MoveUp className="size-5" />
                  2min
                </h1>
              </div>
              <div className="text-lg text-black">
                <Separator />
                <h1 className="text-center font-bold mt-2">
                  You are <span className="text-red-600">Slow</span>!
                </h1>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg flex items-center gap-1 font-semibold">
              <Waypoints />
              <p>Approach Data</p>
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col gap-1 space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <span className="border-2 flex items-center gap-1 p-1 rounded-md border-blue-400 w-full">
                  <p className="bg-blue-500 p-1 text-white rounded-sm">25%</p>{" "}
                  Based on <p className="font-bold text-blue-400"> Facts</p>
                </span>
                <span className="border-2 flex items-center gap-1 p-1 rounded-md border-blue-400 w-full">
                  <p className="bg-blue-500 p-1 text-white rounded-sm">32%</p>{" "}
                  Based on <p className="font-bold text-blue-400"> Analysis</p>
                </span>
              </div>

              <div className="flex flex-col gap-1 space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <span className="border-2 flex items-center gap-1 p-1 rounded-md border-blue-400 w-full">
                  <p className="bg-blue-500 p-1 text-white rounded-sm">19%</p>{" "}
                  Based on{" "}
                  <p className="font-bold text-blue-400"> Elimination</p>
                </span>
                <span className="border-2 flex items-center gap-1 p-1 rounded-md border-blue-400 w-full">
                  <p className="bg-blue-500 p-1 text-white rounded-sm">24%</p>{" "}
                  Based on <p className="font-bold text-blue-400"> Guess</p>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg flex items-center gap-1 font-semibold">
              <Sparkles />
              <p>Suggestions</p>
            </h3>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <Badge className="bg-blue-700">Q. 1-12</Badge>
                <span className="block p-3 border-2 border-blue-700  border-dashed my-1 rounded-sm">
                  <span className="text-[20px]">3</span> min
                </span>
                <span className="text-md font-bold text-green-500">Easy</span>
              </div>
              <div>
                <Badge className="bg-blue-700">Q. 12-32</Badge>
                <span className="block p-3 border-2 border-blue-700  border-dashed my-1 rounded-sm">
                  <span className="text-[20px]">3</span> min
                </span>
                <span className="text-md font-bold text-yellow-500">
                  Medium
                </span>
              </div>
              <div>
                <Badge className="bg-blue-700">Q. 32-40</Badge>
                <span className="block p-3 border-2 border-blue-700  border-dashed my-1 rounded-sm">
                  <span className="text-[20px]">3</span> min
                </span>
                <span className="text-md font-bold text-red-500">Hard</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg flex items-center gap-1 font-semibold">
              <GitCompareArrows />
              <p>Compare Accuracy</p>
            </h3>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={data} barSize={25}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="slot"
                    tickLine={false}
                    tickMargin={3}
                    axisLine={3}
                  />
                  <YAxis />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar
                    dataKey="accuracy"
                    fill="var(--color-desktop)"
                    radius={3}
                  />
                </BarChart>
              </ChartContainer>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className=" flex items-center gap-1 font-semibold">
              <MessageSquareWarning />
              <p className="text-lg">Time Taken</p>
            </h3>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartSideConfig} className="w-full h-48">
              <BarChart
                width={400}
                height={200}
                data={chartData}
                layout="vertical"
                margin={{
                  top: 30,
                  bottom: 10,
                }}
                barSize={20}
              >
                <CartesianGrid
                  horizontal={false}
                  vertical={true}
                  verticalPoints={[10, 20, 30, 40, 50, 60, 70, 80, 90]}
                />
                <YAxis
                  dataKey="month"
                  type="category"
                  tickLine={true}
                  tickMargin={10}
                  axisLine={true}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <XAxis
                  dataKey="desktop"
                  type="number"
                  domain={[0, 90]}
                  ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
                  orientation="top"
                  axisLine={true}
                  tickLine={true}
                />
                <Tooltip />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
                  <LabelList
                    dataKey="month"
                    position="insideLeft"
                    offset={8}
                    className="fill-[--color-label]"
                    fontSize={12}
                  />
                  <LabelList
                    dataKey="desktop"
                    position="right"
                    offset={8}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>

          <CardFooter>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              delectus dignissimos voluptas
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default DashboardComponent;
