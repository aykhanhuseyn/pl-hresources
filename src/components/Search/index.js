import React from "react";
import SearchBox from "./searchbox";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <h2 className="search__title">Axtarış</h2>

      <div className="search__keeper">

        <SearchBox placeholder="Ad, Soyad" />
        <SearchBox placeholder="Struktur" />
        <SearchBox placeholder="Vəzifə" />

        <button type="button" className="search__keeper__button">
          Axtar
        </button>
      </div>
    </div>
  );
};

export default Search;
