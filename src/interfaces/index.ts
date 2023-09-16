export interface ResponseAPI {
  results: Result[];
}

export interface Result {
  id: string;
  urls: { full: string };
  alt_description: null | string;
  description: null | string;
}
