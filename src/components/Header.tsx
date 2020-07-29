import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Header.css";

interface Props {}

export const Header: React.FC<Props> = (props: Props) => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const query = new URLSearchParams(history.location.search);
  const q = query.get("q");
  const f = query.get("f");

  useEffect(() => {
    if (q) {
      setSearch(q);
    }
  }, [q]);

  const handleSearch = (event: any): void => {
    const value = event.target.value;
    setSearch(value);

    if (f) {
      history.push({ search: `?q=${value}&f=${f}` });
    } else {
      history.push({ search: `?q=${value}` });
    }
  };

  return (
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed pure-g">
        <div className="pure-u-1-6">
          <a className="pure-menu-heading" href="/">
            Hacker News
          </a>
        </div>
        <div className="pure-u-1-2">
          <form className="pure-form">
            <fieldset>
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                className="pure-u-20-24"
                placeholder="Search for stories"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
