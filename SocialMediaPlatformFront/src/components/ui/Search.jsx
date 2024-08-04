import { BsSearch } from "react-icons/bs";
import { useTheme } from "../../ThemeContext";
import styles from "./Search.module.css";

function Search() {
  const { theme } = useTheme();

  return (
    <div className={styles.searchBox}>
      <BsSearch className={styles.searchIcon} />
      <input
        type="search"
        placeholder="Search"
        className={`${styles.search} ${
          theme === "light" ? "text-dark" : "text-light"
        }`}
      ></input>
    </div>
  );
}

export default Search;
