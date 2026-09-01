'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  Menu,
  Search,
  ShoppingBag,
  Star,
  User,
  X,
  Sparkles,
  Sun,
  Gem,
} from 'lucide-react';

const navLinks = [
  { name: 'Collections', href: '#collections' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Shop', href: '#shop' },
  { name: 'Contact', href: '#contact' },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Mediterranean Sun Pendant',
    price: 'From $185',
    image: '/images/product-1.png',
  },
  {
    id: 2,
    name: 'Santorini Wave Ring',
    price: 'From $145',
    image: '/images/product-2.png',
  },
  {
    id: 3,
    name: 'Golden Hour Earrings',
    price: 'From $165',
    image: '/images/product-3.png',
  },
];

const allProducts = [
  { id: 1, name: 'Mediterranean Sun Pendant', price: 'From $185', image: '/images/product-1.png', category: 'Necklaces' },
  { id: 2, name: 'Santorini Wave Ring', price: 'From $145', image: '/images/product-2.png', category: 'Rings' },
  { id: 3, name: 'Golden Hour Earrings', price: 'From $165', image: '/images/product-3.png', category: 'Earrings' },
  { id: 4, name: 'Terracotta Dreams Bracelet', price: 'From $125', category: 'Bracelets' },
  { id: 5, name: 'Aegean Sea Studs', price: 'From $95', category: 'Earrings' },
  { id: 6, name: 'Sunset Glow Cuff', price: 'From $175', category: 'Bracelets' },
];

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    text: 'Every piece from Soleil Studio carries such warmth and intention. My Mediterranean pendant has become my everyday treasure.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena R.',
    text: 'The craftsmanship is exquisite. You can feel the love and artistry in every detail. These pieces are truly special.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amara K.',
    text: 'I discovered Soleil Studio through a friend and now own five pieces. The quality and design are unmatched.',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'Pieces Crafted' },
  { value: '12', label: 'Years of Artistry' },
  { value: '100%', label: 'Handmade' },
  { value: '50+', label: 'Countries Reached' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-linen)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-semibold text-[var(--color-charcoal)] tracking-wide">
              Soleil Studio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors text-sm font-medium tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors relative">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--color-terracotta)] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="p-2 text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[var(--color-charcoal)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[var(--color-cream)] border-b border-[var(--color-linen)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] transition-all duration-300"
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 pt-4 border-t border-[var(--color-linen)]">
              <button className="text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors relative">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--color-terracotta)] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="text-[var(--color-stone)] hover:text-[var(--color-terracotta)] transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Split Section */}
      <section className="pt-20 md:pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <p className="text-[var(--color-terracotta)] font-medium tracking-widest text-sm uppercase">
                  Handcrafted with Love
                </p>
                <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[var(--color-charcoal)] leading-tight">
                  Jewelry Born <br />
                  <span className="text-[var(--color-terracotta)]">Under the Sun</span>
                </h1>
                <p className="text-[var(--color-stone)] text-lg md:text-xl max-w-lg leading-relaxed">
                  Each piece is a fragment of Mediterranean light, handcrafted in our Parisian atelier to capture warmth you can wear.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#collections"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-charcoal)] text-white px-8 py-4 font-medium hover:bg-[var(--color-terracotta)] transition-colors"
                >
                  Explore Collections
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-8 py-4 font-medium hover:bg-[var(--color-charcoal)] hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {['C', 'A', 'M'].map((initial, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[var(--color-linen)] border-2 border-[var(--color-cream)] flex items-center justify-center text-sm font-medium text-[var(--color-charcoal)]"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-terracotta)] text-[var(--color-terracotta)]" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--color-stone)]">500+ happy customers</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="Soleil Studio handcrafted jewelry collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-xs text-[var(--color-stone)] uppercase tracking-wide">Starting from</p>
                <p className="text-2xl font-[family-name:var(--font-serif)] font-semibold text-[var(--color-charcoal)]">$95</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="collections" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--color-terracotta)] font-medium tracking-widest text-sm uppercase mb-4">
              New Arrivals
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-charcoal)]">
              Featured Pieces
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square bg-[var(--color-linen)] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id)
                          ? 'fill-[var(--color-terracotta)] text-[var(--color-terracotta)]'
                          : 'text-[var(--color-charcoal)]'
                      }`}
                    />
                  </button>
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-[var(--color-charcoal)] text-white py-3 font-medium hover:bg-[var(--color-terracotta)] transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-[var(--color-charcoal)] mb-1">
                  {product.name}
                </h3>
                <p className="text-[var(--color-terracotta)] font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Split Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/feature.png"
                  alt="The artisan crafting jewelry in the Soleil Studio workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <div className="bg-[var(--color-terracotta)] text-white p-6 rounded-xl">
                  <Sun className="w-8 h-8 mb-2" />
                  <p className="font-[family-name:var(--font-serif)] text-2xl font-semibold">12 Years</p>
                  <p className="text-sm opacity-90">of Artistry</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[var(--color-terracotta)] font-medium tracking-widest text-sm uppercase">
                  Our Story
                </p>
                <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-charcoal)] leading-tight">
                  Where Sunlight <br />Meets Soul
                </h2>
              </div>
              <div className="space-y-4 text-[var(--color-stone)] leading-relaxed">
                <p>
                  Soleil Studio was born from a love affair with the Mediterranean light. Our founder, inspired by summers spent along the Aegean coast, began crafting jewelry that captures the warmth of golden hour sunsets on terracotta walls.
                </p>
                <p>
                  Every piece is handcrafted in our Parisian atelier using traditional techniques passed down through generations. We work with ethically sourced materials, shaping each curve and setting each stone with intention and care.
                </p>
                <p>
                  Our jewelry is not just worn; it is felt. It carries the warmth of the sun, the stories of ancient shores, and the promise of endless summer days.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--color-linen)] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[var(--color-terracotta)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-charcoal)]">Handcrafted</p>
                    <p className="text-sm text-[var(--color-stone)]">With love and care</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--color-linen)] rounded-full flex items-center justify-center">
                    <Gem className="w-6 h-6 text-[var(--color-terracotta)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-charcoal)]">Ethical Sourcing</p>
                    <p className="text-sm text-[var(--color-stone)]">Responsibly sourced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Masonry Section */}
      <section id="gallery" className="py-20 md:py-28 bg-[var(--color-linen)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--color-terracotta)] font-medium tracking-widest text-sm uppercase mb-4">
              @soleilstudio
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-charcoal)]">
              Our Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative rounded-xl overflow-hidden group">
              <Image
                src="/images/product-1.png"
                alt="Mediterranean Sun Pendant"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/0 group-hover:bg-[var(--color-charcoal)]/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group md:row-span-2">
              <Image
                src="/images/hero.png"
                alt="Soleil Studio collection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/0 group-hover:bg-[var(--color-charcoal)]/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group">
              <Image
                src="/images/product-2.png"
                alt="Santorini Wave Ring"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/0 group-hover:bg-[var(--color-charcoal)]/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group">
              <Image
                src="/images/product-3.png"
                alt="Golden Hour Earrings"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/0 group-hover:bg-[var(--color-charcoal)]/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group">
              <Image
                src="/images/feature.png"
                alt="Artisan crafting process"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/0 group-hover:bg-[var(--color-charcoal)]/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="aspect-square bg-[var(--color-terracotta)] rounded-xl flex flex-col items-center justify-center text-white p-6 text-center">
              <Instagram className="w-8 h-8 mb-3" />
              <p className="font-[family-name:var(--font-serif)] text-xl font-semibold mb-1">Follow Us</p>
              <p className="text-sm opacity-90">@soleilstudio</p>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group">
              <Image
                src="/images/product-1.png"
                alt="Jewelry detail shot"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/0 group-hover:bg-[var(--color-charcoal)]/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section id="shop" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-[var(--color-terracotta)] font-medium tracking-widest text-sm uppercase mb-4">
                Shop
              </p>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-charcoal)]">
                All Collections
              </h2>
            </div>
            <div className="flex gap-2 mt-6 md:mt-0">
              {['All', 'Necklaces', 'Rings', 'Earrings', 'Bracelets'].map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 text-sm font-medium text-[var(--color-stone)] hover:text-[var(--color-charcoal)] hover:bg-[var(--color-linen)] rounded-full transition-colors first:bg-[var(--color-charcoal)] first:text-white"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square bg-[var(--color-linen)] rounded-xl overflow-hidden mb-4">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-linen)] to-[var(--color-cream)]">
                      <div className="text-center">
                        <Gem className="w-12 h-12 text-[var(--color-terracotta)] mx-auto mb-2" />
                        <p className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[var(--color-charcoal)]">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id)
                          ? 'fill-[var(--color-terracotta)] text-[var(--color-terracotta)]'
                          : 'text-[var(--color-charcoal)]'
                      }`}
                    />
                  </button>
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-[var(--color-charcoal)]">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-[var(--color-charcoal)] mb-1">
                  {product.name}
                </h3>
                <p className="text-[var(--color-terracotta)] font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="py-16 md:py-20 bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-semibold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-[var(--color-linen)] text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--color-terracotta)] font-medium tracking-widest text-sm uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-charcoal)]">
              What Our Clients Say
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--color-terracotta)] text-[var(--color-terracotta)]" />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-serif)] text-xl md:text-2xl text-[var(--color-charcoal)] text-center leading-relaxed mb-8">
                  &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-linen)] flex items-center justify-center font-semibold text-[var(--color-charcoal)]">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <p className="font-medium text-[var(--color-charcoal)]">
                    {testimonials[activeTestimonial].name}
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white border border-[var(--color-linen)] hover:bg-[var(--color-linen)] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-[var(--color-charcoal)]" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white border border-[var(--color-linen)] hover:bg-[var(--color-linen)] transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-[var(--color-charcoal)]" />
                </button>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === activeTestimonial ? 'bg-[var(--color-terracotta)]' : 'bg-[var(--color-linen)]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Full Section */}
      <section className="py-20 md:py-28 bg-[var(--color-linen)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/hero.png"
                alt="Soleil Studio jewelry collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/70" />
            </div>
            <div className="relative z-10 text-center py-20 md:py-28 px-6">
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 max-w-3xl mx-auto">
                Ready to Find Your Perfect Piece?
              </h2>
              <p className="text-[var(--color-linen)] text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Discover jewelry that speaks to your soul. Each piece is a unique work of art, waiting to become part of your story.
              </p>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 bg-[var(--color-terracotta)] text-white px-8 py-4 font-medium hover:bg-white hover:text-[var(--color-charcoal)] transition-colors"
              >
                Shop the Collection
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Strip Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-lg">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-semibold text-[var(--color-charcoal)] mb-2">
                Join the Soleil Family
              </h2>
              <p className="text-[var(--color-stone)]">
                Be the first to know about new collections, exclusive offers, and artisan stories.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 lg:min-w-[400px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-[var(--color-cream)] border border-[var(--color-linen)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)] text-[var(--color-charcoal)]"
              />
              <button
                type="submit"
                className="bg-[var(--color-charcoal)] text-white px-8 py-4 font-medium hover:bg-[var(--color-terracotta)] transition-colors rounded-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Full Section */}
      <footer id="contact" className="py-16 md:py-20 bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-semibold text-white mb-4">
                Soleil Studio
              </h3>
              <p className="text-[var(--color-stone)] mb-6 leading-relaxed">
                Handcrafted artisan jewelry inspired by the warmth of the Mediterranean sun.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:hello@soleilstudio.com"
                  className="p-2 bg-[var(--color-stone)]/20 rounded-full text-white hover:bg-[var(--color-terracotta)] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--color-stone)]/20 rounded-full text-white hover:bg-[var(--color-terracotta)] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--color-stone)]/20 rounded-full text-white hover:bg-[var(--color-terracotta)] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <ul className="space-y-3">
                {['All Collections', 'Necklaces', 'Rings', 'Earrings', 'Bracelets'].map((item) => (
                  <li key={item}>
                    <a href="#shop" className="text-[var(--color-stone)] hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">About</h4>
              <ul className="space-y-3">
                {['Our Story', 'The Artisan', 'Craftsmanship', 'Sustainability'].map((item) => (
                  <li key={item}>
                    <a href="#about" className="text-[var(--color-stone)] hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-[var(--color-stone)]">
                <li>
                  <a href="mailto:hello@soleilstudio.com" className="hover:text-white transition-colors">
                    hello@soleilstudio.com
                  </a>
                </li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--color-stone)]/20 pt-8 text-center">
            <p className="text-[var(--color-stone)] text-sm">
              &copy; {new Date().getFullYear()} Soleil Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
