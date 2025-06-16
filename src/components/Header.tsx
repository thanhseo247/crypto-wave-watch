
import { Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Bitcoin className="h-8 w-8 text-orange-500" />
            <p className="text-2xl font-bold text-gray-900">CryptoGo</p>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-orange-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/bitcoin" 
              className={`font-medium transition-colors ${
                isActive('/bitcoin') 
                  ? 'text-orange-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Bitcoin
            </Link>
            <Link 
              to="/ethereum" 
              className={`font-medium transition-colors ${
                isActive('/ethereum') 
                  ? 'text-orange-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Ethereum
            </Link>
            <Link 
              to="/altcoins" 
              className={`font-medium transition-colors ${
                isActive('/altcoins') 
                  ? 'text-orange-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Altcoins
            </Link>
            <Link 
              to="/markets" 
              className={`font-medium transition-colors ${
                isActive('/markets') 
                  ? 'text-orange-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Markets
            </Link>
          </nav>
          
          <Button variant="outline">Subscribe</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
