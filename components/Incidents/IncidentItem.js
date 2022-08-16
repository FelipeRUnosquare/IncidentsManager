import React, { useContext } from "react";
import DataContext from "../../store/data-context";
import styles from "./incidents.module.sass";

const IncidentItem = (props) => {
  const dataCtx = useContext(DataContext);

  const handleSelectIncident = () => {
    dataCtx.onSelectIncident(props.data.id);
  };
  return (
    <React.Fragment>
      <div className={styles.inc} onClick={handleSelectIncident}>
        <h1 className={styles["inc-name"]}>{props.data.name}</h1>
        <div className={styles["inc-discovered"]}>{props.data.discovered}</div>
        <div className={styles["inc-department"]}>{props.data.department}</div>
      </div>
    </React.Fragment>
  );
};

export default IncidentItem;
