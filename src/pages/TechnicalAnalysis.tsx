
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, BarChart3, LineChart, PieChart, Activity } from "lucide-react";

const TechnicalAnalysis = () => {
  const analysisNews = [
    {
      id: 19,
      title: "Bitcoin Technical Indicators Signal Potential Breakout",
      description: "RSI and MACD indicators suggest Bitcoin may be poised for a significant price movement in the coming weeks.",
      category: "Technical Analysis",
      timeAgo: "1 hour ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 20,
      title: "Ethereum Support and Resistance Levels Analysis",
      description: "Key technical levels to watch as Ethereum approaches critical price zones with high trading volume.",
      category: "Technical Analysis",
      timeAgo: "3 hours ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 21,
      title: "Altcoin Season Patterns: What Charts Are Telling Us",
      description: "Technical analysis reveals potential altcoin season patterns based on historical price movements and market cycles.",
      category: "Technical Analysis",
      timeAgo: "5 hours ago",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=400&fit=crop",
      readTime: "7 min read"
    }
  ];

  const technicalIndicators = [
    { name: "RSI (14)", value: "67.3", status: "Bullish", color: "text-green-600" },
    { name: "MACD", value: "0.045", status: "Buy Signal", color: "text-green-600" },
    { name: "Moving Average (50)", value: "$42,150", status: "Above Price", color: "text-orange-600" },
    { name: "Bollinger Bands", value: "Expanding", status: "Volatility", color: "text-blue-600" },
    { name: "Volume", value: "High", status: "Confirmed", color: "text-green-600" },
    { name: "Stochastic", value: "78.2", status: "Overbought", color: "text-red-600" }
  ];

  const chartPatterns = [
    {
      pattern: "Cup and Handle",
      asset: "Bitcoin",
      timeframe: "4H",
      confidence: "High",
      target: "$48,000",
      icon: BarChart3
    },
    {
      pattern: "Bull Flag",
      asset: "Ethereum",
      timeframe: "1D",
      confidence: "Medium",
      target: "$2,800",
      icon: LineChart
    },
    {
      pattern: "Ascending Triangle",
      asset: "BNB",
      timeframe: "2H",
      confidence: "High",
      target: "$320",
      icon: PieChart
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Technical Analysis</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional chart analysis, trading patterns, and technical indicators to help you make informed trading decisions.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Activity className="h-8 w-8 mx-auto mb-2 text-green-300" />
                <div className="text-2xl font-bold">47</div>
                <div className="text-sm opacity-80">Active Signals</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm opacity-80">Chart Patterns</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-orange-300" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Technical Indicators Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Technical Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalIndicators.map((indicator) => (
            <Card key={indicator.name} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{indicator.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">{indicator.value}</div>
                  <Badge variant="secondary" className={`${indicator.color} bg-opacity-10`}>
                    {indicator.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart Patterns Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Active Chart Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {chartPatterns.map((pattern, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{pattern.pattern}</CardTitle>
                  <pattern.icon className="h-6 w-6 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Asset:</span>
                    <span className="font-medium">{pattern.asset}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeframe:</span>
                    <span className="font-medium">{pattern.timeframe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Target:</span>
                    <span className="font-medium text-green-600">{pattern.target}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Confidence:</span>
                    <Badge 
                      variant="secondary" 
                      className={pattern.confidence === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {pattern.confidence}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Analysis Articles Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Technical Analysis</h2>
            <p className="text-gray-600">In-depth chart analysis from our expert trading team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analysisNews.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                description={news.description}
                category={news.category}
                timeAgo={news.timeAgo}
                image={news.image}
                readTime={news.readTime}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              View All Analysis
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechnicalAnalysis;
