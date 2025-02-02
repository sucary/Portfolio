import React from 'react';
import { Box, Typography } from '@mui/material';
import { DescriptionProps } from '../types';

const Description: React.FC<DescriptionProps> = ({ title, description }) => {
  return (
    <Box className="section">
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" className="description-text">
        {description}
      </Typography>
    </Box>
  );
};

export default Description;