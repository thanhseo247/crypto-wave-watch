
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";

interface WordPressNewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage?: string;
  author?: string;
  categories?: string[];
  readTime?: string;
}

const WordPressNewsCard = ({ 
  id, 
  title, 
  excerpt, 
  slug, 
  date, 
  featuredImage, 
  author, 
  categories = [],
  readTime = "5 min read"
}: WordPressNewsCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${slug}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleClick}>
      {featuredImage && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={featuredImage} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          {categories.length > 0 && (
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              {categories[0]}
            </Badge>
          )}
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-3">
          {stripHtml(excerpt)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(date)}</span>
            </div>
            {author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
            )}
          </div>
          <span className="text-orange-600 font-medium hover:underline">
            Read more →
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WordPressNewsCard;
