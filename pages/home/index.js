import React from "react";
import Menu from "../../components/Layout/Menu";

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
  let content = <Menu items={items} />;

  return <React.Fragment>{content}</React.Fragment>;
};

export default Home;
