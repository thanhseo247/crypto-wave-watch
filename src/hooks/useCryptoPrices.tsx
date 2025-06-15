
import { useQuery } from '@tanstack/react-query';

interface CoinPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  market_cap_rank: number;
}

export const useCryptoPrices = (coinIds: string[] = ['bitcoin', 'ethereum']) => {
  return useQuery({
    queryKey: ['crypto-prices', coinIds],
    queryFn: async (): Promise<CoinPrice[]> => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(',')}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch crypto prices');
      }
      
      return response.json();
    },
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 20000, // Consider data stale after 20 seconds
  });
};

export const useSpecificCoinPrice = (coinId: string) => {
  return useQuery({
    queryKey: ['crypto-price', coinId],
    queryFn: async (): Promise<CoinPrice> => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=24h`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${coinId} price`);
      }
      
      const data = await response.json();
      return data[0];
    },
    refetchInterval: 30000,
    staleTime: 20000,
  });
};
