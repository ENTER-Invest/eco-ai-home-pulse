
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  Leaf, 
  Droplets, 
  Recycle, 
  TreePine, 
  Award,
  Target,
  TrendingUp,
  Calendar
} from "lucide-react";

interface SustainabilityInsightsProps {
  detailed?: boolean;
}

const SustainabilityInsights = ({ detailed = false }: SustainabilityInsightsProps) => {
  const monthlyData = [
    { month: "Jan", co2Saved: 145, waterSaved: 234, energySaved: 567 },
    { month: "Feb", co2Saved: 167, waterSaved: 298, energySaved: 623 },
    { month: "Mar", co2Saved: 189, waterSaved: 312, energySaved: 701 },
    { month: "Apr", co2Saved: 203, waterSaved: 356, energySaved: 789 },
    { month: "May", co2Saved: 167, waterSaved: 289, energySaved: 654 },
  ];

  const impactData = [
    { name: "Energy Savings", value: 45, color: "#22c55e" },
    { name: "Water Conservation", value: 28, color: "#3b82f6" },
    { name: "Waste Reduction", value: 18, color: "#f59e0b" },
    { name: "Carbon Offset", value: 9, color: "#8b5cf6" },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Energy Efficiency Master",
      description: "Maintained 90%+ efficiency for 3 months",
      progress: 100,
      color: "text-yellow-600"
    },
    {
      icon: Droplets,
      title: "Water Conservation Champion",
      description: "Saved 500+ gallons this month",
      progress: 78,
      color: "text-blue-600"
    },
    {
      icon: TreePine,
      title: "Carbon Neutral Hero",
      description: "Offset 200kg CO₂ this month",
      progress: 85,
      color: "text-green-600"
    },
    {
      icon: Recycle,
      title: "Sustainability Advocate",
      description: "Reduced waste by 30%",
      progress: 60,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            Sustainability Impact
          </CardTitle>
          <CardDescription>
            Track your environmental contribution and achievements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Impact Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">167kg</p>
              <p className="text-sm text-gray-600">CO₂ Saved This Month</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">512 gal</p>
              <p className="text-sm text-gray-600">Water Conserved</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <TreePine className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">2.3</p>
              <p className="text-sm text-gray-600">Trees Equivalent</p>
            </div>
          </div>

          {/* Monthly Trends */}
          {detailed && (
            <div className="space-y-4">
              <h4 className="font-medium">Monthly Sustainability Trends</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="co2Saved" fill="#22c55e" name="CO₂ Saved (kg)" />
                    <Bar dataKey="waterSaved" fill="#3b82f6" name="Water Saved (gal)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Impact Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Impact Distribution</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Goals Progress</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly CO₂ Reduction</span>
                    <span>167/200 kg</span>
                  </div>
                  <Progress value={83.5} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Energy Efficiency</span>
                    <span>94/95%</span>
                  </div>
                  <Progress value={98.9} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Water Conservation</span>
                    <span>512/600 gal</span>
                  </div>
                  <Progress value={85.3} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      {detailed && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              Sustainability Achievements
            </CardTitle>
            <CardDescription>
              Your environmental impact milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                      <div>
                        <h5 className="font-medium">{achievement.title}</h5>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Progress value={achievement.progress} className="h-2" />
                      <p className="text-xs text-gray-500">{achievement.progress}% completed</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SustainabilityInsights;
