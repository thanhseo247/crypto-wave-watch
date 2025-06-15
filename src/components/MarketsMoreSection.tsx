
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, BarChart, PieChart, Activity, DollarSign } from "lucide-react";

const MarketsMoreSection = () => {
  const marketIndicators = [
    { label: "Fear & Greed Index", value: "67", status: "Greed", color: "bg-yellow-100 text-yellow-800" },
    { label: "Volatility Index", value: "42.5", status: "Moderate", color: "bg-blue-100 text-blue-800" },
    { label: "RSI (14d)", value: "58.2", status: "Neutral", color: "bg-gray-100 text-gray-800" },
    { label: "MVRV Ratio", value: "1.85", status: "Bullish", color: "bg-green-100 text-green-800" }
  ];

  const tradingPairs = [
    { pair: "BTC/USDT", volume: "$2.1B", change: "+2.3%", trending: true },
    { pair: "ETH/USDT", volume: "$1.8B", change: "+1.9%", trending: true },
    { pair: "BNB/USDT", volume: "$456M", change: "-0.8%", trending: false },
    { pair: "SOL/USDT", volume: "$389M", change: "+5.2%", trending: true }
  ];

  const marketEducation = [
    {
      title: "Technical Analysis",
      description: "Learn chart patterns, indicators, and trading strategies for crypto markets.",
      icon: <BarChart className="h-6 w-6 text-green-500" />,
      readTime: "15 min"
    },
    {
      title: "Portfolio Management",
      description: "Discover risk management techniques and diversification strategies.",
      icon: <PieChart className="h-6 w-6 text-green-500" />,
      readTime: "12 min"
    },
    {
      title: "Market Psychology",
      description: "Understanding market cycles, sentiment, and behavioral patterns.",
      icon: <Activity className="h-6 w-6 text-green-500" />,
      readTime: "10 min"
    }
  ];

  const exchangeData = [
    { exchange: "Binance", volume: "$14.2B", marketShare: "42.3%" },
    { exchange: "Coinbase", volume: "$3.8B", marketShare: "11.4%" },
    { exchange: "Kraken", volume: "$2.1B", marketShare: "6.3%" },
    { exchange: "KuCoin", volume: "$1.9B", marketShare: "5.7%" }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Intelligence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced market analysis, trading insights, and comprehensive crypto market data
          </p>
        </div>

        {/* Market Indicators */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketIndicators.map((indicator, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{indicator.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{indicator.value}</div>
                  <Badge className={indicator.color}>
                    {indicator.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Top Trading Pairs */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Trading Pairs</h3>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  Highest Volume Pairs
                </CardTitle>
                <CardDescription>Most traded cryptocurrency pairs today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tradingPairs.map((pair, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold text-green-600">#{index + 1}</span>
                        <div>
                          <div className="font-medium text-gray-900">{pair.pair}</div>
                          <div className="text-sm text-gray-500">24h Volume: {pair.volume}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${pair.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {pair.change}
                        </span>
                        {pair.trending ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trading Education</h3>
            <div className="space-y-4">
              {marketEducation.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        {course.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{course.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{course.readTime}</span>
                          <Button variant="ghost" size="sm" className="text-green-600">
                            Start Learning →
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

        {/* Exchange Data */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Exchange Rankings</h3>
          <Card>
            <CardHeader>
              <CardTitle>Top Exchanges by Volume</CardTitle>
              <CardDescription>Leading cryptocurrency exchanges by 24h trading volume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {exchangeData.map((exchange, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                    <div className="text-lg font-semibold text-gray-900 mb-1">{exchange.exchange}</div>
                    <div className="text-sm text-gray-600 mb-2">{exchange.volume}</div>
                    <Badge variant="secondary">{exchange.marketShare}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketsMoreSection;
