import React, { useEffect } from "react";

import { IoCodeSlash } from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";

function Projects() {
  const projects = [
    {
      name: "Outback Nursery site",
      gitLink: "https://github.com/HirenGajjar/outbacknursery",
      liveLink: "https://outbacknursery.vercel.app/",
    },
    {
      name: "Outback Nursery Design System",
      gitLink: "https://github.com/nic-dgl309-2024WI/design-system-HirenGajjar",
      liveLink: "https://outbacknursery.vercel.app/design-system.html",
    },
    {
      name: "Quote Mailer",
      gitLink: "",
      liveLink: "",
    },
    {
      name: "Paytm Clone",
      gitLink: "",
      liveLink: "",
    },
    {
      name: "Medium Clone",
      gitLink: "",
      liveLink: "",
    },
  ];

  useEffect(() => {
    document.title = "Hiren Gajjar | Work";
  }, []);
  const handleClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Link not available");
    }
  };
  return (
    <>
      <div className="projects">
        <div className="skills-header">
          <p className="skills-que">Work</p>
        </div>
        <div className="projects-list">
          {projects.map((item) => {
            return (
              <div key={item.name} className="each-project">
                <p className="project-name">{item.name}</p>
                <IoCodeSlash
                  className="project-links"
                  title="View Code"
                  onClick={() => handleClick(item.gitLink)}
                  style={{ cursor: "pointer" }}
                />
                <IoIosDesktop
                  className="project-links"
                  title="Live Demo"
                  onClick={() => handleClick(item.liveLink)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
