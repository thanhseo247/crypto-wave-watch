
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Newspaper, Building, Gavel, Rocket, Users, Globe } from "lucide-react";

const IndustryNews = () => {
  const industryNews = [
    {
      id: 25,
      title: "Major Banking Giant Launches Crypto Custody Services",
      description: "Leading financial institution announces comprehensive cryptocurrency custody and trading services for institutional clients.",
      category: "Industry News",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 26,
      title: "Blockchain Startup Raises $50M in Series B Funding",
      description: "Innovative DeFi protocol secures major funding round to expand cross-chain infrastructure and global operations.",
      category: "Industry News",
      timeAgo: "6 hours ago",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=400&fit=crop",
      readTime: "3 min read"
    },
    {
      id: 27,
      title: "Regulatory Framework Update: New Guidelines Released",
      description: "Government regulators publish updated guidelines for cryptocurrency operations and digital asset classifications.",
      category: "Industry News",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
      readTime: "6 min read"
    }
  ];

  const regulatoryNews = [
    {
      id: 28,
      title: "SEC Approves New Bitcoin ETF Applications",
      description: "Securities regulator greenlight additional Bitcoin exchange-traded fund applications from major asset managers.",
      category: "Regulatory",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 29,
      title: "European Union Finalizes MiCA Regulation Implementation",
      description: "EU completes implementation of Markets in Crypto Assets regulation across member states.",
      category: "Regulatory",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      readTime: "7 min read"
    }
  ];

  const partnershipNews = [
    {
      id: 30,
      title: "Tech Giant Partners with Blockchain Infrastructure Provider",
      description: "Major technology company announces strategic partnership to integrate blockchain solutions into cloud services.",
      category: "Partnerships",
      timeAgo: "8 hours ago",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 31,
      title: "Payment Processor Integrates Cryptocurrency Support",
      description: "Leading payment platform adds native cryptocurrency support for merchants and consumers worldwide.",
      category: "Partnerships",
      timeAgo: "2 days ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      readTime: "3 min read"
    }
  ];

  const industryStats = [
    { label: "Active Companies", value: "4,200+", change: "+180", icon: Building },
    { label: "Total Funding", value: "$12.4B", change: "+23%", icon: Rocket },
    { label: "New Partnerships", value: "89", change: "+15", icon: Users },
    { label: "Global Adoption", value: "156 Countries", change: "+8", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Industry News</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest developments, partnerships, regulatory changes, and innovations shaping the cryptocurrency industry.
            </p>
          </div>
          
          {/* Industry Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryStats.map((stat) => (
              <Card key={stat.label} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium opacity-80">{stat.label}</CardTitle>
                    <stat.icon className="h-5 w-5 opacity-70" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-green-300">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* News Categories Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Industry Updates</h2>
          <p className="text-gray-600">Browse news by category to find what interests you most</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              All News
            </TabsTrigger>
            <TabsTrigger value="regulatory" className="flex items-center gap-2">
              <Gavel className="h-4 w-4" />
              Regulatory
            </TabsTrigger>
            <TabsTrigger value="partnerships" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Partnerships
            </TabsTrigger>
            <TabsTrigger value="funding" className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Funding
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryNews.map((news) => (
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
          </TabsContent>
          
          <TabsContent value="regulatory">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regulatoryNews.map((news) => (
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
          </TabsContent>
          
          <TabsContent value="partnerships">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnershipNews.map((news) => (
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
          </TabsContent>
          
          <TabsContent value="funding">
            <div className="text-center py-12">
              <Rocket className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No funding news available</h3>
              <p className="text-gray-600">Check back later for the latest funding announcements.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Industry Spotlight Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Industry Spotlight</h2>
            <p className="text-gray-600">Featured companies and developments making waves in crypto</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Emerging DeFi Protocols",
                description: "New decentralized finance platforms gaining traction",
                count: "12 protocols",
                badge: "Hot"
              },
              {
                title: "Enterprise Blockchain Solutions",
                description: "Companies adopting blockchain for business operations",
                count: "45 implementations",
                badge: "Growing"
              },
              {
                title: "NFT Marketplace Innovation",
                description: "Next-generation platforms for digital collectibles",
                count: "8 platforms",
                badge: "Innovative"
              }
            ].map((spotlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                      {spotlight.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{spotlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{spotlight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{spotlight.count}</span>
                    <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustryNews;
