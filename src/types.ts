
export type Page = 'home' | 'about' | 'gallery' | 'custom' | 'contact';

export type GalleryCategory = 'all' | 'deity' | 'memorial';

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'deity' | 'memorial';
  title: string;
}
