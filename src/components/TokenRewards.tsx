
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coins, Gift, TrendingUp, Award } from "lucide-react";

const TokenRewards = () => {
  const rewards = [
    { id: 1, name: "Energy Saver", tokens: 50, description: "Reduce energy consumption by 10%", completed: true },
    { id: 2, name: "Solar Champion", tokens: 100, description: "Generate 100 kWh from solar", completed: true },
    { id: 3, name: "Carbon Neutral", tokens: 150, description: "Offset 1 ton of CO₂", completed: false, progress: 67 },
    { id: 4, name: "Efficiency Master", tokens: 200, description: "Achieve 95% efficiency rating", completed: false, progress: 89 },
  ];

  const totalTokens = 1250;
  const availableTokens = 450;

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 dark:text-white">
          <Coins className="h-5 w-5 text-yellow-600" />
          EcoToken Rewards
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          Earn tokens for achieving sustainability goals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Token Balance */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Coins className="h-5 w-5 text-green-600" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Earned</p>
            </div>
            <p className="text-2xl font-bold text-green-600">{totalTokens}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">ECO Tokens</p>
          </div>
          
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="h-5 w-5 text-blue-600" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Available</p>
            </div>
            <p className="text-2xl font-bold text-blue-600">{availableTokens}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">ECO Tokens</p>
          </div>
        </div>

        {/* Rewards List */}
        <div className="space-y-4">
          <h4 className="font-medium dark:text-white">Achievement Rewards</h4>
          {rewards.map((reward) => (
            <div key={reward.id} className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                  <Award className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium dark:text-white">{reward.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{reward.description}</p>
                  {!reward.completed && reward.progress && (
                    <div className="mt-2 space-y-1">
                      <Progress value={reward.progress} className="h-2" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">{reward.progress}% complete</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <Badge variant={reward.completed ? "default" : "secondary"}>
                    {reward.tokens} ECO
                  </Badge>
                  {reward.completed && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ✓ Earned
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Staking Options */}
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <h4 className="font-medium dark:text-white">Stake Your Tokens</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Stake your ECO tokens to earn additional rewards and support the green economy
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Stake Tokens
            </Button>
            <Button size="sm" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenRewards;
