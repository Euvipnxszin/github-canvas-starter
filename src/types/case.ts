
export interface CaseItem {
  id: number;
  title: string;
  category: string;
  image: string;
  results: {
    revenue: string;
    leads: string;
    roi: string;
  };
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  timeframe: string;
  testimonial: string;
}
