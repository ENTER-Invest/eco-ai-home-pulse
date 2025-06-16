
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Share, Eye, Sparkles } from "lucide-react";

const NFTCertificates = () => {
  const certificates = [
    {
      id: 1,
      name: "Solar Pioneer 2024",
      description: "Generated 1000+ kWh from solar panels",
      image: "/api/placeholder/150/150",
      rarity: "Epic",
      mintDate: "2024-01-15",
      tokenId: "#001",
      achievement: "100% Solar Energy",
      verified: true
    },
    {
      id: 2,
      name: "Carbon Neutral Champion",
      description: "Achieved net-zero carbon footprint",
      image: "/api/placeholder/150/150",
      rarity: "Legendary",
      mintDate: "2024-02-20",
      tokenId: "#002",
      achievement: "0 tons CO₂",
      verified: true
    },
    {
      id: 3,
      name: "Energy Efficiency Master",
      description: "Maintained 95%+ efficiency for 6 months",
      image: "/api/placeholder/150/150",
      rarity: "Rare",
      mintDate: "2024-03-10",
      tokenId: "#003",
      achievement: "95% Efficiency",
      verified: true
    }
  ];

  const availableAchievements = [
    {
      name: "Crypto Mining Guru",
      description: "Mine cryptocurrency using 100% renewable energy for 30 days",
      progress: 87,
      requirement: "30 days solar mining"
    },
    {
      name: "DeFi Green Investor",
      description: "Invest in 5 different green DeFi protocols",
      progress: 60,
      requirement: "5 green protocols"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "text-yellow-600 border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20";
      case "Epic": return "text-purple-600 border-purple-600 bg-purple-50 dark:bg-purple-900/20";
      case "Rare": return "text-blue-600 border-blue-600 bg-blue-50 dark:bg-blue-900/20";
      default: return "text-gray-600 border-gray-600 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 dark:text-white">
          <Award className="h-5 w-5 text-yellow-600" />
          NFT Achievement Certificates
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          Collect NFT certificates for your sustainability achievements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Collection Overview */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Certificates Owned</p>
            <p className="text-2xl font-bold text-green-600">{certificates.length}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Value</p>
            <p className="text-2xl font-bold text-blue-600">2.34 ETH</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Rarity Score</p>
            <p className="text-2xl font-bold text-purple-600">8.7/10</p>
          </div>
        </div>

        {/* NFT Collection */}
        <div className="space-y-4">
          <h4 className="font-medium dark:text-white">Your Certificates</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="border rounded-lg p-4 dark:border-gray-700 space-y-3">
                <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Sparkles className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-bold">{cert.name}</p>
                    <p className="text-sm opacity-90">{cert.tokenId}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={getRarityColor(cert.rarity)}>
                      {cert.rarity}
                    </Badge>
                    {cert.verified && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  
                  <p className="font-medium dark:text-white">{cert.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
                  
                  <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <p>Achievement: {cert.achievement}</p>
                    <p>Minted: {cert.mintDate}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Achievements */}
        <div className="space-y-4">
          <h4 className="font-medium dark:text-white">Upcoming Certificates</h4>
          {availableAchievements.map((achievement, index) => (
            <div key={index} className="p-4 border rounded-lg dark:border-gray-700 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium dark:text-white">{achievement.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </div>
                <Badge variant="secondary">
                  {achievement.progress}%
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="dark:text-gray-300">Progress</span>
                  <span className="font-medium dark:text-gray-300">{achievement.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Requirement: {achievement.requirement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NFTCertificates;
