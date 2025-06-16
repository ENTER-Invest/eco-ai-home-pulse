
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Zap, TrendingUp, Sun, Activity } from "lucide-react";

const CryptoMiningDashboard = () => {
  const miningData = [
    { time: "00:00", hashrate: 45.2, earnings: 0.0012 },
    { time: "04:00", hashrate: 52.1, earnings: 0.0015 },
    { time: "08:00", hashrate: 68.5, earnings: 0.0021 },
    { time: "12:00", hashrate: 89.3, earnings: 0.0028 },
    { time: "16:00", hashrate: 76.4, earnings: 0.0024 },
    { time: "20:00", hashrate: 58.7, earnings: 0.0018 },
    { time: "24:00", hashrate: 42.8, earnings: 0.0013 },
  ];

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 dark:text-white">
          <Sun className="h-5 w-5 text-yellow-600" />
          Solar-Powered Crypto Mining
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          Monitor your solar-powered cryptocurrency mining operations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mining Status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Activity className="h-4 w-4 text-green-500" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Active
            </Badge>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Hashrate</p>
            <p className="text-lg font-bold text-blue-600">76.4 MH/s</p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Daily Earnings</p>
            <p className="text-lg font-bold text-green-600">0.0324 ETH</p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Power Usage</p>
            <p className="text-lg font-bold text-yellow-600">100% Solar</p>
          </div>
        </div>

        {/* Mining Efficiency */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="dark:text-gray-300">Mining Efficiency</span>
            <span className="font-medium text-green-600">92%</span>
          </div>
          <Progress value={92} className="h-3" />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Optimized for solar power availability
          </p>
        </div>

        {/* 24-Hour Mining Performance */}
        <div className="space-y-2">
          <h4 className="font-medium dark:text-white">24-Hour Mining Performance</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={miningData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number, name: string) => [
                    name === 'hashrate' ? `${value} MH/s` : `${value} ETH`,
                    name === 'hashrate' ? 'Hashrate' : 'Earnings'
                  ]}
                />
                <Line 
                  type="monotone" 
                  dataKey="hashrate" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mining Pool Info */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-gray-700">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Mining Pool</p>
            <p className="font-semibold dark:text-white">EcoPool</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Next Payout</p>
            <p className="font-semibold text-green-600">2h 34m</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoMiningDashboard;
