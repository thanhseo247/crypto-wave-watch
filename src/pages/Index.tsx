
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsList from "@/components/NewsList";
import MoreSection from "@/components/MoreSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <NewsList />
      <MoreSection />
      <Footer />
    </div>
  );
};

export default Index;
