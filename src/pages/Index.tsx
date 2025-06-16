
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  Zap, 
  Home, 
  Thermometer, 
  Lightbulb, 
  Car, 
  Droplets,
  Wind,
  Battery,
  TrendingDown,
  TrendingUp,
  Bot,
  Activity,
  Settings,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "next-themes";
import AgentCard from "@/components/AgentCard";
import ApplianceGrid from "@/components/ApplianceGrid";
import EnergyMetrics from "@/components/EnergyMetrics";
import SustainabilityInsights from "@/components/SustainabilityInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { theme, setTheme } = useTheme();

  const agents = [
    {
      id: "energy-optimizer",
      name: "Energy Optimizer",
      status: "active" as const,
      description: "Optimizes energy consumption across all connected appliances",
      appliances: ["HVAC", "Water Heater", "Lighting"],
      savings: "$127/month",
      co2Reduction: "45kg/month"
    },
    {
      id: "comfort-manager",
      name: "Comfort Manager", 
      status: "active" as const,
      description: "Maintains optimal comfort while minimizing energy usage",
      appliances: ["Smart Thermostat", "Smart Blinds", "Air Purifier"],
      savings: "$89/month",
      co2Reduction: "32kg/month"
    },
    {
      id: "water-guardian",
      name: "Water Guardian",
      status: "learning" as const,
      description: "Monitors and optimizes water usage throughout the property",
      appliances: ["Smart Irrigation", "Leak Sensors", "Water Heater"],
      savings: "$43/month",
      co2Reduction: "12kg/month"
    },
    {
      id: "solar-manager",
      name: "Solar Manager",
      status: "active" as const,
      description: "Maximizes solar energy utilization and battery storage",
      appliances: ["Solar Panels", "Battery Storage", "EV Charger"],
      savings: "$203/month",
      co2Reduction: "78kg/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logo and Theme Toggle */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/99eaf883-e08e-4f61-97b1-131ae6b0e376.png" 
                alt="EcoAI Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">EcoAI Home Pulse</h1>
                <p className="text-gray-600 dark:text-gray-300">Intelligent Sustainability Management Platform</p>
              </div>
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-10 w-10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Monthly Savings</p>
                    <p className="text-2xl font-bold text-green-600">$462</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">CO₂ Reduced</p>
                    <p className="text-2xl font-bold text-green-600">167kg</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Active Agents</p>
                    <p className="text-2xl font-bold text-blue-600">4</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Energy Efficiency</p>
                    <p className="text-2xl font-bold text-yellow-600">94%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 dark:bg-gray-800">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="agents">AI Agents</TabsTrigger>
            <TabsTrigger value="appliances">Appliances</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <EnergyMetrics />
              <SustainabilityInsights />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.slice(0, 2).map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} detailed />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="appliances" className="space-y-6">
            <ApplianceGrid />
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <SustainabilityInsights detailed />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
