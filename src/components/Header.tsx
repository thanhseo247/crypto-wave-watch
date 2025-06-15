
import { Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bitcoin className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-900">CryptoWave</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Bitcoin</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Ethereum</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Altcoins</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Markets</a>
          </nav>
          
          <Button variant="outline">Subscribe</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
