import React from "react";
import { StoryDetails } from "../../model/types";

import "./ArticlePane.css";

interface Props {
  story: StoryDetails;
}

export const ArticlePane: React.FC<Props> = (props: Props) => {
  const { story } = props;
  const date: Date = new Date(story.time * 1000);
  let time: string = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="article-pane">
      <div className="pure-g">
        <div className="pure-u-1-24">{story.score}</div>
        <div className="pure-u-22-24">
          <div className="pure-1-1 article-title">
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </div>

          <div className="pure-1-1 pure-u-md-1-2">
            <div className="pure-u-1-8">
              {story.kids && story.kids.length} comments
            </div>
            <div className="pure-u-1-8">By: {story.by}</div>
            <div className="pure-u-1-6">Date: {time}</div>
            <div className="pure-u-1-8">ID: {story.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
