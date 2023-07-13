import { PortableTextBlock } from "sanity";

export type Image = {
  alt?: string;
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};
export type SEO = {
  title: string;
  description: string;
};

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: Image;
  url: string;
  featured: boolean;
  technologies: string[];
  content: PortableTextBlock[];
};

export type Experince = {
  _id: string;
  _createdAt: Date;
  companyName: string;
  role: string;
  duration: string;
  url: string;
  highlights: string[];
  technologies: string[];
};

export type HeroSection = {
  tagline: string;
  description: PortableTextBlock[];
  callToAction: {
    label: string;
    url: string;
  };
};

export type AboutSection = {
  content: PortableTextBlock[];
  technologies: string[];
  image: Image;
};

export type GetInTouchSection = {
  tagline: string;
  title: string;
  content: PortableTextBlock[];
  callToAction: {
    label: string;
    url: string;
  };
};

export type HomePage = {
  seo: SEO;
  heroSection: HeroSection;
  aboutSection: AboutSection;
  getInTouchSection: GetInTouchSection;
};
export type BlogPage = {
  _id: string;
  name: string;
  description: string;
  url: string;
  slug: {
    current: string;
  };
  publishedDate: Date;
  technologies: string[];
  content: PortableTextBlock[];
  codeTechnology: string;
  code: PortableTextBlock[];
};
