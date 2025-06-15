
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  timeAgo: string;
  image: string;
  readTime: string;
  id?: number;
}

const NewsCard = ({ title, description, category, timeAgo, image, readTime, id = 1 }: NewsCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleClick}>
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            {category}
          </Badge>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{timeAgo}</span>
          <span className="text-sm text-orange-600 font-medium hover:underline">
            Read more →
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
