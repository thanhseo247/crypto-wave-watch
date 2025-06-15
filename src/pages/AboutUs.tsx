
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      description: "Blockchain enthusiast with 10+ years in fintech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Editor",
      description: "Award-winning financial journalist and crypto expert",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Lead Analyst",
      description: "Former Wall Street analyst specializing in digital assets",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "We provide precise and verified information to help you make informed decisions."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong community of crypto enthusiasts and investors worldwide."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality content and analysis."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making cryptocurrency knowledge accessible to everyone, everywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About CryptoWave</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're passionate about making cryptocurrency accessible and understandable for everyone. 
            Our mission is to provide accurate, timely, and insightful coverage of the digital asset ecosystem.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Founded in 2020, CryptoWave emerged from a simple belief: that everyone deserves access to clear, 
              reliable information about cryptocurrencies and blockchain technology. What started as a small blog 
              has grown into one of the most trusted sources for crypto news and analysis.
            </p>
            <p className="mb-6">
              Our team combines deep technical expertise with journalistic integrity to deliver content that 
              educates, informs, and empowers our readers. We cover everything from breaking news and market 
              analysis to educational content for beginners and advanced traders alike.
            </p>
            <p>
              Today, CryptoWave serves millions of readers worldwide, helping them navigate the complex and 
              ever-evolving world of digital assets with confidence and clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardContent className="p-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
