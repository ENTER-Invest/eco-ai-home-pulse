
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { 
  Thermometer, 
  Lightbulb, 
  Car, 
  Droplets,
  Wind,
  Battery,
  Zap,
  Home,
  Wifi,
  WifiOff,
  Settings,
  TrendingUp,
  TrendingDown
} from "lucide-react";

const ApplianceGrid = () => {
  const appliances = [
    {
      id: "hvac",
      name: "Smart HVAC",
      type: "Climate Control",
      icon: Thermometer,
      status: "active",
      connected: true,
      currentTemp: "72°F",
      targetTemp: "70°F",
      energyUsage: 65,
      efficiency: 89,
      monthlySavings: "$45",
      agent: "Energy Optimizer"
    },
    {
      id: "lighting",
      name: "Smart Lighting",
      type: "Lighting System",
      icon: Lightbulb,
      status: "active",
      connected: true,
      brightness: "75%",
      activeZones: "8/12",
      energyUsage: 23,
      efficiency: 94,
      monthlySavings: "$28",
      agent: "Comfort Manager"
    },
    {
      id: "water-heater",
      name: "Smart Water Heater",
      type: "Water System",
      icon: Droplets,
      status: "standby",
      connected: true,
      temperature: "120°F",
      mode: "Eco Mode",
      energyUsage: 45,
      efficiency: 78,
      monthlySavings: "$32",
      agent: "Water Guardian"
    },
    {
      id: "ev-charger",
      name: "EV Charger",
      type: "Transportation",
      icon: Car,
      status: "charging",
      connected: true,
      chargingLevel: "85%",
      timeRemaining: "2h 15m",
      energyUsage: 87,
      efficiency: 92,
      monthlySavings: "$67",
      agent: "Solar Manager"
    },
    {
      id: "solar-panels",
      name: "Solar Panel System",
      type: "Energy Generation",
      icon: Zap,
      status: "generating",
      connected: true,
      currentOutput: "4.2kW",
      dailyGeneration: "28.5kWh",
      energyUsage: -42, // Negative because it's generating
      efficiency: 96,
      monthlySavings: "$156",
      agent: "Solar Manager"
    },
    {
      id: "battery-storage",
      name: "Battery Storage",
      type: "Energy Storage",
      icon: Battery,
      status: "charging",
      connected: true,
      chargeLevel: "78%",
      capacity: "13.5kWh",
      energyUsage: 15,
      efficiency: 91,
      monthlySavings: "$43",
      agent: "Solar Manager"
    },
    {
      id: "air-purifier",
      name: "Smart Air Purifier",
      type: "Air Quality",
      icon: Wind,
      status: "active",
      connected: true,
      airQuality: "Good",
      fanSpeed: "Auto",
      energyUsage: 12,
      efficiency: 88,
      monthlySavings: "$8",
      agent: "Comfort Manager"
    },
    {
      id: "irrigation",
      name: "Smart Irrigation",
      type: "Garden System",
      icon: Droplets,
      status: "scheduled",
      connected: true,
      nextWatering: "Tomorrow 6 AM",
      waterSaved: "245 gal/month",
      energyUsage: 8,
      efficiency: 85,
      monthlySavings: "$15",
      agent: "Water Guardian"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-600";
      case "charging": return "text-blue-600";
      case "generating": return "text-yellow-600";
      case "standby": return "text-gray-600";
      case "scheduled": return "text-purple-600";
      default: return "text-gray-600";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "charging": return "default";
      case "generating": return "default";
      case "standby": return "secondary";
      case "scheduled": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Smart Appliances</h2>
          <p className="text-gray-600">Monitor and control all connected devices</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Manage All
          </Button>
          <Button>
            <Home className="h-4 w-4 mr-2" />
            Add Device
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appliances.map((appliance) => {
          const IconComponent = appliance.icon;
          return (
            <Card key={appliance.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{appliance.name}</CardTitle>
                      <CardDescription>{appliance.type}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {appliance.connected ? (
                      <Wifi className="h-4 w-4 text-green-500" />
                    ) : (
                      <WifiOff className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <Badge variant={getStatusBadge(appliance.status)} className="text-xs">
                    {appliance.status.charAt(0).toUpperCase() + appliance.status.slice(1)}
                  </Badge>
                  <p className="text-xs text-gray-500">by {appliance.agent}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Device-specific info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {appliance.id === "hvac" && (
                    <>
                      <div>
                        <p className="text-gray-600">Current</p>
                        <p className="font-semibold">{appliance.currentTemp}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Target</p>
                        <p className="font-semibold">{appliance.targetTemp}</p>
                      </div>
                    </>
                  )}
                  
                  {appliance.id === "lighting" && (
                    <>
                      <div>
                        <p className="text-gray-600">Brightness</p>
                        <p className="font-semibold">{appliance.brightness}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Active Zones</p>
                        <p className="font-semibold">{appliance.activeZones}</p>
                      </div>
                    </>
                  )}
                  
                  {appliance.id === "ev-charger" && (
                    <>
                      <div>
                        <p className="text-gray-600">Charge Level</p>
                        <p className="font-semibold">{appliance.chargingLevel}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Time Remaining</p>
                        <p className="font-semibold">{appliance.timeRemaining}</p>
                      </div>
                    </>
                  )}
                  
                  {appliance.id === "solar-panels" && (
                    <>
                      <div>
                        <p className="text-gray-600">Current Output</p>
                        <p className="font-semibold">{appliance.currentOutput}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Daily Gen.</p>
                        <p className="font-semibold">{appliance.dailyGeneration}</p>
                      </div>
                    </>
                  )}
                  
                  {appliance.id === "battery-storage" && (
                    <>
                      <div>
                        <p className="text-gray-600">Charge Level</p>
                        <p className="font-semibold">{appliance.chargeLevel}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Capacity</p>
                        <p className="font-semibold">{appliance.capacity}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Energy Usage */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Energy Usage</span>
                    <span className={`font-medium ${appliance.energyUsage < 0 ? 'text-green-600' : ''}`}>
                      {appliance.energyUsage < 0 ? `+${Math.abs(appliance.energyUsage)}%` : `${appliance.energyUsage}%`}
                    </span>
                  </div>
                  <Progress 
                    value={Math.abs(appliance.energyUsage)} 
                    className={`h-2 ${appliance.energyUsage < 0 ? 'bg-green-100' : ''}`} 
                  />
                </div>

                {/* Efficiency and Savings */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Efficiency</p>
                    <p className="font-semibold text-green-600">{appliance.efficiency}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Monthly Savings</p>
                    <p className="font-semibold text-green-600">{appliance.monthlySavings}</p>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Settings className="h-4 w-4 mr-2" />
                    Control
                  </Button>
                  <Switch checked={appliance.status === "active"} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ApplianceGrid;
