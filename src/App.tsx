import { BrowserRouter as Router} from "react-router-dom";
import { Container} from '@mui/material';

import Home from './components/Home';

function App() {
  return (
      <Router>
        <div className='app'>
          <Container 
            maxWidth="xl"
            disableGutters
            sx={{
              marginTop: 10,
              marginBottom: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Home />
          </Container>
        </div>
      </Router>
  );
}

export default App
