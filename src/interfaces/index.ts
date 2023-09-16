export interface ResponseAPI {
  results: Result[];
}

export interface Result {
  id: string;
  urls: { small: string; full: string };
  alt_description: null | string;
}
