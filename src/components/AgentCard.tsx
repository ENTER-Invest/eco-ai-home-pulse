
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bot, 
  Activity, 
  Settings, 
  Zap, 
  Leaf, 
  TrendingDown,
  Play,
  Pause,
  MoreVertical
} from "lucide-react";

interface Agent {
  id: string;
  name: string;
  status: "active" | "learning" | "idle";
  description: string;
  appliances: string[];
  savings: string;
  co2Reduction: string;
}

interface AgentCardProps {
  agent: Agent;
  detailed?: boolean;
}

const AgentCard = ({ agent, detailed = false }: AgentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "learning": return "bg-yellow-500";
      case "idle": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "learning": return "secondary";
      case "idle": return "outline";
      default: return "outline";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getStatusColor(agent.status)}`} />
            </div>
            <div>
              <CardTitle className="text-lg dark:text-white">{agent.name}</CardTitle>
              <Badge variant={getStatusBadgeVariant(agent.status)} className="text-xs mt-1">
                {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription className="mt-2 dark:text-gray-300">{agent.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Managed Appliances */}
        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Managing {agent.appliances.length} appliances:</p>
          <div className="flex flex-wrap gap-1">
            {agent.appliances.map((appliance) => (
              <Badge key={appliance} variant="outline" className="text-xs">
                {appliance}
              </Badge>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-green-600" />
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Savings</p>
              <p className="font-semibold text-green-600">{agent.savings}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-green-600" />
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">CO₂ Reduction</p>
              <p className="font-semibold text-green-600">{agent.co2Reduction}</p>
            </div>
          </div>
        </div>

        {detailed && (
          <>
            {/* Efficiency Score */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="dark:text-gray-300">Efficiency Score</span>
                <span className="font-medium dark:text-gray-300">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>

            {/* Learning Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="dark:text-gray-300">Learning Progress</span>
                <span className="font-medium dark:text-gray-300">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <Activity className="h-4 w-4 mr-2" />
            Monitor
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
