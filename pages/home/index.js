import React, { useContext } from "react";
import Menu from "../../components/Layout/Menu";
import Spinner from "../../components/UI/Spinner";
import DataContext from "../../store/data-context";

const items = [
  {
    id: 0,
    href: "./incidents",
    title: "All Incidents",
  },
  {
    id: 1,
    href: "./incidents/null",
    title: "New Incident",
  },
];

const Home = () => {
  const dataCtx = useContext(DataContext);
  let content = <Menu items={items} />;

  if (dataCtx.isLoading) content = <Spinner />;

  return <React.Fragment>{content}</React.Fragment>;
};

export default Home;
