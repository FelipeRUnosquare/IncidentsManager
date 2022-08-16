import React, { useContext } from "react";
import Spinner from "../../components/UI/Spinner";
import IncList from "../../components/Incidents/IncidentList";
import DataContext from "../../store/data-context";
import CsvDownload from "react-json-to-csv";

const UserId = () => {
  const dataCtx = useContext(DataContext);

  let content = <Spinner />;
  if (dataCtx.allIncidents.length > 0) {
    content = (
      <React.Fragment>
        <h1>Last Incidents</h1>
        <IncList incData={dataCtx.allIncidents} />;
        <CsvDownload
          data={dataCtx.allIncidents}
          style={
            //pass other props, like styles
            {
              boxShadow: "inset 0px 1px 0px 0px rgba(27,46,53,255)",
              backgroundColor: "rgba(27,46,53,255)",
              borderRadius: "6px",
              border: "1px solid black",
              display: "inline-block",
              cursor: "pointer",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "bold",
              padding: "6px 24px",
              textDecoration: "none",
              margin: "1rem",
            }
          }
        >
          Export to CSV
        </CsvDownload>
      </React.Fragment>
    );
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default UserId;
