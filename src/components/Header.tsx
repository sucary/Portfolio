import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        padding: '1rem 0',
        zIndex: 1100,
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="h4" component="h1">
          sucary
        </Typography>
      </Link>
    </Box>
  );
};

export default Header;