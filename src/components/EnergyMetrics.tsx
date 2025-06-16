
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { Zap, TrendingDown, TrendingUp, Battery } from "lucide-react";

const EnergyMetrics = () => {
  const hourlyData = [
    { time: "00:00", consumption: 2.1, generation: 0 },
    { time: "06:00", consumption: 3.2, generation: 0.5 },
    { time: "12:00", consumption: 4.8, generation: 5.2 },
    { time: "18:00", consumption: 6.1, generation: 2.1 },
    { time: "24:00", consumption: 2.8, generation: 0 },
  ];

  const currentHour = new Date().getHours();
  const currentConsumption = 4.2;
  const currentGeneration = 3.8;
  const netUsage = currentConsumption - currentGeneration;

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 dark:text-white">
          <Zap className="h-5 w-5 text-yellow-600" />
          Real-Time Energy Metrics
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          Live monitoring of energy consumption and generation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Status */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Consumption</p>
            </div>
            <p className="text-2xl font-bold text-red-600">{currentConsumption} kW</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingDown className="h-4 w-4 text-green-500" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Generation</p>
            </div>
            <p className="text-2xl font-bold text-green-600">{currentGeneration} kW</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Battery className="h-4 w-4 text-blue-500" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Net Usage</p>
            </div>
            <p className={`text-2xl font-bold ${netUsage > 0 ? 'text-red-600' : 'text-green-600'}`}>
              {netUsage > 0 ? '+' : ''}{netUsage.toFixed(1)} kW
            </p>
          </div>
        </div>

        {/* Energy Efficiency Score */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="dark:text-gray-300">Energy Efficiency Score</span>
            <span className="font-medium text-green-600">94%</span>
          </div>
          <Progress value={94} className="h-3" />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Excellent! Your home is performing 18% better than average.
          </p>
        </div>

        {/* 24-Hour Chart */}
        <div className="space-y-2">
          <h4 className="font-medium dark:text-white">24-Hour Energy Flow</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number, name: string) => [
                    `${value} kW`, 
                    name === 'consumption' ? 'Consumption' : 'Generation'
                  ]}
                />
                <Area 
                  type="monotone" 
                  dataKey="consumption" 
                  stackId="1"
                  stroke="#ef4444" 
                  fill="#fca5a5" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="generation" 
                  stackId="2"
                  stroke="#22c55e" 
                  fill="#86efac" 
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-gray-700">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Today's Savings</p>
            <p className="text-lg font-semibold text-green-600">$12.34</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Peak Efficiency</p>
            <p className="text-lg font-semibold text-blue-600">12:30 PM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergyMetrics;
