import { GalleryItem } from './types';

export const CONTACT_PHONE = '+977 9812345678';
export const CONTACT_WHATSAPP_NUMBER = '9779812345678';
export const CONTACT_EMAIL = 'contact@shivashilpkala.art';
export const CONTACT_ADDRESS = 'Workshop 1, Prithvi Highway, Dhading Besi, Nepal';

// High-quality, thematic images for the website
export const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1603722353988-b7153a1682a0?q=80&w=2070&auto=format&fit=crop';
export const ABOUT_IMAGE_URL = 'https://images.unsplash.com/photo-1596706021272-3c4269b2d3e1?q=80&w=1974&auto=format&fit=crop';
export const CUSTOM_ORDER_IMAGE_URL = 'https://images.unsplash.com/photo-1511252579203-0a26e8f4b01e?q=80&w=1964&auto=format&fit=crop';


export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1621993211520-912b708b4b5e?q=80&w=800&auto=format&fit=crop', alt: 'Hand-carved dark stone statue of Lord Vishnu', category: 'deity', title: 'Lord Vishnu' },
  { id: 2, src: 'https://images.unsplash.com/photo-1505391305296-e7f0a7b3ab6f?q=80&w=800&auto=format&fit=crop', alt: 'Custom memorial stone angel sculpture', category: 'memorial', title: 'Guardian Angel' },
  { id: 3, src: 'https://images.unsplash.com/photo-1597818222198-9a3d69cb8f24?q=80&w=800&auto=format&fit=crop', alt: 'Serene stone murti of Lord Buddha face', category: 'deity', title: 'Enlightened Buddha' },
  { id: 4, src: 'https://images.unsplash.com/photo-1603892323282-356c523b0920?q=80&w=800&auto=format&fit=crop', alt: 'Intricate stone sculpture of Lord Ganesh', category: 'deity', title: 'Lord Ganesh' },
  // FIX: Used double quotes for the title string to handle the apostrophe in "Beloved's".
  { id: 5, src: 'https://images.unsplash.com/photo-1594998799433-2a3a5f80211f?q=80&w=800&auto=format&fit=crop', alt: 'Memorial stone carving of a face', category: 'memorial', title: "Beloved's Visage" },
  { id: 6, src: 'https://images.unsplash.com/photo-1610416531388-0af6f1a41e9b?q=80&w=800&auto=format&fit=crop', alt: 'Stone sculpture of Lord Shiva', category: 'deity', title: 'Meditating Shiva' },
  { id: 7, src: 'https://images.unsplash.com/photo-1555427493-85f54247517a?q=80&w=800&auto=format&fit=crop', alt: 'Custom family portrait carved in stone', category: 'memorial', title: 'Family Bond' },
  { id: 8, src: 'https://images.unsplash.com/photo-1617458822066-c95cb31b3506?q=80&w=800&auto=format&fit=crop', alt: 'Stone statue of Goddess Saraswati', category: 'deity', title: 'Goddess Saraswati' },
  // FIX: Used double quotes for the title string to handle the apostrophe in "Mother's".
  { id: 9, src: 'https://images.unsplash.com/photo-1602681561129-411a7b8a7c2e?q=80&w=800&auto=format&fit=crop', alt: 'Custom memorial sculpture of mother and child', category: 'memorial', title: "Mother's Embrace" },
];
