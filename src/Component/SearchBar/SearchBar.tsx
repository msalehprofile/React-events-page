import { FormEvent } from "react";
import "./SearchBar.scss";

type SearchBarProps = {
    searchTerm: string;
    handleSearchCriteria: (event: FormEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const SearchBar = ({searchTerm, handleSearchCriteria, placeholder}: SearchBarProps) => {
  return (
      <div className="searchbar">
        <input
          type="text"
          onInput={handleSearchCriteria}
          value={searchTerm}
          placeholder={placeholder}
          className="searchbar__input"
        />
      </div>
  );
};

export default SearchBar;
