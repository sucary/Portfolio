import React from 'react';
import { Box } from '@mui/material';
import Description from "./Description";
import Header from "./Header";
import Projects from "./Projects";
import Contacts from "./Contacts";
import { descriptions } from "../data/descriptions";

const Home = () => {
  return (
    <Box>
      <Header />
      <Description 
        title={descriptions.en.title}
        description={descriptions.en.description}
      />
      <Projects />
      <Contacts />
    </Box>
  );
};

export default Home;