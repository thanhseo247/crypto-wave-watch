
import { Bitcoin } from "lucide-react";

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
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Bitcoin</a></li>
              <li><a href="#" className="hover:text-white">Ethereum</a></li>
              <li><a href="#" className="hover:text-white">DeFi</a></li>
              <li><a href="#" className="hover:text-white">NFTs</a></li>
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
