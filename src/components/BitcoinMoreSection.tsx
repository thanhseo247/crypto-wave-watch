
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield, Globe } from "lucide-react";

const BitcoinMoreSection = () => {
  const bitcoinMetrics = [
    { label: "Hash Rate", value: "450 EH/s", change: "+2.1%", trending: true },
    { label: "Network Difficulty", value: "62.46 T", change: "+1.8%", trending: true },
    { label: "Block Time", value: "9.8 min", change: "0.0%", trending: false },
    { label: "Mempool Size", value: "15.2 MB", change: "-5.3%", trending: false }
  ];

  const bitcoinEducation = [
    {
      title: "What is Bitcoin?",
      description: "Learn the fundamentals of Bitcoin, the world's first cryptocurrency and digital store of value.",
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      readTime: "5 min"
    },
    {
      title: "Bitcoin Security",
      description: "Understand how Bitcoin's proof-of-work consensus mechanism secures the network.",
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      readTime: "7 min"
    },
    {
      title: "Lightning Network",
      description: "Explore Bitcoin's Layer 2 solution for fast and cheap transactions.",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      readTime: "6 min"
    }
  ];

  const bitcoinStats = [
    { metric: "Circulating Supply", value: "19.7M BTC" },
    { metric: "Max Supply", value: "21M BTC" },
    { metric: "Next Halving", value: "~2028" },
    { metric: "Active Addresses", value: "850K daily" }
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bitcoin Deep Dive</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore advanced Bitcoin metrics, educational resources, and network statistics
          </p>
        </div>

        {/* Network Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Network Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bitcoinMetrics.map((metric, index) => (
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
          {/* Educational Resources */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Learn About Bitcoin</h3>
            <div className="space-y-4">
              {bitcoinEducation.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{resource.readTime}</span>
                          <Button variant="ghost" size="sm" className="text-orange-600">
                            Read More →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bitcoin Stats */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Statistics</h3>
            <Card>
              <CardHeader>
                <CardTitle>Bitcoin by the Numbers</CardTitle>
                <CardDescription>Essential Bitcoin network statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bitcoinStats.map((stat, index) => (
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

export default BitcoinMoreSection;
