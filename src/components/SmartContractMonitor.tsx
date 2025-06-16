
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileCode, Clock, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

const SmartContractMonitor = () => {
  const contracts = [
    {
      id: 1,
      name: "Energy Trading Pool",
      address: "0x742d35Cc6634C0532925a3b8D",
      status: "active",
      type: "Energy Trading",
      value: "234.5 kWh",
      nextExecution: "2h 15m",
      gasUsed: "0.0023 ETH"
    },
    {
      id: 2,
      name: "Carbon Credit Vault",
      address: "0x863f42Bd8734B0641236b4f3",
      status: "pending",
      type: "Carbon Credits",
      value: "12.5 tons CO₂",
      nextExecution: "45m",
      gasUsed: "0.0018 ETH"
    },
    {
      id: 3,
      name: "Solar Rewards Pool",
      address: "0x194c58Ae9845C0329876e1d7",
      status: "completed",
      type: "Solar Mining",
      value: "1.23 ETH",
      nextExecution: "Completed",
      gasUsed: "0.0031 ETH"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-600 border-green-600";
      case "pending": return "text-yellow-600 border-yellow-600";
      case "completed": return "text-blue-600 border-blue-600";
      default: return "text-gray-600 border-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <Clock className="h-4 w-4" />;
      case "completed": return <CheckCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 dark:text-white">
          <FileCode className="h-5 w-5 text-purple-600" />
          Smart Contract Monitor
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          Track automated energy trading and sustainability contracts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Contract Overview */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Active Contracts</p>
            <p className="text-2xl font-bold text-green-600">3</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Value Locked</p>
            <p className="text-2xl font-bold text-blue-600">5.67 ETH</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Gas Saved</p>
            <p className="text-2xl font-bold text-purple-600">23%</p>
          </div>
        </div>

        {/* Contract List */}
        <div className="space-y-4">
          <h4 className="font-medium dark:text-white">Active Contracts</h4>
          {contracts.map((contract) => (
            <div key={contract.id} className="p-4 border rounded-lg dark:border-gray-700 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <FileCode className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">{contract.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {contract.address.slice(0, 10)}...{contract.address.slice(-6)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getStatusColor(contract.status)}>
                    {getStatusIcon(contract.status)}
                    {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Type</p>
                  <p className="font-medium dark:text-white">{contract.type}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Value</p>
                  <p className="font-medium text-green-600">{contract.value}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Next Execution</p>
                  <p className="font-medium dark:text-white">{contract.nextExecution}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Gas Used</p>
                  <p className="font-medium text-blue-600">{contract.gasUsed}</p>
                </div>
              </div>
              
              {contract.status === "pending" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="dark:text-gray-300">Execution Progress</span>
                    <span className="font-medium dark:text-gray-300">67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            Deploy Contract
          </Button>
          <Button size="sm" variant="outline">
            View All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartContractMonitor;
