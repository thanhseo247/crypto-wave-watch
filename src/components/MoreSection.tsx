
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Eye, Clock } from "lucide-react";

const MoreSection = () => {
  const marketStats = [
    { label: "Total Market Cap", value: "$2.1T", change: "+2.5%", trending: true },
    { label: "24h Volume", value: "$95.4B", change: "-1.2%", trending: false },
    { label: "Active Cryptocurrencies", value: "13,456", change: "+0.8%", trending: true },
    { label: "Market Dominance", value: "BTC 52.3%", change: "+0.3%", trending: true }
  ];

  const trendingTopics = [
    { topic: "Bitcoin ETF", posts: "2.3k", engagement: "high" },
    { topic: "Ethereum Upgrade", posts: "1.8k", engagement: "medium" },
    { topic: "DeFi Yields", posts: "1.2k", engagement: "high" },
    { topic: "NFT Markets", posts: "892", engagement: "low" },
    { topic: "Stablecoin News", posts: "756", engagement: "medium" }
  ];

  const featuredCategories = [
    {
      title: "Technical Analysis",
      description: "In-depth chart analysis and trading insights from crypto experts.",
      articles: 47,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
    },
    {
      title: "Market Reports",
      description: "Weekly and monthly market reports with comprehensive data analysis.",
      articles: 23,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop"
    },
    {
      title: "Industry News",
      description: "Latest developments from crypto companies and blockchain startups.",
      articles: 89,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">More Crypto Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive deeper into the world of cryptocurrency with our comprehensive market data, 
            trending topics, and specialized content categories.
          </p>
        </div>

        {/* Market Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {stat.label}
                    {stat.trending && <TrendingUp className="h-4 w-4 text-green-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <Badge 
                    variant="secondary" 
                    className={stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                  >
                    {stat.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Trending Topics */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trending Topics</h3>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-500" />
                  What's Hot Right Now
                </CardTitle>
                <CardDescription>Most discussed topics in the crypto community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendingTopics.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold text-gray-400">#{index + 1}</span>
                        <div>
                          <div className="font-medium text-gray-900">#{item.topic}</div>
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {item.posts} posts
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary"
                        className={
                          item.engagement === 'high' ? 'bg-green-100 text-green-800' :
                          item.engagement === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }
                      >
                        {item.engagement}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Stats</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">125K+</div>
                      <div className="text-gray-600">Community Members</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">24/7</div>
                      <div className="text-gray-600">Market Coverage</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">99.9%</div>
                      <div className="text-gray-600">Uptime Reliability</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-orange-600 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                    <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                      Explore →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreSection;
