
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Download, Eye, TrendingUp, BarChart3 } from "lucide-react";

const MarketReports = () => {
  const reportNews = [
    {
      id: 22,
      title: "Q4 2024 Cryptocurrency Market Review",
      description: "Comprehensive analysis of Q4 market performance, institutional adoption trends, and regulatory developments.",
      category: "Market Reports",
      timeAgo: "2 days ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      readTime: "12 min read"
    },
    {
      id: 23,
      title: "Weekly DeFi Protocol Performance Report",
      description: "Analysis of top DeFi protocols, yield farming opportunities, and total value locked (TVL) changes.",
      category: "Market Reports",
      timeAgo: "1 week ago",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 24,
      title: "Institutional Adoption Report: December 2024",
      description: "Monthly report on institutional cryptocurrency adoption, corporate treasury allocations, and ETF inflows.",
      category: "Market Reports",
      timeAgo: "1 week ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
      readTime: "10 min read"
    }
  ];

  const featuredReports = [
    {
      title: "Annual Crypto Market Outlook 2025",
      description: "Our comprehensive forecast for the cryptocurrency market in 2025",
      downloadCount: "2.3K",
      pages: 47,
      type: "PDF",
      isPremium: true
    },
    {
      title: "Bitcoin Halving Impact Analysis",
      description: "Historical analysis and future projections for Bitcoin halving events",
      downloadCount: "1.8K",
      pages: 32,
      type: "PDF",
      isPremium: false
    },
    {
      title: "Altcoin Season Indicator Report",
      description: "Data-driven analysis of altcoin market cycles and timing patterns",
      downloadCount: "1.5K",
      pages: 28,
      type: "PDF",
      isPremium: true
    }
  ];

  const marketMetrics = [
    { metric: "Market Cap Change", value: "+15.2%", period: "This Month", trend: "up" },
    { metric: "Active Addresses", value: "2.1M", period: "Daily Average", trend: "up" },
    { metric: "Trading Volume", value: "$89.4B", period: "24h Volume", trend: "up" },
    { metric: "New Projects", value: "156", period: "This Quarter", trend: "up" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Market Reports</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive market analysis, research reports, and data-driven insights to help you understand crypto market trends.
            </p>
          </div>
          
          {/* Market Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketMetrics.map((metric) => (
              <Card key={metric.metric} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-80">{metric.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="flex items-center text-sm opacity-70">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {metric.period}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Reports Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Reports</h2>
          <p className="text-gray-600">Our most comprehensive and popular market research reports</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredReports.map((report, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <FileText className="h-8 w-8 text-blue-600" />
                  {report.isPremium && (
                    <Badge className="bg-gold-100 text-gold-800 border-gold-200">Premium</Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{report.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{report.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {report.downloadCount} downloads
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    {report.pages} pages
                  </div>
                </div>
                <Button className="w-full" variant={report.isPremium ? "default" : "outline"}>
                  <Download className="h-4 w-4 mr-2" />
                  {report.isPremium ? "Get Premium Access" : "Download Free"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Report Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Weekly Reports", count: 52, icon: Calendar },
              { name: "Monthly Analysis", count: 24, icon: BarChart3 },
              { name: "Quarterly Reviews", count: 8, icon: TrendingUp },
              { name: "Annual Outlooks", count: 3, icon: FileText }
            ].map((category) => (
              <Card key={category.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <category.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-1">{category.name}</h4>
                  <p className="text-gray-600 text-sm">{category.count} reports available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Reports Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Market Reports</h2>
            <p className="text-gray-600">Recent analysis and insights from our research team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportNews.map((news) => (
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Reports
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MarketReports;
