import { StoryDetails } from "../model/types";
export const GET_TOP_STORIES_LIST = "GET_TOP_STORIES_LIST";
export const GET_TOP_STORIES_SUCCESS_LIST = "GET_TOP_STORIES_SUCCESS_LIST";
export const GET_TOP_STORIES_FAILURE_LIST = "GET_TOP_STORIES_FAILURE_LIST";

export const GET_TOP_STORIES = "GET_TOP_STORIES";
export const GET_TOP_STORIES_SUCCESS = "GET_TOP_STORIES_SUCCESS";
export const GET_TOP_STORIES_FAILURE = "GET_TOP_STORIES_FAILURE";

interface GetTopStories {
  type: typeof GET_TOP_STORIES;
  payload: {};
}

interface GetTopStoriesSuccess {
  type: typeof GET_TOP_STORIES_SUCCESS;
  payload: {
    stories: StoryDetails[];
  };
}

interface GetTopStoriesFailure {
  type: typeof GET_TOP_STORIES_FAILURE;
  payload: {
    error: string;
  };
}

export type AppActions =
  | GetTopStories
  | GetTopStoriesSuccess
  | GetTopStoriesFailure;

export const getTopStories = (): AppActions => {
  return {
    type: GET_TOP_STORIES,
    payload: {},
  };
};

export const getTopStoriesSuccess = (stories: StoryDetails[]): AppActions => {
  return {
    type: GET_TOP_STORIES_SUCCESS,
    payload: {
      stories,
    },
  };
};

export const getTopStoriesFailure = (error: string): AppActions => {
  return {
    type: GET_TOP_STORIES_FAILURE,
    payload: {
      error,
    },
  };
};
