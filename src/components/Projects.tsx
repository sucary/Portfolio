import { useEffect, useState } from "react";
import { Project, Tech } from "../types";
import { getAllProjects } from "../services/projectService";


const Projects = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    // Fetch projects when the component mounts
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch {
        setError('Failed to fetch projects');
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h3>Projects</h3>
      {projects.map((project: Project) => (
        <div key={project.id}>
          <p>{project.name}</p>
          <p>{project.description}</p>
          <p>{project.link}</p>
          <p>{project.tech.map((tech: Tech) => (
            tech
          ))}</p>
        </div>
      ))}
    </div>
  )
};

export default Projects;