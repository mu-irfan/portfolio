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
  name: string;
  description: string;
  imageSrc: {
    alt: string;
    src: string;
  };
  source: string;
  technologies: string[];
};

