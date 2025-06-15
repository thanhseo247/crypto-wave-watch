
import NewsCard from "./NewsCard";

interface RelatedArticlesProps {
  currentPostId?: string;
}

const RelatedArticles = ({ currentPostId }: RelatedArticlesProps) => {
  const relatedArticles = [
    {
      id: 2,
      title: "Ethereum 2.0 Staking Rewards Hit Record Levels",
      description: "The Ethereum network's transition to proof-of-stake continues to show positive results, with staking rewards reaching new highs.",
      category: "Ethereum",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "DeFi Protocol Launches Revolutionary Yield Farming Feature",
      description: "A new decentralized finance protocol has introduced an innovative yield farming mechanism.",
      category: "DeFi",
      timeAgo: "6 hours ago",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Major Bank Announces Cryptocurrency Trading Services",
      description: "One of the world's largest banks has officially announced plans to offer cryptocurrency trading services.",
      category: "Markets",
      timeAgo: "8 hours ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      readTime: "3 min read"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Articles</h2>
          <p className="text-gray-600">More stories you might find interesting</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <NewsCard
              key={article.id}
              title={article.title}
              description={article.description}
              category={article.category}
              timeAgo={article.timeAgo}
              image={article.image}
              readTime={article.readTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
