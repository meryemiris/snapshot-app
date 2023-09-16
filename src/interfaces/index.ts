export interface ResponseAPI {
  results: Result[];
}

export interface Result {
  id: string;
  urls: { regular: string; full: string };
  alt_description: null | string;
}
