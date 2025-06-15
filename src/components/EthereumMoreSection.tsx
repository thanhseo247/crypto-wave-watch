
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Layers, Code, Coins } from "lucide-react";

const EthereumMoreSection = () => {
  const ethereumMetrics = [
    { label: "Gas Price", value: "25 Gwei", change: "-12.5%", trending: false },
    { label: "Total Staked ETH", value: "32.1M ETH", change: "+0.8%", trending: true },
    { label: "Validators", value: "1,003,456", change: "+1.2%", trending: true },
    { label: "Burn Rate", value: "2.1 ETH/min", change: "+5.4%", trending: true }
  ];

  const ethereumEcosystem = [
    {
      title: "Smart Contracts",
      description: "Learn how Ethereum enables programmable blockchain applications and DApps.",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      readTime: "8 min"
    },
    {
      title: "Layer 2 Solutions",
      description: "Discover scaling solutions like Polygon, Arbitrum, and Optimism.",
      icon: <Layers className="h-6 w-6 text-blue-500" />,
      readTime: "6 min"
    },
    {
      title: "DeFi Protocols",
      description: "Explore decentralized finance applications built on Ethereum.",
      icon: <Coins className="h-6 w-6 text-blue-500" />,
      readTime: "10 min"
    }
  ];

  const ethereumStats = [
    { metric: "Total Supply", value: "120.4M ETH" },
    { metric: "Staking APR", value: "3.2%" },
    { metric: "Smart Contracts", value: "45M+" },
    { metric: "Daily Transactions", value: "1.1M" }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ethereum Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive deep into Ethereum's smart contract platform and vibrant DeFi ecosystem
          </p>
        </div>

        {/* Network Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Network Health</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethereumMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {metric.label}
                    {metric.trending && <TrendingUp className="h-4 w-4 text-green-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <Badge 
                    variant="secondary" 
                    className={metric.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                  >
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Ecosystem Guide */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ethereum Ecosystem</h3>
            <div className="space-y-4">
              {ethereumEcosystem.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        {guide.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{guide.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{guide.readTime}</span>
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            Explore →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ethereum Stats */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Statistics</h3>
            <Card>
              <CardHeader>
                <CardTitle>Ethereum Network Data</CardTitle>
                <CardDescription>Key metrics of the Ethereum blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ethereumStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{stat.metric}</span>
                      <span className="font-bold text-gray-900">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthereumMoreSection;
