import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import AltcoinsMoreSection from "@/components/AltcoinsMoreSection";
import { Badge } from "@/components/ui/badge";

const Altcoins = () => {
  const altcoinNews = [
    {
      id: 13,
      title: "Solana Network Sees Record Transaction Volumes",
      description: "Solana blockchain processes over 3,000 TPS as DeFi and NFT activity surges on the network.",
      category: "Solana",
      timeAgo: "1 hour ago",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 14,
      title: "Cardano Smart Contracts Platform Gains Traction",
      description: "Cardano's Plutus smart contract platform attracts more developers with its formal verification approach.",
      category: "Cardano",
      timeAgo: "3 hours ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 15,
      title: "Polygon Announces Major Partnership with Tech Giant",
      description: "Polygon's Layer 2 scaling solution partners with major technology company to bring blockchain to mainstream applications.",
      category: "Polygon",
      timeAgo: "5 hours ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      readTime: "3 min read"
    }
  ];

  const topAltcoins = [
    { name: "Solana", symbol: "SOL", price: "$145.67", change: "+8.2%" },
    { name: "Cardano", symbol: "ADA", price: "$0.48", change: "+4.1%" },
    { name: "Polygon", symbol: "MATIC", price: "$0.92", change: "+6.7%" },
    { name: "Chainlink", symbol: "LINK", price: "$14.32", change: "+2.8%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Altcoins Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Altcoin News</h1>
              <p className="text-xl mb-6">
                Explore the diverse world of alternative cryptocurrencies and emerging blockchain projects.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Top Altcoins</h3>
              <div className="space-y-3">
                {topAltcoins.map((coin) => (
                  <div key={coin.symbol} className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{coin.name}</div>
                      <div className="text-sm opacity-80">{coin.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{coin.price}</div>
                      <div className="text-sm text-green-300">{coin.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Altcoin News Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Altcoin News</h2>
          <p className="text-gray-600">Discover emerging cryptocurrencies and blockchain innovations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {altcoinNews.map((news) => (
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

      <AltcoinsMoreSection />

      <Footer />
    </div>
  );
};

export default Altcoins;
