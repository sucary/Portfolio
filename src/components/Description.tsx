import React from 'react';
import { Contact } from '.../types';
import { Box, Typography } from '@mui/material';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <Box
      sx={{
        margin: '32px 0',
      }}
    >
      <Typography
        variant="body1" // You can change this to any variant (e.g., 'body2', 'h6', etc.)
        whiteSpace="pre-line" // Line breaks
      >
        {description}
      </Typography>
    </Box>

  );
};

export default Description;