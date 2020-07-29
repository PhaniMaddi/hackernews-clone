export interface StoryDetails {
  id: string;
  deleted: boolean;
  by: string;
  time: number;
  url: string;
  score: number;
  title: string;
  kids: number[];
}

export interface Action {
  type: string;
  payload: any;
}
