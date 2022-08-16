import React, { useEffect, useState } from "react";
import IncidentItem from "./IncidentItem";
import ReactPaginate from "react-paginate";
import styles from "./incidents.module.sass";

const IncidentList = (props) => {
  const [IncData, setIncData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setIncData(
      props.incData.length > 0
        ? props.incData.slice(0, props.incData.length)
        : []
    );
  }, [props.incData]);

  const postPerPage = 10;

  const pagesVisited = pageNumber * postPerPage;

  const displayIncidents = IncData.slice(
    pagesVisited,
    pagesVisited + postPerPage
  ).map((incident) => {
    return <IncidentItem key={incident.id} data={incident} />;
  });

  let pageCount = Math.ceil(IncData.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <React.Fragment>
      {displayIncidents}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={8}
        containerClassName={styles["pagination-buttons"]}
        previousLinkClassName={styles["previous-buttons"]}
        nextLinkClassName={styles["next-button"]}
        disabledClassName={styles["pagination-disabled"]}
        activeClassName={styles["pagination-active"]}
      />
    </React.Fragment>
  );
};

export default IncidentList;
