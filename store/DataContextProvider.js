import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../components/UI/Modal";
import DataContext from "./data-context";

import MOCK_DATA from "../MOCK_DATA.json";

const DataContextProvider = (props) => {
  const router = useRouter();
  const [allIncidents, setAllIncidents] = useState(MOCK_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [incidentById, setIncidentById] = useState([]);
  const [isError, setIsError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [warning, setWarning] = useState(false);

  const handleError = (newError) => {
    setIsError(true);
    setModalMessage(newError);
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setIsError(false);
    setWarning(false);
    setModalMessage("");
  };

  const handleSelectIncident = (id) => {
    const incident = allIncidents.filter(
      (incident) => incident.id === parseInt(id)
    );
    setIncidentById(incident);
    router.push(`/incidents/${id}`);
  };

  const handleEditIncident = (newData) => {
    try {
      setAllIncidents((prevIncidents) =>
        prevIncidents.map((incident) => {
          if (incident.id === parseInt(newData.id)) {
            return newData;
          } else {
            return incident;
          }
        })
      );
      setModalMessage("Incident edited successfully");
      setIncidentById([]);
      router.back();
    } catch (error) {
      router.push("/home");
      setIsError(true);
      setModalMessage(error.message);
    }
  };

  const handleAddIncident = (newData) => {
    try {
      const newId = allIncidents.length + 1;
      newData.id = newId;
      let newIncidents = allIncidents;
      newIncidents[`${allIncidents.length}`] = newData;
      setAllIncidents(newIncidents);
      setIncidentById([]);
      router.back();
    } catch (error) {
      setIsError(true);
      setModalMessage(error.message);
    }
  };

  const handleDeleteIncident = (id) => {
    try {
      let newIncidents = allIncidents.filter((incident) => incident.id !== id);
      setAllIncidents(newIncidents);
      setModalMessage("Incident deleted successfully");
      setIncidentById([]);
      router.back();
    } catch (error) {
      setIsError(true);
      setModalMessage(error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        onSelectIncident: handleSelectIncident,
        onEditIncident: handleEditIncident,
        onAddIncident: handleAddIncident,
        onDeleteIncident: handleDeleteIncident,
        onSelectNullIncident: () => setIncidentById([]),
        onError: handleError,
        onLoading: (loading) => setIsLoading(loading),
        allIncidents: allIncidents,
        isLoading: isLoading,
        incidentById: incidentById,
      }}
    >
      {props.children}
      {modalMessage !== "" && (
        <Modal
          error={isError}
          message={modalMessage}
          onCloseModal={handleCloseModal}
          // onAcceptAction={handleDeleteIncident}
          warning={warning}
        />
      )}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
