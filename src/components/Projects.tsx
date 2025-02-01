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
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project: Project) => (
          <Grid item xs={12} sm={12} md={6} key={project.id}>
            <Card 
              sx={{ 
                height: '100%',
              backgroundColor: '#fffefbf0'

              }}
            >
              <CardActionArea 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: '100%' }}
                
              >
                <CardContent>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tech.map((tech: Tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                        onClick={(e) => e.stopPropagation()}
                        sx={{ cursor: 'default' }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;