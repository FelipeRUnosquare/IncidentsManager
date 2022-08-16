import React, { useContext, useState } from "react";
import DataContext from "../../store/data-context";
import styles from "./incidents.module.sass";

const IncidentForm = ({ dataIncident }) => {
  const dataCtx = useContext(DataContext);
  const [name, setName] = useState(dataIncident.name || "");
  const [discovered, setDiscovered] = useState(dataIncident.discovered || "");
  const [description, setDescription] = useState(
    dataIncident.description || ""
  );
  const [department, setDepartment] = useState(dataIncident.department || "");
  const [isNewIncident, setIsNewIncident] = useState(
    !dataIncident.hasOwnProperty("id")
  );

  const handleEditOrSaveIncident = (event) => {
    event.preventDefault();
    const newData = {
      id: dataIncident.id || null,
      name,
      discovered,
      description,
      department,
    };
    if (!isNewIncident) {
      dataCtx.onEditIncident(newData);
    } else {
      dataCtx.onAddIncident(newData);
    }
  };

  const handleDeleteIncident = (event) => {
    event.preventDefault();
    dataCtx.onDeleteIncident(dataIncident.id);
  };

  return (
    <React.Fragment>
      <form className={styles.form}>
        <label>Name: </label>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          value={name}
        />
        <label>Discovered: </label>
        <input
          onChange={(event) => setDiscovered(event.target.value)}
          type="text"
          value={discovered}
        />
        <label>Description: </label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          value={description}
        />
        <label>Department: </label>
        <input
          onChange={(event) => setDepartment(event.target.value)}
          type="text"
          value={department}
        />
        <div className={styles["inc-action"]}>
          <button onClick={handleEditOrSaveIncident}>
            {isNewIncident ? "Save" : "Edit"}
          </button>
          {!isNewIncident && (
            <button onClick={handleDeleteIncident}>Delete</button>
          )}
        </div>
      </form>
    </React.Fragment>
  );
};

export default IncidentForm;
