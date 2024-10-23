import React from "react";

const SuggestionList = ({
  searchKey,
  highlight,
  suggestionList,
  handleSuggestionClick,
}) => {
  const highlightText = (text, highlight) => {
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts?.map((part) =>
          part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part
        )}
      </span>
    );
  };

  return (
    <div className="suggestions">
      {suggestionList &&
        suggestionList.map((item) => (
          <div
            className="suggestion-item"
            key={item.id}
            onClick={() => handleSuggestionClick(item[searchKey])}
          >
            {highlightText(item[searchKey], highlight)}
          </div>
        ))}
    </div>
  );
};

export default SuggestionList;
