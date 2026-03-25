export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  description: string;
  category: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
}
