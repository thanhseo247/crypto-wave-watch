
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, TrendingUp, Bell, Users } from "lucide-react";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const features = [
    {
      title: "Daily Market Updates",
      description: "Get the latest market movements delivered to your inbox",
      icon: TrendingUp
    },
    {
      title: "Breaking News Alerts",
      description: "Be the first to know about major cryptocurrency developments",
      icon: Bell
    },
    {
      title: "Expert Analysis",
      description: "Receive insights from our team of cryptocurrency experts",
      icon: Users
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="h-16 w-16 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of crypto enthusiasts who get our daily newsletter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Subscribe Now</CardTitle>
              <CardDescription>Get crypto news delivered to your inbox</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Subscribe to Newsletter
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
