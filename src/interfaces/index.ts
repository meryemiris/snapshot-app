export interface ResponseAPI {
  results: Result[];
}

export interface Result {
  id: string;
  urls: { small: string };
  alt_description: null | string;
}
