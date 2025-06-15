import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import EthereumMoreSection from "@/components/EthereumMoreSection";
import { TrendingUp } from "lucide-react";

const Ethereum = () => {
  const ethereumNews = [
    {
      id: 10,
      title: "Ethereum 2.0 Staking Rewards Hit New Records",
      description: "Ethereum staking yields continue to attract institutional investors as the network's security and decentralization improve.",
      category: "Ethereum",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 11,
      title: "Layer 2 Solutions Show Massive Growth on Ethereum",
      description: "Ethereum Layer 2 networks are processing more transactions than ever, offering cheaper and faster alternatives to mainnet.",
      category: "Ethereum",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 12,
      title: "Smart Contract Upgrades Enhance Ethereum Security",
      description: "New smart contract standards and security improvements are making Ethereum more robust for enterprise applications.",
      category: "Ethereum",
      timeAgo: "6 hours ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      readTime: "3 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Ethereum Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Ethereum News</h1>
              <p className="text-xl mb-6">
                Discover the latest developments in Ethereum ecosystem, smart contracts, and DeFi innovations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Ethereum Price</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">$3,245</div>
                  <div className="flex items-center text-green-300">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +3.8% (24h)
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-80">Market Cap</div>
                  <div className="text-lg font-semibold">$390B</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ethereum News Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Ethereum News</h2>
          <p className="text-gray-600">Stay informed about Ethereum's evolution and ecosystem growth</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ethereumNews.map((news) => (
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

      <EthereumMoreSection />

      <Footer />
    </div>
  );
};

export default Ethereum;
