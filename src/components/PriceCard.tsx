
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PriceCardProps {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap?: number;
  isLoading?: boolean;
}

const PriceCard = ({ name, symbol, price, change24h, marketCap, isLoading }: PriceCardProps) => {
  if (isLoading) {
    return (
      <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-white/20 rounded mb-2"></div>
            <div className="h-8 bg-white/20 rounded mb-2"></div>
            <div className="h-4 bg-white/20 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatPrice = (price: number) => {
    if (price >= 1) {
      return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${price.toFixed(6)}`;
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`;
    }
    return `$${marketCap.toLocaleString()}`;
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="text-sm opacity-80">{symbol.toUpperCase()}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{formatPrice(price)}</div>
            <div className={`flex items-center text-sm ${
              change24h >= 0 ? 'text-green-300' : 'text-red-300'
            }`}>
              {change24h >= 0 ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}%
            </div>
          </div>
          {marketCap && (
            <div className="text-right">
              <div className="text-sm opacity-80">Market Cap</div>
              <div className="text-lg font-semibold">{formatMarketCap(marketCap)}</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
