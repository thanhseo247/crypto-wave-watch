import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import BitcoinMoreSection from "@/components/BitcoinMoreSection";
import { TrendingUp, TrendingDown } from "lucide-react";

const Bitcoin = () => {
  const bitcoinNews = [
    {
      id: 7,
      title: "Bitcoin Mining Difficulty Reaches All-Time High",
      description: "The Bitcoin network's mining difficulty has reached a new record high, indicating increased security and miner participation in the network.",
      category: "Bitcoin",
      timeAgo: "1 hour ago",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 8,
      title: "Lightning Network Adoption Surges Among Merchants",
      description: "More merchants are integrating Bitcoin's Lightning Network for instant, low-fee payments, driving mainstream adoption.",
      category: "Bitcoin",
      timeAgo: "3 hours ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      readTime: "3 min read"
    },
    {
      id: 9,
      title: "Bitcoin ETF Sees Record Inflows This Week",
      description: "Institutional investors continue to pour money into Bitcoin ETFs, with record weekly inflows signaling strong institutional interest.",
      category: "Bitcoin",
      timeAgo: "5 hours ago",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Bitcoin Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Bitcoin News</h1>
              <p className="text-xl mb-6">
                Stay updated with the latest Bitcoin developments, price movements, and institutional adoption news.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Bitcoin Price</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">$67,845</div>
                  <div className="flex items-center text-green-300">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +5.2% (24h)
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-80">Market Cap</div>
                  <div className="text-lg font-semibold">$1.34T</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bitcoin News Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Bitcoin News</h2>
          <p className="text-gray-600">Comprehensive coverage of Bitcoin developments and market insights</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bitcoinNews.map((news) => (
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

      <BitcoinMoreSection />

      <Footer />
    </div>
  );
};

export default Bitcoin;
