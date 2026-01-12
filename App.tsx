import React, { useState, useMemo, useEffect } from 'react';
import { 
  LayoutGrid, 
  PackageOpen, 
  X, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Gamepad2,
  Home as HomeIcon, 
  PawPrint,
  Utensils,
  Monitor,
  MoreHorizontal,
  Flame,
  Music,
  ShoppingBag,
  Info,
  HelpCircle,
  MapPin,
  FileText,
  Star,
  CheckCircle2,
  ArrowLeft,
  Share2,
  ArrowRight,
  Search,
  Clock,
  Facebook,
  ExternalLink,
  DollarSign,
  TrendingUp,
  History
} from 'lucide-react';
import { Product, Category } from './types';
import { INITIAL_PRODUCTS, CATEGORIES, WHATSAPP_NUMBER, NEIGHBORHOOD, FB_MARKETPLACE_URL } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

type View = 'catalog' | 'about' | 'how' | 'product-landing' | 'sold-report';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Brinquedos": <Gamepad2 size={16} />,
  "Decoração": <HomeIcon size={16} />,
  "Pets": <PawPrint size={16} />,
  "Cozinha": <Utensils size={16} />,
  "Informática": <Monitor size={16} />,
  "Instrumentos Musicais": <Music size={16} />
};

const CATEGORY_COLORS: Record<string, string> = {
  "Brinquedos": "bg-emerald-700",
  "Decoração": "bg-slate-800",
  "Pets": "bg-emerald-600",
  "Cozinha": "bg-slate-700",
  "Informática": "bg-emerald-800",
  "Instrumentos Musicais": "bg-emerald-900"
};

const normalizeText = (text: string) => 
  text.toString().toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const slugify = (text: string) => normalizeText(text)
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/, '');

const SLUG_TO_CATEGORY = CATEGORIES.reduce((acc, cat) => {
  acc[slugify(cat)] = cat;
  return acc;
}, {} as Record<string, Category>);

const shuffle = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('catalog');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [randomSeed] = useState(() => Math.random());

  const updateMetaTags = (title: string, desc: string, image: string) => {
    document.title = title;
    const tags = {
      'og:title': title,
      'og:description': desc,
      'og:image': image,
      'twitter:title': title,
      'twitter:description': desc,
      'twitter:image': image
    };
    Object.entries(tags).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`) || 
                    document.querySelector(`meta[name="${property}"]`);
      if (element) element.setAttribute('content', content);
    });
  };

  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const parts = path.split('/').filter(Boolean);
      
      // Rota Oculta: /vendidos
      if (path === '/vendidos' || path === '/vendidos/') {
        setCurrentView('sold-report');
        updateMetaTags("Relatório de Vendas | Desapegos Londrina", "Área Privada", "");
        return;
      }

      if (parts.length >= 2) {
        const productId = parts[parts.length - 1];
