
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bitcoin, Zap, BarChart3, Newspaper } from "lucide-react";

const CategoriesSection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Bitcoin",
      description: "Latest Bitcoin news, price analysis, and market updates.",
      icon: Bitcoin,
      color: "bg-orange-100 text-orange-600",
      link: "/bitcoin"
    },
    {
      title: "Ethereum",
      description: "Ethereum ecosystem news, DeFi updates, and smart contract innovations.",
      icon: Zap,
      color: "bg-blue-100 text-blue-600", 
      link: "/ethereum"
    },
    {
      title: "Altcoins",
      description: "Discover emerging cryptocurrencies and alternative digital assets.",
      icon: BarChart3,
      color: "bg-purple-100 text-purple-600",
      link: "/altcoins"
    },
    {
      title: "Industry News",
      description: "Breaking news and developments from the cryptocurrency industry.",
      icon: Newspaper,
      color: "bg-green-100 text-green-600",
      link: "/industry-news"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Categories</h2>
        <p className="text-gray-600">Dive deep into specific areas of cryptocurrency</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.title} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(category.link)}>
            <CardHeader className="text-center">
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                <category.icon className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl">{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="w-full">
                Explore {category.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
