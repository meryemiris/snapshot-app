export interface ResponseAPI {
  images: Images[];
}

export interface Images {
  id: string;
  alt: string;
  url: string;
  description: null | string;
}
