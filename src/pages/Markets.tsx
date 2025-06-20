
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import MarketsMoreSection from "@/components/MarketsMoreSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";

const Markets = () => {
  const { data: marketData, isLoading } = useCryptoPrices(['bitcoin', 'ethereum', 'solana', 'cardano', 'polygon-ecosystem-token', 'chainlink', 'avalanche-2', 'dogecoin']);

  const marketNews = [
    {
      id: 16,
      title: "Crypto Market Cap Surpasses $2.5 Trillion Milestone",
      description: "The total cryptocurrency market capitalization reaches new heights as institutional adoption continues to grow.",
      category: "Markets",
      timeAgo: "30 minutes ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 17,
      title: "Trading Volume Spikes Across Major Exchanges",
      description: "24-hour trading volumes reach unprecedented levels as retail and institutional traders increase activity.",
      category: "Markets",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
      readTime: "3 min read"
    },
    {
      id: 18,
      title: "Futures Market Shows Strong Bullish Sentiment",
      description: "Cryptocurrency futures contracts indicate continued optimism among professional traders and institutions.",
      category: "Markets",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      readTime: "5 min read"
    }
  ];

  // Calculate market stats from real data
  const totalMarketCap = marketData?.reduce((sum, coin) => sum + coin.market_cap, 0) || 0;
  const bitcoinDominance = marketData?.find(coin => coin.id === 'bitcoin')?.market_cap || 0;
  const dominancePercentage = totalMarketCap > 0 ? (bitcoinDominance / totalMarketCap) * 100 : 0;

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    }
    return `$${marketCap.toLocaleString()}`;
  };

  const marketStats = [
    { 
      title: "Total Market Cap", 
      value: formatMarketCap(totalMarketCap), 
      change: "+5.2%", 
      trend: "up",
      description: "24h change"
    },
    { 
      title: "24h Volume", 
      value: "$89.3B", 
      change: "+12.8%", 
      trend: "up",
      description: "Trading volume"
    },
    { 
      title: "Bitcoin Dominance", 
      value: `${dominancePercentage.toFixed(1)}%`, 
      change: "-0.8%", 
      trend: "down",
      description: "Market share"
    },
    { 
      title: "Active Coins", 
      value: marketData?.length.toString() || "0", 
      change: "+23", 
      trend: "up",
      description: "Listed cryptocurrencies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Markets Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Crypto Markets</h1>
            <p className="text-xl">
              Real-time market data, analysis, and trading insights for the cryptocurrency ecosystem.
            </p>
          </div>
          
          {/* Market Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat) => (
              <Card key={stat.title} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="animate-pulse">
                      <div className="h-8 bg-white/20 rounded mb-2"></div>
                      <div className="h-4 bg-white/20 rounded"></div>
                    </div>
                  ) : (
                    <>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className={`flex items-center text-sm ${
                        stat.trend === 'up' ? 'text-green-300' : 'text-red-300'
                      }`}>
                        {stat.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {stat.change}
                      </div>
                      <div className="text-xs opacity-70 mt-1">{stat.description}</div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Market News Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Market Analysis & News</h2>
          <p className="text-gray-600">Expert insights and breaking news from the cryptocurrency markets</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketNews.map((news) => (
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
      </div>

      <MarketsMoreSection />

      <Footer />
    </div>
  );
};

export default Markets;
