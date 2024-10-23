import React, { useCallback, useEffect, useState } from "react";
import SuggestionList from "./SuggestionList";
import { useRef } from "react";

const AutoComplete = ({ placeholder, searchKey, fetchSuggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestionList, setSuggestionList] = useState([]);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (inputValue.length > 1 && isInitialRender.current) {
      debounced(inputValue);
      setSuggestionList([]);
    } else {
      setSuggestionList([]);
    }
  }, [inputValue]);

  const getSuggestions = async (query) => {
    setLoading(true);
    console.log("calling");
    try {
      const res = await fetchSuggestions(query);
      setSuggestionList(res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    isInitialRender.current = true;
    setInputValue(e.target.value);
  };

  const debounce = (func, time) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, time);
    };
  };
  const debounced = useCallback(debounce(getSuggestions, 1000), []);

  const handleSuggestionClick = (value) => {
    setInputValue(value);
    setSuggestionList([]);
    isInitialRender.current = false;
    console.log("click");
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      <div>
        {loading ? <div>Loading...</div> : null}
        <SuggestionList
          highlight={inputValue}
          searchKey={searchKey}
          suggestionList={suggestionList}
          handleSuggestionClick={handleSuggestionClick}
        />
      </div>
    </div>
  );
};

export default AutoComplete;
