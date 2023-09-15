export interface ResponseAPI {
  results: Result[];
}

export interface Result {
  id: string;
  description: null | string;
  alt: null | string;
  urls: string;
}
