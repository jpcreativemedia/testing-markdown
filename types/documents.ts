export type Filings = {
  year: number;
  entries: FilingEntry[];
};

export type FilingEntry = {
  id: number;
  uuid: string;
  title: string;
  postDate: string;
  pdf: string;
};
