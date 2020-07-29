import React, { useEffect } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ArticlePane } from "./ArticlePane";
import { UserActions } from "./UserActions";
import { getTopStories } from "../../store/actions";
import { StoryDetails } from "../../model/types";
import { AppStore } from "../../store";

import "./index.css";

interface Props {
  getTopStories: typeof getTopStories;
}

const _HomePage: React.FC<Props> = (props: Props) => {
  const { getTopStories } = props;
  const location = useLocation();
  const dispatch = useDispatch();
  let stories: StoryDetails[] = [
    ...useSelector((state: AppStore) => state.stories),
  ];

  const query = new URLSearchParams(location.search);
  const search: string = query.get("q") || "";
  const sort = query.get("f");

  useEffect(() => {
    dispatch(getTopStories());
  }, [dispatch, getTopStories]);

  if (sort) {
    stories.sort((a: StoryDetails, b: StoryDetails): any => {
      switch (sort) {
        case "p0":
          return a.score - b.score;
        case "p1":
          return b.score - a.score;
        case "t0":
          return a.time - b.time;
        case "t1":
          return b.time - a.time;
        default:
          break;
      }
    });
  }

  if (search && search.length > 0) {
    stories = stories.filter((story: StoryDetails) => {
      return story.title.toLowerCase().includes(search);
    });
  }

  if (stories.length === 0) {
    return <div className="content-wrapper">Fetching stories...</div>;
  } else {
    return (
      <div className="content-wrapper">
        <UserActions />
        {stories.map((story: StoryDetails) => {
          return <ArticlePane story={story} key={story.id} />;
        })}
      </div>
    );
  }
};

export const HomePage = connect(null, { getTopStories })(_HomePage);
