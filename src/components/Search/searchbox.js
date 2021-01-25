import React, { useState } from "react";
import "./searchbox.scss";

const SearchBox = ({ placeholder, initial }) => {
  const [state, setState] = useState(initial || "");
  return (
    <div className="searchbox">
      <input
        className="searchbox__input"
        type="text"
        placeholder={placeholder || ""}
        value={state}
        onChange={(e) => setState(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
