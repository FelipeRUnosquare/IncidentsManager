import React, { useContext } from "react";
import DataContext from "../../store/data-context";
import styles from "./Layout.module.sass";

const SearchBar = () => {
  const dataCtx = useContext(DataContext);
  const handleFilterByDepartment = (event) => {
    dataCtx.onFilterByDepartment(event.target.value);
  };
  return (
    <React.Fragment>
      <label className={styles.label} htmlFor="department">
        Choose a Department:
      </label>
      <select
        className={styles.select}
        name="department"
        id="department"
        onChange={(event) => handleFilterByDepartment(event)}
      >
        <option value="All">All</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Legal">Legal</option>
      </select>
    </React.Fragment>
  );
};

export default SearchBar;
