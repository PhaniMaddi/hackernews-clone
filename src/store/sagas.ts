import { takeEvery, call, put, all } from "redux-saga/effects";
import * as appActions from "./actions";
import { Action, StoryDetails } from "../model/types";
import { ApiService } from "../utils/api";

function* watchGetTopStories() {
  yield takeEvery(appActions.GET_TOP_STORIES, getTopStories);
}

function* getTopStories(action: Action) {
  try {
    // TODO: implement pagination
    const PAGE_SIZE: number = 30;
    const response = yield call(ApiService.get, `topstories.json?print=pretty`);
    const topStoryIds: number[] = response.data.splice(0, PAGE_SIZE);
    let stories: StoryDetails[] = [];

    const promise = topStoryIds.map((id: number) =>
      ApiService.get(`item/${id}.json?print=pretty`)
    );

    yield Promise.all(promise).then((results) => {
      stories = results.map((res) => res.data);
    });

    yield put(appActions.getTopStoriesSuccess(stories));
  } catch (error) {
    yield put(appActions.getTopStoriesFailure("failed to get response"));
  }
}

const appSagas = [watchGetTopStories()];

export function* rootSaga() {
  try {
    yield all([...appSagas]);
  } catch (e) {}
}
