import React, { useEffect, useState, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import "./Search.css";

import Tag from "../../components/Tag/Tag";
import ListData from "../../components/ListData/ListData";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const [source, setSource] = useState(axios.CancelToken.source());

  const fetchData = useCallback(
    (query) => {
      const searchUrl = "/api/trips?q=";

      return axios
        .get(searchUrl + query, {
          cancelToken: source.token,
        })
        .then((res) => {
          setData(res.data.msg);
          setQuery(query);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [source]
  );

  useEffect(() => {
    fetchData(query);
  }, [query, fetchData]);

  const handleOnInput = (event) => {
    const searchQuery = event.target.value;

    if (source) {
      source.cancel();
    }
    setSource(axios.CancelToken.source());
    setQuery(searchQuery);
  };

  let listData = null;
  if (data.length !== 0) {
    listData = data.map((ele) => {
      const listTag = ele.tags.map((tagele, index) => {
        return (
          <Tag
            key={tagele + index}
            tag={tagele}
            clicked={() => fetchData(tagele)}
          />
        );
      });
      return (
        <ListData
          photos={ele.photos}
          key={ele.eid}
          url={ele.url}
          title={ele.title}
          desc={ele.description}
          tag={listTag}
        />
      );
    });
  }

  return (
    <div className="container">
      <div className="searchBox-container">
        <label className="search-label" htmlFor="search-input">
          <input
            className="search-input"
            type="text"
            value={query}
            name="query"
            placeholder="หาที่เที่ยวแล้วไปกับ..."
            onChange={handleOnInput}
          />
          <i className="Icon" onClick={() => fetchData(query)}>
            <IoSearch />
          </i>
        </label>
      </div>
      {data.length !== 0 ? (
        listData
      ) : (
        <p className="noResText">No Result Found!!!</p>
      )}
    </div>
  );
}

export default Search;
