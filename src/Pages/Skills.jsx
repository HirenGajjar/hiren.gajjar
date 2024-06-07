import React, { useEffect } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import { TbCircleKeyFilled } from "react-icons/tb";
import { SiJsonwebtokens } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaCloudflare } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

function Skills() {
  useEffect(() => {
    document.title = "Hiren Gajjar | Skills";
  }, []);
  const skillCategories = [
    {
      category: "Languages",
      icons: [
        <RiJavascriptFill key="js" title="JavaScript" />,
        <BiLogoTypescript key="ts" title="TypeScript" />,
      ],
    },
    {
      category: "Major",
      icons: [
        <FaReact key="react" title="react" />,
        <SiRedux key="redux" title="redux" />,
        <FaNpm key="npm" title="npm" />,
        <SiExpress key="express" title="express" />,
      ],
    },
    {
      category: "Basics",
      icons: [
        <FaHtml5 key="html" title="html" />,
        <FaCss3Alt key="css" title="css" />,
        <SiSass key="sass" title="sass" />,
        <FaBootstrap key="bootstrap" title="bootstrap" />,
        <RiTailwindCssFill key="tailwind" title="tailwind" />,
      ],
    },

    {
      category: "Databases",
      icons: [
        <SiMongodb key="mongo" title="MongoDB" />,
        <SiMongoose key="mongoose" title="Mongoose" />,
        <SiMysql key="mysql" title="MySQL" />,
        <BiLogoPostgresql key="postgres" title="PostgreSQL" />,
        <SiPrisma key="prisma" title="Prisma" />,
      ],
    },
    {
      category: "Validation",
      icons: [
        <SiJsonwebtokens key="jwt" title="JSON Web Tokens" />,
        <SiZod key="zod" title="Zod" />,
        <TbCircleKeyFilled key="bcrypt" title="bcrypt" />,
      ],
    },
    {
      category: "Deployment",
      icons: [
        <FaAws key="aws" title="AWS" />,
        <FaCloudflare key="cloudflare" title="Cloudflare" />,
        <FaDocker key="docker" title="Docker" />,
      ],
    },
    {
      category: "Version",
      icons: [<VscGithub key="git" title="git" />],
    },
  ];
  return (
    <>
      <div className="skills">
        <div className="skills-header">
          <p className="skills-que">What I know?</p>
        </div>
        <div className="skills-icons">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skills-${category.category.toLowerCase()} skills-common`}
            >
              {category.icons.map((icon, i) => (
                <div key={i} className="each-skills-icon">
                  {icon}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
