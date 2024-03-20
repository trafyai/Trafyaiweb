import React, { useState } from "react";
import "./CoursePage.css";
import CourseProjectData from "./CourseProjectData";

export default function CourseProjectSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <main>
      <div className="course-project">
        <div className="course-project-container">
          <div className="course-project-heading">
            <h2>Projects</h2>
          </div>
          <div className="course-projects-contents">
            {CourseProjectData.map((item, index) => (
              <div
                className="project-box"
                key={index}
                // onMouseEnter={() => handleMouseEnter(index)}
                // onMouseLeave={handleMouseLeave}
              >
                <div className="project-box-heading" style={{ transition: "opacity 100s ease" }}>
                <h3 style={{ opacity: 1, backgroundColor: item.bg_color }}>{item.title}</h3>
                  {/* {hoveredIndex === index ? (
                    <h2 style={{ opacity: 1, backgroundColor: item.bg_color }}>{item.title}</h2>
                  ) : (
                    <img src={item.project_image} alt="Project" style={{ opacity: 1,width: "100%" }} className="proj-img" />
                  )} */}
                </div>
                <div className="project-box-description" style={{ transition: "opacity 0.5s ease" }}>
                <p style={{ opacity: 1, padding:"16px" }}>{item.description}</p>
                  {/* {hoveredIndex === index ? (
                    <p style={{ opacity: 1, padding:"16px" }}>{item.description}</p>
                  ) : (
                    <h2 style={{ opacity: 1 }}>{item.title}</h2>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
