import { useEffect, useState } from "react";
import { Project, Tech } from "../types";
import { getAllProjects } from "../services/projectService";
import { 
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  CardActionArea
} from '@mui/material';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    <Box className="section">
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={2} >
        {projects.map((project) => (
          <Grid item xs={12} md={3} key={project.id}>
            <CardActionArea 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ height: '100%'}}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box className="tech-container">
                    {project.tech.map((tech: Tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;