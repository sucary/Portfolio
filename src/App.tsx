import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container, Typography } from '@mui/material';

import Home from './components/home';

function App() {

  return (
    <Router>
      <div className='app'>
      
      <Container 
        maxWidth="xl" // Adjust the max width (xs, sm, md, lg, xl)
        disableGutters
        sx={{
          marginTop: 10, // Add margin at the top
          marginBottom: 10, // Add margin at the bottom
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
      <Home />


      </Container>
      </div>
    </Router>
  )
}

export default App
