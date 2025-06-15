
import { Bitcoin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bitcoin className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold">CryptoWave</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted source for cryptocurrency news, market analysis, and blockchain insights. 
              Stay informed with the latest developments in the digital asset space.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/bitcoin" className="hover:text-white">Bitcoin</Link></li>
              <li><Link to="/ethereum" className="hover:text-white">Ethereum</Link></li>
              <li><Link to="/altcoins" className="hover:text-white">Altcoins</Link></li>
              <li><Link to="/markets" className="hover:text-white">Markets</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CryptoWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
