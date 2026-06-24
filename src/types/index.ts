export interface Product {
  id: string
  title: string
  description: string
  icon: string
  tag: string
  price: string
  category: 'coffee-beans' | 'equipment'
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  emoji: string
  bgColor: string
  tag: string
  date: string
}

export interface BeanItem {
  id: string
  title: string
  description: string
  icon: string
  tag: string
  category: 'origin' | 'processing' | 'variety' | 'roasting'
}

export interface BrewItem {
  id: string
  title: string
  description: string
  icon: string
  tag: string
  category: 'extraction' | 'principles' | 'products' | 'sensory'
}
