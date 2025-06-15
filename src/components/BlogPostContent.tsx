
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Share2, BookmarkPlus, Heart } from "lucide-react";
import { useState } from "react";

interface BlogPostContentProps {
  postId?: string;
}

const BlogPostContent = ({ postId }: BlogPostContentProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(124);
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - in a real app, this would be fetched based on postId
  const blogPost = {
    id: postId || "1",
    title: "Bitcoin Reaches New All-Time High as Institutional Adoption Surges",
    content: `
      <p>Bitcoin has broken through previous resistance levels, reaching unprecedented heights as major corporations and financial institutions continue to add cryptocurrency to their balance sheets. This milestone represents a significant shift in how traditional finance views digital assets.</p>
      
      <h2>Market Analysis</h2>
      <p>The current surge can be attributed to several key factors including increased institutional adoption, regulatory clarity in major markets, and growing acceptance of Bitcoin as a store of value. Major companies like Tesla, MicroStrategy, and Square have led the charge in corporate Bitcoin adoption.</p>
      
      <h2>Technical Indicators</h2>
      <p>From a technical perspective, Bitcoin has successfully broken through the $65,000 resistance level with strong volume support. The RSI indicates the asset is approaching overbought territory, but historical data suggests that Bitcoin can remain in this zone for extended periods during bull runs.</p>
      
      <blockquote>"This breakthrough represents more than just a price milestone - it's validation of Bitcoin's role as digital gold in modern portfolios." - Sarah Chen, Chief Investment Officer at Digital Assets Fund</blockquote>
      
      <h2>What's Next?</h2>
      <p>Analysts are watching several key levels as Bitcoin continues its upward trajectory. The next major resistance level sits at $70,000, which many believe could be reached within the coming weeks if current momentum continues.</p>
      
      <p>However, investors should remain cautious as cryptocurrency markets are known for their volatility. Risk management and portfolio diversification remain crucial strategies in this evolving market landscape.</p>
    `,
    author: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bio: "Senior Crypto Analyst with 8+ years in blockchain technology and digital asset markets.",
      twitter: "@alexthompson"
    },
    publishDate: "2024-01-15",
    readTime: "6 min read",
    category: "Bitcoin",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&h=600&fit=crop",
    tags: ["Bitcoin", "Institutional Adoption", "Market Analysis", "Cryptocurrency"]
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-4">
          {blogPost.category}
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {blogPost.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(blogPost.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{blogPost.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>By {blogPost.author.name}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLike}
            className={isLiked ? "text-red-600 border-red-200" : ""}
          >
            <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-red-600" : ""}`} />
            {likes}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleBookmark}
            className={isBookmarked ? "text-blue-600 border-blue-200" : ""}
          >
            <BookmarkPlus className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-blue-600" : ""}`} />
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Featured Image */}
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      </div>

      {/* Tags */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {blogPost.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-gray-200">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Author Info */}
      <div className="border-t pt-8">
        <div className="flex items-start gap-4">
          <img
            src={blogPost.author.avatar}
            alt={blogPost.author.name}
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {blogPost.author.name}
            </h3>
            <p className="text-gray-600 mb-3">{blogPost.author.bio}</p>
            <Button variant="outline" size="sm">
              Follow {blogPost.author.twitter}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;
