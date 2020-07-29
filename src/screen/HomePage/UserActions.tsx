import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./UserActions.css";

interface Props {}

export const UserActions: React.FC<Props> = (props: Props) => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const q = query.get("q") || "";
  const f = query.get("f");

  const sortByPoints = () => {
    switch (f) {
      case "p1": {
        history.push({ search: `?q=${q}&f=p0` });
        break;
      }
      case "p0": {
        history.push({ search: `?q=${q}&f=p1` });
        break;
      }

      default:
        history.push({ search: `?q=${q}&f=p1` });
        break;
    }
  };

  const sortByTime = () => {
    switch (f) {
      case "t1": {
        history.push({ search: `?q=${q}&f=t0` });
        break;
      }
      case "t0": {
        history.push({ search: `?q=${q}&f=t1` });
        break;
      }

      default:
        history.push({ search: `?q=${q}&f=t1` });
        break;
    }
  };

  const clearFilters = () => {
    if (q.length > 0) {
      history.push({ search: `?q=${q}` });
    } else {
      history.push({ search: `` });
    }
  };

  return (
    <div className="pure-g">
      <div className="pure-u-1-12"> Sort By: </div>
      <div className="pure-u-1-12">
        <button
          className="pure-button button-secondary sort-button"
          onClick={sortByPoints}
        >
          Points
        </button>
      </div>
      <div className="pure-u-1-12">
        <button
          className="pure-button button-secondary sort-button"
          onClick={sortByTime}
        >
          Time
        </button>
      </div>
      <div className="pure-u-1-12">
        <button
          className="pure-button"
          style={{ fontSize: "75%" }}
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};
