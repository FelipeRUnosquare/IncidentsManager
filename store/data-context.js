import React from "react";

const DataContext = React.createContext({
  onError: () => {},
  onLoading: () => {},
  onSelectIncident: () => {},
  onGetIncidentById: () => {},
  onAddIncident: () => {},
  onEditIncident: () => {},
  onDeleteIncident: () => {},
  onDownloadIncident: () => {},
  onSelectNullIncident: () => {},
  onFilterByDepartment: () => {},
  isLoading: null,
  allIncidents: [],
  incData: [],
  incidentById: [],
});

export default DataContext;
