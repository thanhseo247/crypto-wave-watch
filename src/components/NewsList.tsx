
import NewsCard from "./NewsCard";

const NewsList = () => {
  const newsData = [
    {
      id: 1,
      title: "Bitcoin Reaches New All-Time High as Institutional Adoption Surges",
      description: "Bitcoin has broken through previous resistance levels, reaching unprecedented heights as major corporations and financial institutions continue to add cryptocurrency to their balance sheets.",
      category: "Bitcoin",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=400&fit=crop",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Ethereum 2.0 Staking Rewards Hit Record Levels",
      description: "The Ethereum network's transition to proof-of-stake continues to show positive results, with staking rewards reaching new highs and network security improving significantly.",
      category: "Ethereum",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "DeFi Protocol Launches Revolutionary Yield Farming Feature",
      description: "A new decentralized finance protocol has introduced an innovative yield farming mechanism that promises to revolutionize how users earn passive income from their crypto holdings.",
      category: "DeFi",
      timeAgo: "6 hours ago",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Major Bank Announces Cryptocurrency Trading Services",
      description: "One of the world's largest banks has officially announced plans to offer cryptocurrency trading services to its millions of customers, marking a significant step in mainstream adoption.",
      category: "Markets",
      timeAgo: "8 hours ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "NFT Marketplace Sees 300% Increase in Trading Volume",
      description: "The popular NFT marketplace has experienced unprecedented growth this month, with trading volumes reaching new records as digital art and collectibles gain mainstream attention.",
      category: "NFTs",
      timeAgo: "12 hours ago",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Regulatory Update: New Crypto Guidelines Released",
      description: "Government regulators have released comprehensive guidelines for cryptocurrency operations, providing much-needed clarity for businesses and investors in the digital asset space.",
      category: "Regulation",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Crypto News</h2>
        <p className="text-gray-600">Stay updated with the latest developments in cryptocurrency and blockchain technology</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
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
  );
};

export default NewsList;
