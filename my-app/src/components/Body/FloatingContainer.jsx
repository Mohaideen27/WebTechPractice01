import React from "react";
import Image from "next/image";
import Project1 from "@/src/assets/projects/ProjectImage1.jpg";
import Project2 from "@/src/assets/projects/ProjectImage2.jpg";
import Project3 from "@/src/assets/projects/ProjectImage3.jpg";
import Project4 from "@/src/assets/projects/ProjectImage4.jpg";

const FloatingContainer = () => {
  return (
    <div>
      <h3>Featured Projects</h3>
      <ul className="flex flex-row items-center">
        <li>
          <a href="">
            <Image src={Project1} alt="Project 1" />
          </a>
        </li>
        <li>
          <a href="">
            <Image src={Project2} alt="Project 2" />
          </a>
        </li>
        <li>
          <a href="">
            <Image src={Project3} alt="Project 3" />
          </a>
        </li>
        <li>
          <a href="">
            <Image src={Project4} alt="Project 4" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FloatingContainer;
