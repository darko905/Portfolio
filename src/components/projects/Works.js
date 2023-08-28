import React, { useEffect, useState } from "react";
import { projectsData } from "./data";
import WorksItem from "./WorksItem";

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
