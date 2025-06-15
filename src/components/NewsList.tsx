
import WordPressNewsCard from "./WordPressNewsCard";
import NewsCard from "./NewsCard";
import { useWordPressPosts } from "@/hooks/useWordPressAPI";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Globe } from "lucide-react";

const NewsList = () => {
  const [wordpressUrl, setWordpressUrl] = useState('');
  const [useWordPress, setUseWordPress] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const { data: wordpressPosts, isLoading: wpLoading, error: wpError } = useWordPressPosts({
    baseUrl: wordpressUrl ? `${wordpressUrl}/wp-json/wp/v2` : '',
    enabled: useWordPress && !!wordpressUrl
  });

  // Fallback static data
  const staticNewsData = [
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

  const handleWordPressSetup = () => {
    if (wordpressUrl) {
      setUseWordPress(true);
      setShowSettings(false);
    }
  };

  const handleDisableWordPress = () => {
    setUseWordPress(false);
    setWordpressUrl('');
    setShowSettings(false);
  };

  const transformWordPressPost = (post: any) => ({
    id: post.id,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    slug: post.slug,
    date: post.date,
    featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    author: post._embedded?.author?.[0]?.name,
    categories: post._embedded?.['wp:term']?.[0]?.map((cat: any) => cat.name) || []
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Crypto News</h2>
            <p className="text-gray-600">Stay updated with the latest developments in cryptocurrency and blockchain technology</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            WordPress Setup
          </Button>
        </div>

        {showSettings && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                WordPress Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WordPress Site URL
                  </label>
                  <input
                    type="url"
                    value={wordpressUrl}
                    onChange={(e) => setWordpressUrl(e.target.value)}
                    placeholder="https://yoursite.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter your WordPress site URL to fetch posts from WordPress
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleWordPressSetup} disabled={!wordpressUrl}>
                    Connect to WordPress
                  </Button>
                  {useWordPress && (
                    <Button variant="outline" onClick={handleDisableWordPress}>
                      Use Static Content
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {useWordPress && wpError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-800">
              Failed to connect to WordPress. Using static content instead.
            </p>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useWordPress && wordpressPosts && !wpError ? (
          wordpressPosts.map((post) => (
            <WordPressNewsCard
              key={post.id}
              {...transformWordPressPost(post)}
            />
          ))
        ) : (
          staticNewsData.map((news) => (
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
          ))
        )}
      </div>

      {wpLoading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
          <p className="mt-2 text-gray-600">Loading WordPress posts...</p>
        </div>
      )}
    </div>
  );
};

export default NewsList;
