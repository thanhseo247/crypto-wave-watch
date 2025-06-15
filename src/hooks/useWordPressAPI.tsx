
import { useQuery } from '@tanstack/react-query';

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  author: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
    author?: Array<{
      name: string;
      avatar_urls: {
        24: string;
        48: string;
        96: string;
      };
    }>;
  };
}

interface WordPressAPIConfig {
  baseUrl: string;
  enabled?: boolean;
}

// Default to a demo WordPress site - user can change this
const DEFAULT_CONFIG: WordPressAPIConfig = {
  baseUrl: 'https://blog.cryptogo.news/wp-json/wp/v2',
  enabled: true
};

export const useWordPressPosts = (config: WordPressAPIConfig = DEFAULT_CONFIG) => {
  return useQuery({
    queryKey: ['wordpress-posts', config.baseUrl],
    queryFn: async (): Promise<WordPressPost[]> => {
      if (!config.enabled) {
        return [];
      }
      
      const response = await fetch(
        `${config.baseUrl}/posts?_embed&per_page=20&orderby=date&order=desc`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch WordPress posts');
      }
      
      return response.json();
    },
    enabled: config.enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  });
};

export const useWordPressPost = (slug: string, config: WordPressAPIConfig = DEFAULT_CONFIG) => {
  return useQuery({
    queryKey: ['wordpress-post', slug, config.baseUrl],
    queryFn: async (): Promise<WordPressPost | null> => {
      if (!config.enabled || !slug) {
        return null;
      }
      
      const response = await fetch(
        `${config.baseUrl}/posts?slug=${slug}&_embed`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch WordPress post: ${slug}`);
      }
      
      const posts = await response.json();
      return posts[0] || null;
    },
    enabled: config.enabled && !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

export const useWordPressCategories = (config: WordPressAPIConfig = DEFAULT_CONFIG) => {
  return useQuery({
    queryKey: ['wordpress-categories', config.baseUrl],
    queryFn: async () => {
      if (!config.enabled) {
        return [];
      }
      
      const response = await fetch(`${config.baseUrl}/categories`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch WordPress categories');
      }
      
      return response.json();
    },
    enabled: config.enabled,
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};
