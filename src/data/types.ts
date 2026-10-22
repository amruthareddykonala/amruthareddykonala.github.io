export interface Book {
  id: string;
  title: string;
  subtitle: string;
  coAuthor?: string;
  year: string;
  pages: number;
  words?: string;
  edition: string;
  summary: string;
  description: string[];
  keyHighlights: string[];
  sampleQuote: string;
  sampleExcerpt: string;
  category: string;
  badge?: string;
  coverGradient: string;
  accentColor: string;
}

export interface Mandate {
  id: string;
  client: string;
  location: string;
  isConfidential: boolean;
  category: 'Royal & Heritage' | 'Real Estate & Estates' | 'Political & Public Policy' | 'Enterprise & Private Principals' | 'Ventures & Original IP' | 'Creative & Systems';
  year: string;
  contribution: string;
  outcome: string;
  metrics?: { value?: string; label: string }[];
  disciplinesUsed: string[];
  fullNarrative?: string;
  quote?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  publishedDate: string;
  readingTime: string;
  category: string;
  summary: string;
  content: string[];
  featuredQuote: string;
  keyTakeaways: string[];
  author: { name: string; role: string; title?: string };
}
