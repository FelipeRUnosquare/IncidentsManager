import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import DataContext from "../../store/data-context";
import styles from "./incidents.module.sass";

const IncidentForm = ({ dataIncident }) => {
  const dataCtx = useContext(DataContext);
  const router = useRouter();
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
    console.log(department);
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
      <h2>Create or Edit incident</h2>
      <button className={styles.button} onClick={() => router.push("/home")}>
        Back
      </button>
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
          type="date"
          value={discovered}
        />
        <label>Description: </label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          value={description}
        />
        <label>Department: </label>
        <select
          className={styles.select}
          name="department"
          id="department"
          onChange={(event) => setDepartment(event.target.value)}
          value={department}
        >
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Legal">Legal</option>
        </select>
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
