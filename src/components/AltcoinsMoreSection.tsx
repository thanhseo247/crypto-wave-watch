
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star, Rocket, Target } from "lucide-react";

const AltcoinsMoreSection = () => {
  const altcoinCategories = [
    { name: "DeFi Tokens", count: 247, growth: "+15.2%", color: "bg-green-100 text-green-800" },
    { name: "Layer 1 Blockchains", count: 89, growth: "+8.7%", color: "bg-blue-100 text-blue-800" },
    { name: "Gaming Tokens", count: 156, growth: "+22.4%", color: "bg-purple-100 text-purple-800" },
    { name: "Meme Coins", count: 1247, growth: "+45.8%", color: "bg-orange-100 text-orange-800" }
  ];

  const topPerformers = [
    { name: "Solana", symbol: "SOL", price: "$145.67", change: "+12.4%", category: "Layer 1" },
    { name: "Chainlink", symbol: "LINK", price: "$14.32", change: "+8.9%", category: "Oracle" },
    { name: "Uniswap", symbol: "UNI", price: "$8.45", change: "+15.2%", category: "DeFi" },
    { name: "Polygon", symbol: "MATIC", price: "$0.92", change: "+6.7%", category: "Scaling" }
  ];

  const altcoinInsights = [
    {
      title: "Altcoin Fundamentals",
      description: "Understanding the basics of alternative cryptocurrencies and their use cases.",
      icon: <Star className="h-6 w-6 text-purple-500" />,
      readTime: "7 min"
    },
    {
      title: "Emerging Blockchains",
      description: "Explore new blockchain platforms challenging Ethereum's dominance.",
      icon: <Rocket className="h-6 w-6 text-purple-500" />,
      readTime: "9 min"
    },
    {
      title: "Altcoin Investment",
      description: "Strategies for evaluating and investing in alternative cryptocurrencies.",
      icon: <Target className="h-6 w-6 text-purple-500" />,
      readTime: "12 min"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Altcoin Universe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the diverse world of alternative cryptocurrencies and emerging blockchain projects
          </p>
        </div>

        {/* Altcoin Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Altcoin Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {altcoinCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{category.count}</div>
                  <Badge className={category.color}>
                    {category.growth}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Top Performers */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Performers (24h)</h3>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Best Performing Altcoins
                </CardTitle>
                <CardDescription>Highest gaining altcoins in the last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((coin, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold text-purple-600">#{index + 1}</span>
                        <div>
                          <div className="font-medium text-gray-900">{coin.name}</div>
                          <div className="text-sm text-gray-500">{coin.symbol} • {coin.category}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{coin.price}</div>
                        <div className="text-sm text-green-600">{coin.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Altcoin Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Learn About Altcoins</h3>
            <div className="space-y-4">
              {altcoinInsights.map((insight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        {insight.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{insight.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{insight.readTime}</span>
                          <Button variant="ghost" size="sm" className="text-purple-600">
                            Learn More →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltcoinsMoreSection;
