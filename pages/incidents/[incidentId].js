import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect } from "react";
import DataContext from "../../store/data-context";
import IncidentForm from "../../components/Incidents/IncidentForm";

const Incident = () => {
  const dataCtx = useContext(DataContext);
  let content = (
    <IncidentForm
      dataIncident={
        dataCtx.incidentById.length > 0 ? dataCtx.incidentById[0] : {}
      }
    />
  );
  return <React.Fragment>{content}</React.Fragment>;
};

export default Incident;
