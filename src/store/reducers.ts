import { combineReducers } from "redux";
import * as appActions from "./actions";
import { StoryDetails } from "../model/types";

const storiesState: StoryDetails[] = [];

const stories = (state = storiesState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case appActions.GET_TOP_STORIES_SUCCESS: {
      return [...payload.stories];
    }

    default:
      return state;
  }
};

const appReducers = { stories };

export const rootReducer = combineReducers({
  ...appReducers,
});
