
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Users, ChartBar } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Beginner's Guide to Crypto",
      description: "Start your cryptocurrency journey with our comprehensive beginner's guide.",
      icon: BookOpen,
      link: "/technical-analysis"
    },
    {
      title: "Technical Analysis Tools",
      description: "Learn to read charts and make informed trading decisions.",
      icon: TrendingUp,
      link: "/technical-analysis"
    },
    {
      title: "Community Forum",
      description: "Join discussions with fellow crypto enthusiasts and experts.",
      icon: Users,
      link: "/about"
    },
    {
      title: "Market Reports",
      description: "Access detailed market analysis and research reports.",
      icon: ChartBar,
      link: "/market-reports"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Resources</h2>
        <p className="text-gray-600">Everything you need to succeed in cryptocurrency</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => (
          <Card key={resource.title} className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <resource.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href={resource.link}>Learn More</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
